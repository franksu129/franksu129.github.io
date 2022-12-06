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
    nextClick() {
      if (this.cardIndex === this.cardBox.length) {
        this.cardIndex = 0;
      }

      this.card_word = this.cardBox[this.cardIndex];
      console.log(this.cardIndex);
      this.cardIndex++;
    },
    selectCard(index) {
      this.cardBox = this.shuffleCard(this.allCards[index]);
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
