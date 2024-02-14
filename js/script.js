'use strict';

const bars = document.querySelectorAll('.bar');
const body = document.querySelector('body');
let barChart = Array.from(bars);

async function js() {
  // I keep getting errors fpr loading the Json 
  let data = await fetch('../data.json');
  let jsonData = await data.json();

 await barChart.forEach(bar => {

    let amntTip = document.createElement('div');
    amntTip.classList.add('tooltip');

    bar.addEventListener('click', btn => {
      let txtData = jsonData[barChart.indexOf(bar)].amount;

      amntTip.innerHTML = '$' + txtData;
      bar.appendChild(amntTip);

      amntTip.classList.toggle('show')

    }, false);

  })
}

js()
