function getTodos(resource, callback) {
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
      callback(undefined, data);
    } else if (request.readyState === 4) {
      // NOTE If it fails, it will come back with response error status code
      // console.log("Could not fetch the data", request.status); // 404
      // NOTE Instead of just console.log(), we can call a custom CALLBACK()!
      callback("Could not fetch data", undefined);
    }
  });

  // request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // Fail /todosss
  request.open("GET", resource);
  request.send();
}

// Async
console.log(1);
console.log(2);

// CALLBACK HELL!
getTodos("./data/mario.json", (error, data) => {
  // We pass a callback function as arg
  // NOTE Convention is to pass 'error' then 'data' as args in order
  console.log("callback fired");

  // Check what we have ie error or data
  if (error) {
    console.log(error);
  } else {
    console.log(data);

    // IMPORTANT Now we want to go get the 2nd resource (we have 3 files)
    // This is CALLBACK HELL!
    getTodos("./data/peach.json", (error, data) => {
      console.log(data);
      getTodos("./data/toad.json", (error, data) => {
        console.log(data);
      });
    });
  }
});

console.log(3);
console.log(4);
