//A function is a reusable block of code or programming statements designed to perform a certain task. 
//A function is declared by a function key word followed by a name, followed by parentheses (). 
//A parentheses can take a parameter.

//A function can be declared or created in couple of ways:

// 1. Declaration function :-
// 2. Expression function
// 3. Anonymous function :-Anonymous function or without name
// 4. Arrow function :-Arrow function uses arrow instead of the keyword function to declare a function. 

function square() {
    let num =4;
    let sq = num * num
    console.log(sq)
  }

square();

// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];      //calling a function
  console.log(sumArrayValues(numbers));


// Expression functions are anonymous functions. 
//After we create a function without a name and we assign it to a variable. 
//To return a value from the function we should call the variable.

const anonymousFun = function() {
    console.log('I am an anonymous function and my value is stored in anonymousFun');
}
anonymousFun();

const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
console.log(printFullName('Ravikumar', 'Jha'))

function greetings(name = 'Rajan') {                      //Function with default Parameter
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Ravikumar'))
