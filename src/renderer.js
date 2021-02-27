'use strict';

(() => {
  const dayOfWeek = (date) => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[date.getDay()];
  }

  let todayElement = document.querySelector('#today-element');
  let dt = new Date();
  let today = dayOfWeek(dt);

  todayElement.innerHTML = `<h1>Today is ${today}</h1>`;
})();
