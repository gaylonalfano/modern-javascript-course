// BEFORE trying to add Promise (e.g., only using callback)
// function getTodos(resource, callback) {
//   const request = new XMLHttpRequest();

//   // To listen for when our request is complete we use 'readystatechange'
//   request.addEventListener("readystatechange", () => {
//     // NOTE This event fires every time a state change occurs in request
//     // There are FOUR phases of a request (4 = DONE):
//     // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
//     // console.log(request, request.readyState);
//     // console.log(request);

//     if (request.readyState === 4 && request.status === 200) {
//       // NOTE readyState 4 = DONE, so now we can do something with the response!
//       // console.log(request.responseText); // Has all the JSON DATA!
//       // NOTE Instead of just console.log(), we can call a custom CALLBACK()!
//       // NOTE Convention is to pass 'error' then 'data' as args in order
//       const data = JSON.parse(request.responseText); // Convert JSON to JS Object
//       // Q: If we implemented Promises (instead of callbacks), would we return a
//       // new Promise here and resolve(data)? And, subsequently, reject(error) if
//       // the request failed? Or, do I need to wrap this if/else block INSIDE a new
//       // Promise?
//       // callback(undefined, data);
//     } else if (request.readyState === 4) {
//       // NOTE If it fails, it will come back with response error status code
//       // console.log("Could not fetch the data", request.status); // 404
//       // NOTE Instead of just console.log(), we can call a custom CALLBACK()!
//       callback("Could not fetch data", undefined);
//     }
//   });

//   // request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // Fail /todosss
//   request.open("GET", resource);
//   request.send();
// }

// === ADDING Promises instead of callbacks
// A: We wrap the ENTIRE request code inside the return new Promise() {...} block!
function getTodos(resource) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    // To listen for when our request is complete we use 'readystatechange'
    request.addEventListener("readystatechange", () => {
      // NOTE This event fires every time a state change occurs in request
      // There are FOUR phases of a request (4 = DONE):
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
      // console.log(request, request.readyState);
      // console.log(request);

      if (request.readyState === 4 && request.status === 200) {
        // NOTE readyState 4 = DONE, so now we can do something with the response!
        // console.log(request.responseText); // Has all the JSON DATA!
        // NOTE Instead of just console.log(), we can call a custom CALLBACK()!
        // NOTE Convention is to pass 'error' then 'data' as args in order
        const data = JSON.parse(request.responseText); // Convert JSON to JS Object
        // Q: If we implemented Promises (instead of callbacks), would we return a
        // new Promise here and resolve(data)? And, subsequently, reject(error) if
        // the request failed? Or, do I need to wrap this if/else block INSIDE a new
        // Promise?
        // A: We wrap the ENTIRE request code inside the return new Promise() {...} block!
        // callback(undefined, data);
        resolve(data);
      } else if (request.readyState === 4) {
        // NOTE If it fails, it will come back with response error status code
        // console.log("Could not fetch the data", request.status); // 404
        // NOTE Instead of just console.log(), we can call a custom CALLBACK()!
        // callback("Could not fetch data", undefined);
        reject("Error: Could not fetch data");
      }
    });

    // request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // Fail /todosss
    request.open("GET", resource);
    request.send();
  });
}

// = Without Chaining Promises
// getTodos("./data/mariooo.json")
//   .then((data) => {
//     console.log("RESOLVED!");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("REJECTED!");
//     console.log(error);
//   });

// = With CHAINING Promises
// Problem is that we don't know how many resources there are. Below we're
// hard-coding it to handle three.
getTodos("./data/mario.json")
  .then((data) => {
    console.log("Promise 1 RESOLVED!", data);
    return getTodos("./data/peach.json"); // Another Promise so can use .then()
  })
  .then((data) => {
    console.log("Promise 2 RESOLVED!", data);
    return getTodos("./data/toad.json"); // Another Promise so can use .then()
  })
  .then((data) => {
    console.log("Promise 3 RESOLVED!", data);
  })
  // NOTE .catch() works for ALL Promises. No need to write multiple
  .catch((error) => {
    console.log("REJECTED!");
    console.log(error);
  });

