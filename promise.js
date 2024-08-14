// The promise object represents the eventual completion or failure of an asynchronous operations and its resulting value
// Promises is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const p = new Promise((resolve, reject) => {
  // Kick off some async work
  setTimeout(() => {
    // resolve(1); pending => resolved, fulfilled
    reject(new Error("message")); // pending => rejected
  }, 2000);
});

// we use then to get the result and catch to get the error

p.then((res) => console.log("Reuslt", res)).catch((err) =>
  console.log(err.message)
);
