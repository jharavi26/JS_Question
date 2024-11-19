/* JavaScript is a loosely-typed language. 
Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.
Error handling is an essential part of robust JavaScript programming. 
It ensures that your code can gracefully handle unexpected situations, 
such as invalid input, network issues, or other runtime problems.
Types of Error :-
1.Syntax Error  :-Errors in the code's syntax, preventing it from being parsed.
2.Logical Error :-Errors in the logic of the program, leading to incorrect behavior but no explicit error messages.
3.Runtime Error :-Errors that occur during the execution of the script.

try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}
*/ 

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }

//throw: the throw statement allows us to create a custom error.

const throwErrorExampleFun = (x) => {
    let message;
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  throwErrorExampleFun(13);