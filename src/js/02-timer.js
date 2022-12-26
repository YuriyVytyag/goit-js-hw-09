import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('button[data-start]');
buttonEl.disabled = true;
const ref = {
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};
const { daysEl, hoursEl, minutesEl, secondsEl } = ref;
const date = new Date();
inputEl.value = date;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      return window.alert('Please choose a date in the future');
    }
    buttonEl.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
function updatedTime() {
  setInterval(() => {
    const selectedTime = new Date(inputEl.value);
    const currentTime = new Date();
    const time = selectedTime - currentTime;
    if (time < 0) {
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(time);
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }, 1000);
}

buttonEl.addEventListener('click', updatedTime);
