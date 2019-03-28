const setHours = () => {
  const date = new Date();
  let hours = date.getHours();
  return (document.querySelector('[data-js=hours]').innerHTML = hours);
};

const setMinutes = () => {
  const date = new Date();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (document.querySelector('[data-js=minutes]').innerHTML = minutes);
};

const setSeconds = () => {
  const date = new Date();
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return (document.querySelector('[data-js=seconds]').innerHTML = seconds);
};

setHours();
setMinutes();
setSeconds();

setInterval(() => {
  setSeconds();
}, 1000);

setInterval(() => {
  setMinutes();
}, (60 - setSeconds()) * 1000);

setInterval(() => {
  setHours();
}, (3600 - setSeconds()) * 1000);
