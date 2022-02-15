const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button.addEventListener("click", () => {
  // console.log("clicked", popup);
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  console.log(e.target);
  // Option 1
  if (e.target === popup) {
    popup.style.display = "none";
  }

  // Option 2
  if (e.target.className === "popup-wrapper") {
    popup.style.display = "none";
  }

  // Option 3
  if (e.target.classList[0] === "popup-wrapper") {
    popup.style.display = "none";
  }
});
