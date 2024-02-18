'use strict';

const nav = document.querySelector('.navlist');
const feature = document.querySelectorAll('.tracks');
let allTrack = Array.from(feature);

fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    later(data);
})

function later(jsonData) {
  const data = jsonData;

  allTrack.forEach(elem => {
    const all = elem.firstElementChild.nextElementSibling.nextElementSibling;
    const status = elem.lastElementChild;
    
    elem.firstElementChild.innerHTML = data[allTrack.indexOf(elem)].title;
    all.innerHTML = data[allTrack.indexOf(elem)].timeframes.weekly.current + 'hrs';
    status.innerHTML = 'Last week - ' + data[allTrack.indexOf(elem)].timeframes.weekly.previous + 'hrs';

    nav.addEventListener('click', btn => {
      if (btn.target === nav.firstElementChild) {
        nav.lastElementChild.classList.remove('active');
        nav.firstElementChild.nextElementSibling.classList.remove('active');
        btn.target.classList.add('active');
        all.innerHTML = data[allTrack.indexOf(elem)].timeframes.daily.current + 'hrs';
        status.innerHTML = 'Last week - ' + data[allTrack.indexOf(elem)].timeframes.daily.previous + 'hrs';
      }
      else if (btn.target === nav.lastElementChild) {
        nav.firstElementChild.classList.remove('active');
        nav.firstElementChild.nextElementSibling.classList.remove('active');
        btn.target.classList.add('active');
        all.innerHTML = data[allTrack.indexOf(elem)].timeframes.monthly.current + 'hrs';
        status.innerHTML = 'Last week - ' + data[allTrack.indexOf(elem)].timeframes.monthly.previous + 'hrs';
      }
      else {
        nav.firstElementChild.classList.remove('active');
        nav.lastElementChild.classList.remove('active');
        btn.target.classList.add('active');
        all.innerHTML = data[allTrack.indexOf(elem)].timeframes.weekly.current + 'hrs';
        status.innerHTML = 'Last week - ' + data[allTrack.indexOf(elem)].timeframes.weekly.previous + 'hrs';
      }
    })
  })
}