const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let body = document.querySelector('body');
let timeId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
    timeId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        startBtn.setAttribute("disabled", "disabled");
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timeId);
    startBtn.removeAttribute('disabled');
})
