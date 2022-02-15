const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector("form");
const result = document.querySelector(".result");

// console.log(form.q1.value);
// console.log(form.q2.value);
// console.log(form.q3.value);
// console.log(form.q4.value);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswers.forEach((a, i) => {
    if (a === correctAnswers[i]) {
      score += 1;
    }
  });

  score = (score * 100) / correctAnswers.length;

  console.log(score);

  // === Update the DOM result section & scroll to top
  // Scroll back to top
  // window.scroll({
  //   top: 0,
  //   left: 0,
  //   behavior: "smooth",
  // });
  scrollTo(0, 0);

  // console.log(scoreElement.textContent);
  result.classList.remove("hidden");
  // result.querySelector("span").textContent = `${score}%`;
  let i = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${i}%`;

    i === score ? clearInterval(timer) : i++;
  }, 20);
});
