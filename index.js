const daysP = document.querySelector(".days-p");
const hoursP = document.querySelector(".hours-p");
const minutesP = document.querySelector(".minutes-p");
const secondsP = document.querySelector(".seconds-p");

const timer = setInterval(function () {
  console.log("test");
  const christmasTime = new Date("Dec 25, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const timeGap = christmasTime - now;
  const days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeGap % (1000 * 60)) / 1000);
  daysP.textContent = days;
  hoursP.textContent = hours;
  minutesP.textContent = minutes;
  secondsP.textContent = seconds;
}, 1000);

timer;
