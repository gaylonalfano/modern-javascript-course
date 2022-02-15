const searchTodo = document.querySelector(".search input");
const addTodo = document.querySelector(".add input");
const todoList = document.querySelector(".todos ul");
const todoPattern = /.{3,30}$/;

const todos = ["Take out the trash", "Feed the dog", "Do homework"];

function generateListItemTemplate(item) {
  const html = `
          <li>
            <span class="justify-between">
              ${item}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 cursor-pointer delete"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  class="delete"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </span>
          </li>
  `;

  todoList.innerHTML += html;
}

todos.forEach((todo) => {
  generateListItemTemplate(todo);
});

searchTodo.addEventListener("keyup", (e) => {
  // console.log(searchTodo.value);

  // const filtered = todos.filter((todo) => todo.includes(searchTodo.value));

  // console.log(todoList.children); // HTMLCollection
  const items = Array.from(todoList.children); // Array
  items.forEach((item) => {
    // console.log(item.innerText, searchTodo.value);
    if (
      !item.innerText.toLowerCase().includes(searchTodo.value.toLowerCase())
    ) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
  });
});

addTodo.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    // console.log("Pressed Enter key");
    const todo = addTodo.value.trim();

    if (todoPattern.test(todo)) {
      addTodo.classList.remove("border-error");
      todos.push(todo);
      // console.log(todos);

      generateListItemTemplate(todo);

      // NOTE There is a form.reset() method as well
      addTodo.value = "";
    } else {
      addTodo.classList.add("border-error");
    }
    // TODO Add text validation warning?
  }
});

// Delete todos
todoList.addEventListener("click", (e) => {
  // console.log(todoList.children);
  console.log(e.target);
  // console.log(e.target.tagName);
  // console.log(e.target.parentElement);

  // FIXME Can't target '.delete' easily since <path>
  // is child to <svg>, which is child to <a>. Sometimes
  if (
    e.target.classList.contains("delete") &&
    e.target.parentElement.tagName === "SPAN" // for <svg>
  ) {
    console.log(e.target.tagName, e.target.parentElement.parentElement.tagName);
    e.target.parentElement.parentElement.remove();
  } else if (
    e.target.classList.contains("delete") &&
    e.target.parentElement.tagName === "svg" // for <path>
  ) {
    console.log(
      e.target.tagName,
      e.target.parentElement.parentElement.parentElement.tagName
    );
    e.target.parentElement.parentElement.parentElement.remove();
  }
});
