const form = document.querySelector("form");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // NOTE You can use dot notation to grab the name or id
  // of the input field.
  // console.log(form.username.value);

  if (usernamePattern.test(form.username.value)) {
    console.log("username is valid");
    document.querySelector(".feedback").textContent = "username is valid";
  } else {
    console.log("username is invalid");
    document.querySelector(".feedback").textContent = "username is invalid";
  }
});

// const username = "@iJAaaron3162sf#";
// const usernamePattern = /^[a-z]{6,}$/;

// let result = usernamePattern.test(username); // boolean
// let result = username.search(usernamePattern); // number for index match

// if (result) {
//   console.log("regex test passed");
// } else {
//   console.log("regex test failed");
// }

// Live feedback
form.username.addEventListener("keyup", (e) => {
  // console.log(e.target.value);
  // console.log(form.username.value);

  if (!usernamePattern.test(e.target.value)) {
    // NOTE Need to use setAttribute instead of classList.add()
    // so that it doesn't just append!
    // form.username.style = "border-color: red";
    // e.target.lassList.add("error");  // BAD! Appends!
    e.target.setAttribute("class", "error");
  } else {
    // form.username.style = "border-color: green;";
    // e.target.classList.add("success");
    // form.username.classList.add("success"); // BAD! Appends!
    e.target.setAttribute("class", "success");
  }
});
