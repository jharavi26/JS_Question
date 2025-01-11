//Four Pillers of OOps :-Encapsulation, Abstraction, Inheritance, Polymorphism, 

const user = {
  firstName: "Art",
  age : 30,
  lastName : "Jha",
 
}

console.log(user);

//Factory Function :-A factory function in JavaScript is a function that returns an object. It is used to create multiple similar objects with different values, instead of using a constructor function or class.

function createUser(fName, lName, UAge){
  return {
  fName : fName,
  lName : lName,
  UAge : UAge,
  getFullName(){
    return this.fName + " " + this.lName 
  }
  }
}

const user1  = createUser("Ravi", "jha", 26);
const user2  = createUser("Anuj", "yadav", 25);
const user3  = createUser("Rajan", "jha", 24);

console.log(user3.getFullName());

