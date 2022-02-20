// Async & Await
// async function getTodos() {
//   // NOTE ALL async functions return a Promise, no matter what
//   // we do inside this async function!
//   const response = await fetch("data/mario.json");
// }

// // Promise Chaining (standard)
// fetch("data/mariooo.json")
//   .then((response) => {
//     console.log("fetch() RESOLVED", response);
//     // NOTE Have to use .json() method on Response object to get data
//     // But response.json() returns a PROMISE! So we have to handle with .then()!
//     // But first, we need to return this Promise! E.g. return response.json()!
//     // console.log(response.json()); // Promise {<pending>}
//     return response.json();
//   })
//   .then((data) => {
//     console.log("response.json() RESOLVED", data);
//   })
//   // NOTE fetch will ALWAYS resolve unless there is a network issue!
//   // Only then will catch() fire. Gotta check response.ok
//   .catch((err) => {
//     console.log("REJECTED", err);
//   });

// === Promise.all([Promise1, Promise2, ...])
// https://youtu.be/vn3tm0quoqE?t=545
async function getFruit(name) {
  const fruits = {
    pineapple: "pineapple",
    peach: "peach",
    strawberry: "strawberry",
  };

  // NOTE 'async' keyword basically syntax sugar for:
  // return Promise.resolve(fruits[name])
  return fruits[name];
}

getFruit("peach").then(console.log);

async function makeSmoothie() {
  // BAD - This is BLOCKING! Only do if next line depends on this value!
  // const a = await getFruit("pineapple"); // BLOCKING!
  // const b = await getFruit("strawberry");
  // return [a, b];

  // BETTER - Add Promises to array and at end return Promise.all([Promise1, Promise2, ...])
  // const a = getFruit("pineapple"); // Promise
  // const b = getFruit("strawberry"); // Promise
  // return Promise.all([a, b]); // ['pineapple', 'strawberry']

  // BEST - Use 'await' for the Promise.all() call
  const a = getFruit("pineapple");
  const b = getFruit("strawberry");
  const smoothie = await Promise.all([a, b]);
  return smoothie; // ['pineapple', 'strawberry']
}
makeSmoothie().then(console.log);

// = Can even use await inside FOR LOOPS
const fruits = ["peach", "pineapple", "strawberry"];
const smoothie = fruits.map((v) => getFruit(v));
const fruitLoop = async () => {
  // NOTE This will await the array of Promises (smoothie) to resolve
  // and then loop over the array immediately afterwards to log
  for await (const fruit of smoothie) {
    console.log(fruit);
  }
};
fruitLoop();

// = Can use await directly inside IF STATEMENTS
const fruitInspection = async () => {
  // NOTE We can await the resolved value of a Promise to compare to another val
  if ((await getFruit("peach")) === "peach") {
    console.log("looks peachy!");
  }
};
fruitInspection();
