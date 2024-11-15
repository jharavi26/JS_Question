// HOF :- Higher order functions are functions which take other function as a parameter or return a function as a value. 
// Callback Function :-The function passed as a parameter to other function is called callback.

//setInterval higher order function to do some activity continuously with in some interval of time.
//we use setTimeout higher order function to execute some action at some time in the future.

//Callback 

function square(n){
    return n**2;
}

function cube(callback, n)
{
    return square(n)*n;        //square is a callback function here.
}

console.log(cube(square,5));        //125

// Higher order functions return function as a value

const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething                 //// Higher order function returning an other function
  }
  console.log(higherOrder(4)(6)(10))       //n,m,t =4,6,10

  // function greet(name="Ravi")
  // {
  //   console.log("My name is ",name);

  // }
  // setInterval(greet, 1000);           // it prints hello in every second, 1000ms is 1s

  function greet(name="Ravi")
  {
    console.log("My name is ",name);

  }
  setTimeout(greet, 1000);        // it prints hello after it waits for 10 seconds.

  //forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, 
  // index parameter and array itself.  The index and the array optional.

let sum=0;
number = [1,2,3,4,5];
number.forEach(num=> {                         //// arr.forEach((element, index, arr) => {
  sum +=num;                                      //   console.log(index, element, arr)
});                                               
console.log(sum);     

// map: Iterate an array elements and modify the array elements.
// It takes a callback function with elements, index , array parameter and return a new array.

const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare);

//Filter: Filter out items which full fill filtering conditions and return a new array.

const numbe = [1, 2, 3, 4, 5];
const numbeSquare = numbe.filter((num) => num>4).map(num => num ** 2);  

console.log(numbeSquare);

// every: Check if all the elements are similar in one aspect. It returns boolean

//find: Return the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)
