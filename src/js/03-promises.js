const form = document.querySelector('.form');
const delay = form.elements.delay;
const step = form.elements.step;
const amount = form.elements.amount;


form.addEventListener('submit', (e) => {
  e.preventDefault();
 
  for (let i = 0; i <= amount; i += 1) {
    i = position;
    createPromise();
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}`);
      } else {
        reject(`Rejected promise ${position} in ${delay}`);
      }
    }, step);
  });
  return promise;
};
promise.then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });