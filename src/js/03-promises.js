function createPromise(position, delay) {
  for (i = 0; i = < input.value; i += 1) {
    
  }
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
   .then(({ position, delay }) => {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  });

}
const form = document.querySelector('.form');
const inputs = form.querySelectorAll('input');
const input = inputs[2];

form.addEventListener('submit', createPromise);

