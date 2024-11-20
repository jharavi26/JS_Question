//Callback
//Promise :- It's an object that represents a future result of an operation.

/* A promise has three states:
1. Pending: The initial state when the operation is ongoing and not yet complete.
2. Fulfilled: The process completed successfully.
3. Rejected: The process failed.

The Promise constructor takes a function with two arguments:
resolve: Call this when the operation is successful.
reject: Call this when the operation fails.

.then(): Handles the fulfilled state and gets the resolved value.
.catch(): Handles the rejected state and gets the rejection reason.
*/
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    const success = true; // Change this to false to test rejection
    setTimeout(() => {
      if (success) {
        resolve('Operation successful!');
      } else {
        reject('Operation failed.');
      }
    }, 2000); // Simulate 2 seconds delay
  });
  myPromise
  .then(result => {
    console.log(result); // Runs if the promise is fulfilled
  })
  .catch(error => {
    console.log(error); // Runs if the promise is rejected
  });

  
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  const doSomethings = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
    }, 2000)
  }
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback);
  doSomethings(callback);

const pizzaOrder = new Promise((resolve, reject) => {
    const pizzaArrived = true; // Simulating success
  
    setTimeout(() => {
      if (pizzaArrived) {
        resolve('Pizza is here!'); // Success
      } else {
        reject('No pizza today!'); // Failure
      }
    }, 2000); // Wait 2 seconds
  });
  
  // How to use the promise
  pizzaOrder
    .then(message => {
      console.log(message); // If fulfilled, this runs
    })
    .catch(error => {
      console.log(error); // If rejected, this runs
    });
  