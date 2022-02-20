// === Comparing Dates & Timestamps (Vanilla)
const before = new Date("February 1 2022 12:00:00");
const now = new Date();
// console.log(now.getTime(), before.getTime()); // ms values
const diff = now.getTime() - before.getTime(); // ms number
const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(mins, hours, days);
console.log(`The blog was written ${days} ago`);

// Converting Timestamps into Date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));

// NOTE Comparing Dates using Date-FNS
const now = new Date();
const before = new Date("February 1 2022 12:00:00");
console.log(dateFns.distanceInWords(now, before, { addSuffix: true })); // about 2 weeks ago

// // === Clock App
// const clock = document.querySelector(".clock");
// const hour = clock.querySelector(".hour");
// const minute = clock.querySelector(".minute");
// const second = clock.querySelector(".second");

// function tickTock() {
//   // Get time
//   const now = new Date();
//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();
//   // hour.style = "color: red; font-size: 24px; background: blue;";

//   // Update DOM
//   hour.innerText = `${h}`;
//   minute.innerText = `${m}`;
//   second.innerText = s;
// }

// setInterval(tickTock, 1000);
