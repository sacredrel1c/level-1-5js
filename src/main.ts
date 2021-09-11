const moment = require('moment');

let duration: number = 5;
const timer = document.getElementById('timer');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const startButton = document.getElementById('start');
const title = document.getElementById('title');
timer.innerText = duration.toString();
increaseButton.addEventListener('click', () => {
  duration += 1;
  timer.innerText = duration.toString();
});
decreaseButton.addEventListener('click', () => {
  if (duration > 0) {
    duration -= 1;
    timer.innerText = duration.toString();
  }
});
startButton.addEventListener('click', () => {
  increaseButton.parentNode.removeChild(increaseButton);
  decreaseButton.parentNode.removeChild(decreaseButton);
  startButton.parentNode.removeChild(startButton);
  title.innerText = 'Осталось';
  const interval = 1000;
  const endTime: number = moment().unix() + duration * 60;
  setInterval(() => {
    const currentTime: number = moment().unix();
    const timeLeft = endTime - currentTime;
    document.getElementById('timer').innerText = moment
      .utc(timeLeft * interval)
      .format('mm:ss');
  }, interval);
});
