const clock = document.querySelector("h2#clock");

function getTimes() {
  const nowTimes = new Date();
  const nowHours = String(nowTimes.getHours()).padStart(2, "0");
  const nowMinutes = String(nowTimes.getMinutes()).padStart(2, "0");
  const nowSeconds = String(nowTimes.getSeconds()).padStart(2, "0");
  clock.innerText = `${nowHours}:${nowMinutes}:${nowSeconds}`;
}

getTimes();
setInterval(getTimes, 1000);
