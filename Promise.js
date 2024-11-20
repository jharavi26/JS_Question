//Callback
//Promise :- It's an object that represents a future result of an operation.

/* A promise has three states:
1. Pending: The process isn't done yet.
2. Fulfilled: The process completed successfully.
3. Rejected: The process failed.*/

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
  