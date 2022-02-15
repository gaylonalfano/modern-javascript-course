const clock = document.querySelector(".clock");
const hour = clock.querySelector(".hour");
const minute = clock.querySelector(".minute");
const second = clock.querySelector(".second");

function tickTock() {
  // Get time
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  // hour.style = "color: red; font-size: 24px; background: blue;";

  // Update DOM
  hour.innerText = `${h}`;
  minute.innerText = `${m}`;
  second.innerText = s;
}

setInterval(tickTock, 1000);