// // === BROKEN: CHAINING Promises with MULTIPLE Resources to fetch!
// // Q: Should I pass an ARRAY of resources or simply keep the getTodos(resource): Promise
// // the same? I imagine looping over list of resources and then storing the Promises
// // inside another Array. Then, finally loop over Promise[] and do the resolve, reject?
// // Not entirely sure...
// function getTodos(resources) {
//   // Change resource to resources Array to loop over!
//   resources.forEach((resource) => {
//     return new Promise((resolve, reject) => {
//       const request = new XMLHttpRequest();

//       // To listen for when our request is complete we use 'readystatechange'
//       request.addEventListener("readystatechange", () => {
//         // NOTE This event fires every time a state change occurs in request
//         // There are FOUR phases of a request (4 = DONE):
//         // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
//         // console.log(request, request.readyState);
//         // console.log(request);

//         if (request.readyState === 4 && request.status === 200) {
//           // NOTE readyState 4 = DONE, so now we can do something with the response!
//           // console.log(request.responseText); // Has all the JSON DATA!
//           // NOTE Instead of just console.log(), we can call a custom CALLBACK()!
//           // NOTE Convention is to pass 'error' then 'data' as args in order
//           const data = JSON.parse(request.responseText); // Convert JSON to JS Object
//           // Q: If we implemented Promises (instead of callbacks), would we return a
//           // new Promise here and resolve(data)? And, subsequently, reject(error) if
//           // the request failed? Or, do I need to wrap this if/else block INSIDE a new
//           // Promise?
//           // A: We wrap the ENTIRE request code inside the return new Promise() {...} block!
//           // callback(undefined, data);
//           resolve(data);
//         } else if (request.readyState === 4) {
//           // NOTE If it fails, it will come back with response error status code
//           // console.log("Could not fetch the data", request.status); // 404
//           // NOTE Instead of just console.log(), we can call a custom CALLBACK()!
//           // callback("Could not fetch data", undefined);
//           reject("Error: Could not fetch data");
//         }
//       });

//       // request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // Fail /todosss
//       request.open("GET", resource);
//       request.send();
//     });
//   });
// }

// const resources = ["./data/mario.json"];

// getTodos(resources)
//   .then((data) => {
//     console.log("RESOLVED!");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("REJECTED!");
//     console.log(error);
//   });

// === CALLBACK HELL!
// console.log(1);
// console.log(2);

// getTodos("./data/mario.json", (error, data) => {
//   // We pass a callback function as arg
//   // NOTE Convention is to pass 'error' then 'data' as args in order
//   console.log("callback fired");

//   // Check what we have ie error or data
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);

//     // IMPORTANT Now we want to go get the 2nd resource (we have 3 files)
//     // This is CALLBACK HELL!
//     getTodos("./data/peach.json", (error, data) => {
//       console.log(data);
//       getTodos("./data/toad.json", (error, data) => {
//         console.log(data);
//       });
//     });
//   }
// });

// console.log(3);
// console.log(4);

// === Promise Example
// function getSomething() {
//   // First thing we do is return a Promise, which takes a func as an argument
//   // that has two params itself (resolve, reject)
//   return new Promise((resolve, reject) => {
//     // Fetch something. If success => resolve(data), Else => reject(error)
//     // resolve("some data"); // pass data to resolve()
//     // Q: What about when it rejects? Is the error passed as arg inside .then((error)) like resolve?
//     // A: The callback inside .then() has a SECOND ARG function to handle the reject!
//     reject("some error"); // pass error
//   });
// }

// NOTE When a Promise resolves (ie resolve(data)), we can specify another callback fn to
// run after it resolves. This means we have access to the resolved 'data' inside.
// NOTE When we resolve something inside a Promise, it fires the CALLBACK function inside
// the .then() method! The callback() takes the data we passed to resolve(data)
// Q: What about when it rejects? Is the error passed as arg inside .then((error)) like resolve?
// A: The callback inside .then() has a SECOND ARG function to handle the reject!
// getSomething().then(
//   (data) => {
//     console.log("Promise RESOLVED! Now can access the resolved data!");
//     console.log(data); // "some data" (what we passed to resolve()!);
//   },
//   (error) => {
//     console.log("Promise REJECTED!");
//     console.log(error);
//   }
// );

// Alternate syntax using .catch method. DOES EXACT SAME THING AS ABOVE!
// getSomething()
//   .then((data) => {
//     console.log("Promise RESOLVED! Now can access the resolved data!");
//     console.log(data); // "some data" (what we passed to resolve()!);
//   })
//   .catch((error) => {
//     console.log("Promise REJECTED!");
//     console.log(error);
//   });
