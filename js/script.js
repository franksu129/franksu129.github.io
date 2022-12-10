var temp;
var app = new Vue({
  el: '#app',
  data: {
    allCards: [],
    playMode: 0, // 0: 選擇卡牌, 1:進行遊戲
    card_word: '準備開始',
    cardIndex: 0,
    cardBox: [],
  },
  created: function () {
    fetch('../data/wordCard.json')
      .then((response) => response.json())
      .then((json) => {
        this.allCards = json;
      });
  },
  methods: {
    homeClick() {
      this.playMode = 0;
      this.card_word = '準備開始';
    },
    nextClick() {
      if (this.cardIndex === this.cardBox.length) {
        alert('已結束');
      } else {
        this.card_word = this.cardBox[this.cardIndex];
        this.cardIndex++;
      }
    },
    backClick() {
      if (this.cardIndex === 0) {
        this.cardIndex = this.cardBox.length - 1;
      }

      this.card_word = this.cardBox[this.cardIndex];
      this.cardIndex--;
    },
    selectCard(index) {
      this.cardBox = this.shuffleCard(this.allCards[index]).cards;
      this.cardIndex = 0;
      this.playMode = 1;
    },
    shuffleCard(a) {
      for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
      return a;
    },
  },
});

window.onload = function () {
  var lastTouchEnd = 0;
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });

  // 雙擊放大
  // document.addEventListener(
  //   'touchend',
  //   function (event) {
  //     var now = new Date().getTime();
  //     if (now - lastTouchEnd <= 300) {
  //       event.preventDefault();
  //     }
  //     lastTouchEnd = now;
  //   },
  //   false
  // );

  document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
  });
};
