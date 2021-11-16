import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = form.elements.delay;
const step = form.elements.step;
const amount = form.elements.amount;
  

form.addEventListener('submit', (e) => {
  e.preventDefault();
 
  for (let i = 0; i <= Number(amount.value); i += 1) {
    let delayValue = Number(delay.value) += Number(step.value);
    setTimeout(() => {
      createPromise(i, delayValue);
    }, delayValue);
  };
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}`));
    } else {
      reject(Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}`));
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
