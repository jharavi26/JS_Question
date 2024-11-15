// Object :- an object is a data structure that allows you to store collections of data in key-value pairs.
//Each key is a string (or a symbol), and each value can be any valid JavaScript data type, including other objects or functions.
//The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.

//Creating an empty object

const person = {};
console.log(typeof(person));

const rectangle = {
    name : "Ravikumar",
    length: 20,
    width: 10,
    height: "30"
  }

  let property = "height";            //Dot notation is simpler and more readable but can only be used
                                    //when the property name is a valid identifier (no spaces, symbols, or starting with a number).
  console.log(rectangle.length);   
  console.log(rectangle['width']);   //Bracket notation is useful when the property name contains special characters or spaces, 
  console.log(rectangle[property]);  //or when you need to access the property dynamically (using a variable).

const keys = Object.keys(rectangle);     // getting object key
console.log(keys);

const values = Object.values(rectangle);  //getting object value
console.log(values)

const entries = Object.entries(rectangle);    //getting object key & value pair
console.log(entries) 

console.log(rectangle.hasOwnProperty('name'));      //hasOwnProperty: To check if a specific key or property exist in an object
console.log(rectangle.hasOwnProperty('work')); 

