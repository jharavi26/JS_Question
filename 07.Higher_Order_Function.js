// // HOF :- Higher order functions are functions which take other function as a parameter or return a function as a value. 
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

// console.log(cube(square,5));        //125

// Higher order functions return function as a value

// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }
//     return doSomething                 //// Higher order function returning an other function
//   }
//   console.log(higherOrder(4)(6)(10))       //n,m,t =4,6,10

//   function greet(name="Ravi")
//   {
//     console.log("My name is ",name);

//   }
//   setInterval(greet, 1000);           // it prints hello in every second, 1000ms is 1s

//   function greet(name="Ravi")
//   {
//     console.log("My name is ",name);

//   }
//   setTimeout(greet, 1000);        // it prints hello after it waits for 10 seconds.

//forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, 
// index parameter and array itself.  The index and the array optional.

// let sum=0;
// number = [1,2,3,4,5];
// number.forEach(num=> {                         //// arr.forEach((element, index, arr) => {
//   sum +=num;                                      //   console.log(index, element, arr)
// });                                               
// console.log(sum);     

// Map: Iterate an array elements and modify the array elements.
// It takes a callback function with elements, index , array parameter and return a new array.

const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare);

// //Filter: Filter out items which full fill filtering conditions and return a new array.

const numbe = [1, 2, 3, 4, 5];
const numbeSquare = numbe.filter((num) => num>4).map(num => num ** 2);  

console.log(numbeSquare);

// every: Check if all the elements are similar in one aspect. It returns boolean

//find: Return the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

// // Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp)

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
let [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];     //We can not assign variable to all the elements in the array. 
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3)         ///We can destructure few of the first and we can get the remaining as array using spread operator(...). 
console.log(rest)

// //The rest operator is used to collect or gather multiple elements into a single array or object. 
// //It’s often used in function parameters, destructuring, and object manipulation.

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10

let number = [1,2,3,4,5];
let output = number.map((num) => num*num);
console.log(output);

let numbersd = [1,2,3,4,5];
let outputs = number.filter((num) =>num>2 );          //filter only allows data who satisfy the condition
console.log(outputs);

let numberd = [1,2,3,4,5];
let outputd = number.reduce(function (acc , curr){              //takes two parameter accumlator , current
  acc = acc +curr;                                      // sum =acc , arr[i] = current 
  return acc;
}, 0);                                                  // sum =0, intialized a initial value                                         
console.log(outputd);

let result = number.reduce(function (max, curr){
  if(curr > max){
    max=curr;
  }
  return max;
},0 );
console.log(result);

const user = [
  {firstName: "Ravi" , lastName: "Jha", age: 26},
  {firstName: "Rajan" , lastName: "singh", age: 24},
  {firstName: "Anujkumar" , lastName: "Yadav", age: 22},
  {firstName: "Ram" , lastName: "Mishra", age:26},
];
console.log(user);

let fullname = user.filter((name) => name.age==26);
console.log(fullname);

let result2 = user.filter((name) => name.age<=25 ).map((name) => name.firstName);
console.log(result2);

let resu = user.reduce(function (acc, name){
    if (name.age<=25){
      acc.push(name.firstName);
    }
    return acc;

},[]);

console.log(resu);

//Polyfill for Map Function :-

Array.prototype.MyMap = function (cb ){
  let result = [];
  for(let i=0; i<this.length;i++){
    result.push(cb(this[i], i, this))
  }
  return result;
};

art = [2,3,4,5,6]
art.MyMap((num)=>console.log(num));


//Polyfills for Filter Function :-
Array.prototype.MyFilter = function (cb){
  let result2 = [];
  for(let i=0; i<this.length; i++){
    if(cb(this[i], i, this)) result2.push(this[i]);
  }
  return result2;
}

rat = art.MyFilter((num)=>num>2)
console.log(rat);

//Polyfills for Reduce 
Array.prototype.MyReduce = function(cb, initialValue)
{
  var accumlator = initialValue;
  for(i=0; i<this.length;i++){
    accumlator = accumlator ? cb(accumlator,this[i], i, this): this[i];
  }
  return accumlator;
}
tra = art.MyReduce((acc, curr, i, arr)=>{
  return acc+curr;
},0)

console.log(tra)

