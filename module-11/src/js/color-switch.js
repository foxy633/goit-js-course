const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

setColor = () => {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.style.backgroundColor = color;
};

// let intervalId = -1;
// refs.startBtn.addEventListener('click', () => {
//   if (intervalId === -1) {
//     intervalId = setInterval(() => setColor(), 1000);
//   }
// });

// refs.stopBtn.addEventListener('click', () => {
//   clearInterval(intervalId);
//   intervalId = -1;
// });

let intervalId;
refs.startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => setColor(), 1000);
  refs.startBtn.disabled = true;
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
});
