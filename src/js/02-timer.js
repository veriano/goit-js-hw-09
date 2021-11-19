import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = options.defaultDate;
   
    if (selectedDates[0] < date) {
     Notiflix.Notify.failure( "Please choose a date in the future");
    } else {
      startBtn.removeAttribute('disabled');
    }

    startBtn.addEventListener('click', onStartBtnClick);

    function onStartBtnClick() {
        const startTime = selectedDates[0];
        let intervalId = null;
          intervalId = setInterval(() => {
          const currentTime = Date.now();
            let deltaTime = startTime - currentTime;
            if (deltaTime < 1000) {
          clearInterval(intervalId);
          }
           const timeComponents = convertMs(deltaTime);
          
          days.textContent = addLeadingZero(timeComponents.days);
          hours.textContent = addLeadingZero(timeComponents.hours);
          minutes.textContent = addLeadingZero(timeComponents.minutes);
          seconds.textContent = addLeadingZero(timeComponents.seconds);
        }, 1000);
      }
      
    }
  };
  


flatpickr(input, options);

function addLeadingZero(value) {
  return String(value).padStart(2,'0');
};


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

