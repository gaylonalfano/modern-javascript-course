// const header = document.querySelector("h1");
// const content = document.querySelector("p");

// content.setAttribute('style', 'margin: 50px;');

// console.log(header.style);
// console.log(content.classList);
// content.classList.add("error");
// header.style.color = "orange";
// header.style.fontSize = "80px";

// // === Challenge 1
// const title = document.querySelector(".title");
// const paras = document.querySelectorAll("p");
// console.log(paras); // NodeList

// paras.forEach((p) => {
//   console.log(p.innerText);

//   // NOTE textContent shows ALL text, while innerText
//   // only returns the VISIBLE text. Shaun like textContent.
//   if (p.innerText.includes("error")) {
//     p.classList.add("error");
//   }

//   if (p.textContent.includes("success")) {
//     p.classList.add("success");
//   }
// });

// // Show the toggle method
// title.classList.toggle("test");

// // === Challenge 2 - Relationships
// const article = document.querySelector("article");
// // console.log(article.children); // HTMLCollection

// // Parent-Child
// // Array.from(article.children).forEach((child) => {
// //   child.classList.add("article-element");
// //   console.log(child);
// // });

// // Child-Parent
// const title = document.querySelector("h2");
// console.log(title.parentElement); // <article>
// console.log(title.parentElement.parentElement); // <body>
// console.log(title.nextElementSibling);
// console.log(title.nextSibling); // #text Node
// console.log(title.previousElementSibling);

// // chaining
// console.log(title.nextElementSibling.parentElement.children); // HTMLCollection

// // === Challenge 3: Events
// const ul = document.querySelector("ul");
// const button = document.querySelector("button");
// const items = document.querySelectorAll("li");

// button.addEventListener("click", () => {
//   // ul.innerHTML += `<li>Howdy</li>`;
//   const li = document.createElement("li");
//   li.textContent = "Something new";
//   // ul.append(li); // Inserts at BOTTOM
//   // ul.prepend(li); // Inserts at TOP
//   ul.appendChild(li);
// });

// function deleteItem(e) {
//   e.target.remove();
// }

// // items.forEach((i) =>
// //   i.addEventListener("click", (e) => {
// //     console.log(`CLICKED: ${e.target.innerText}`);
// //   })
// // );

// // items.forEach((i) => {
// //   i.addEventListener("click", (e) => {
// //     // e.target.style.display = "none";
// //     // e.target.style.textDecoration = "line-through";
// //     console.log("event in LI");
// //     // NOTE To stop event bubbling we use e.stopPropagation()
// //     // so it doesn't bubble up to the parent
// //     // NOTE Better is to use Event Delegation and attach
// //     // the listener to the Parent once (ie the UL tag)
// //     e.stopPropagation();
// //     e.target.remove();
// //   });
// // });

// ul.addEventListener("click", (e) => {
//   // console.log("event in UL");
//   // NOTE Event bubble up from LI will then trigger the listener
//   // callback on the parent UL. THIS IS MORE PERFORMANT!
//   console.log(e.target);
//   // Check that they've clicked the actual LI using .tagName = "LI" property
//   if (e.target.tagName == "LI") {
//     e.target.remove();
//   }
// });

// // === Challenge 4: More Events
// const copy = document.querySelector(".copy-me");

// copy.addEventListener("copy", () => {
//   console.log("OI! My content is copyright.");
// });

// const box = document.querySelector(".box");

// box.addEventListener("mousemove", (e) => {
//   // console.log(e); // MouseEvent
//   // console.log(e.clientX, e.clientY);
//   // console.log(e.offsetX, e.offsetY); // From top corners inside box

//   box.textContent = `x pos: ${e.offsetX} || y pos: ${e.offsetY}`;
// });

// document.addEventListener("wheel", (e) => {
//   console.log(e.pageX, e.pageY);
// });
