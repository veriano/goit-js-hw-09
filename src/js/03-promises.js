import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = form.elements.delay;
const step = form.elements.step;
const amount = form.elements.amount;
let stepValue = Number(step.value);
let delayValue = Number(delay.value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  for (let i = 1; i <= amount.value; i += 1) {
    delayValue += stepValue;
    setTimeout(() => {
      createPromise(i, delayValue);
    }, delayValue);
  };
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`));
      } else {
        reject(Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`));
      }
    });
};
createPromise(2, 1500)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  