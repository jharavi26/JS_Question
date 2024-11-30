// You can chain multiple then() calls to process the result of a promise step by step.

// Common Method :- 
// 1.Promise.resolve () :-Returns a promise that is resolved with the given value.
// 2.Promise.reject() :- Promise.reject("Error!").catch((reason) => console.log(reason)); // Logs: Error!
// 3.Promise.all() :-Waits for all promises to resolve (or any to reject).
// 4.Promise.race():-Waits for the first promise to settle (either resolved or rejected).
// 5.Promise.allSettled():- Waits for all promises to settle, regardless of resolve or reject.



const calculate = new Promise((resolve, reject) => {
  resolve(5);
});

calculate
  .then((number) => {
    console.log(`First result: ${number}`);
    return number * 2;
  })
  .then((newNumber) => {
    console.log(`Second result: ${newNumber}`);
    return newNumber + 3;
  })
  .then((finalNumber) => {
    console.log(`Final result: ${finalNumber}`);
  });


const promise1 = new Promise((resolve) => setTimeout(resolve, 100, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 50, "Second"));

Promise.race([promise1, promise2]).then((result) => console.log(result)); // Logs: Second





