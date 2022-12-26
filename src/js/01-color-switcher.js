const refs = {
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
};
console.log(refs.buttonStop);
const bodyEl = document.querySelector('body');
console.log(bodyEl);
let colorId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

refs.buttonStart.addEventListener('click', () => {
  colorId = setInterval(changeBodyColor, 1000);
  refs.buttonStart.disabled = true;
});

refs.buttonStop.addEventListener('click', () => {
  clearInterval(colorId);
  refs.buttonStart.disabled = false;
});
