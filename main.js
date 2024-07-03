const { createApp, ref } = Vue



createApp({
    setup() {
        const isClickable = ref(true);
        const resultImage = ref('');

        const getCard = () => {
            let result = weightedRandom(options);
            console.log(result);
            resultImage.value =  `./image/${result}`;
            console.log(resultImage.value);
            document.querySelector('.image').classList.add('flip');
            isClickable.value = false;
        }

        const backToChoose = () => {
            document.querySelector('.image').classList.remove('flip');
            isClickable.value = true;
        }

        return {
            isClickable,
            resultImage,
            getCard,
            backToChoose
        }
    }
}).mount('#app')


const weightedRandom = (options) => {
    let totalWeight = options.reduce((sum, option) => sum + option.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (let option of options) {
        if (random < option.weight) {
            return option.value;
        }
        random -= option.weight;
    }
}


let options = [
    // SSR
    { value: 'SSR/01PRK.jpg', weight: 0.01 },
    { value: 'SSR/02SOM.jpg', weight: 0.01 },
    { value: 'SSR/03LBY.jpg', weight: 0.01 },
    // SR
    { value: 'SR/04ERI.jpg', weight: 0.0156 },
    { value: 'SR/05YE.jpg', weight: 0.0156 },
    { value: 'SR/06NGA.jpg', weight: 0.0156 },
    { value: 'SR/07PAK.jpg', weight: 0.0156 },
    { value: 'SR/08SDN.jpg', weight: 0.0156 },
    { value: 'SR/09IRN.jpg', weight: 0.0156 },
    { value: 'SR/10AFG.jpg', weight: 0.0156 },
    { value: 'SR/11IND.jpg', weight: 0.0156 },
    { value: 'SR/12SYR.jpg', weight: 0.0156 },
    { value: 'SR/13SAU.jpg', weight: 0.0156 },
    // R
    { value: 'R/14MLI.jpg', weight: 0.022 },
    { value: 'R/15DZA.jpg', weight: 0.022 },
    { value: 'R/16IRQ.jpg', weight: 0.022 },
    { value: 'R/17MMR.jpg', weight: 0.022 },
    { value: 'R/18MDV.jpg', weight: 0.022 },
    { value: 'R/19CHN.jpg', weight: 0.022 },
    { value: 'R/20BF.jpg', weight: 0.022 },
    { value: 'R/21LAO.jpg', weight: 0.022 },
    { value: 'R/22CUB.jpg', weight: 0.022 },
    { value: 'R/23MRT.jpg', weight: 0.022 },
    { value: 'R/24MAR.jpg', weight: 0.022 },
    { value: 'R/25UZB.jpg', weight: 0.022 },
    { value: 'R/26BGD.jpg', weight: 0.022 },
    { value: 'R/27NER.jpg', weight: 0.022 },
    { value: 'R/28CAF.jpg', weight: 0.022 },
    { value: 'R/29TKM.jpg', weight: 0.022 },
    { value: 'R/30NIC.jpg', weight: 0.022 },
    { value: 'R/31OMN.jpg', weight: 0.022 },
    { value: 'R/32ETH.jpg', weight: 0.022 },
    { value: 'R/33TUN.jpg', weight: 0.022 },
    { value: 'R/34COL.jpg', weight: 0.022 },
    { value: 'R/35VNM.jpg', weight: 0.022 },
    { value: 'R/36BTN.jpg', weight: 0.022 },
    { value: 'R/37MEX.jpg', weight: 0.022 },
    { value: 'R/38EGY.jpg', weight: 0.022 },
    { value: 'R/39MOZ.jpg', weight: 0.022 },
    { value: 'R/40QAT.jpg', weight: 0.022 },
    { value: 'R/41COD.jpg', weight: 0.022 },
    { value: 'R/42IDN.jpg', weight: 0.022 },
    { value: 'R/43CMR.jpg', weight: 0.022 },
    { value: 'R/44BRN.jpg', weight: 0.022 },
    { value: 'R/45COM.jpg', weight: 0.022 },
    { value: 'R/46TJK.jpg', weight: 0.022 },
    { value: 'R/47KAZ.jpg', weight: 0.022 },
    { value: 'R/48JOR.jpg', weight: 0.022 },
    { value: 'R/49MYS.jpg', weight: 0.022 },
    { value: 'R/50TUR.jpg', weight: 0.022 },
];