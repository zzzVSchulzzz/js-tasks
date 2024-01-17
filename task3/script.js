const trafficLightEl = document.querySelector('.traffic-light');
const red = trafficLightEl.querySelector('.red')
const yellow = trafficLightEl.querySelector('.yellow')
const green = trafficLightEl.querySelector('.green')

function onActiveLightChange(event) {
    if(event.target.classList.contains('traffic-light')) {
        return;
    }
    const elementClassList = event.target.classList
    event.target.classList.toggle('active');

    if(elementClassList.contains('red')) {
        green.classList.remove('active');
        yellow.classList.remove('active');
    } else if(elementClassList.contains('yellow')) {
        green.classList.remove('active');
        red.classList.remove('active');
    } else if(elementClassList.contains('green')) {
        red.classList.remove('active');
        yellow.classList.remove('active');
    }
};

trafficLightEl.addEventListener('click', onActiveLightChange);
