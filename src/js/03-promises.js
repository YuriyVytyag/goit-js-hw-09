import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

function createPromise(position, delay) {
  const dataInfo = { position, delay };
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(dataInfo);
      } else {
        reject(dataInfo);
      }
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();
  const formEl = event.target.elements;

  let delay = Number(formEl.delay.value);
  let step = Number(formEl.step.value);
  let amount = Number(formEl.amount.value);

  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
  // refs.form.reset();
}

refs.form.addEventListener('submit', onSubmit);
