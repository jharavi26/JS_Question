/* A Set is a collection of unique values, it store any kind of value.\
   A Map is a collection of key-value pairs, where keys can be any type.

*/

const mySet = new Set([1,2,3,4])      // declared & initialized new set
console.log(mySet);
mySet.add(5);           //add elemnent in set
console.log(mySet);

mySet.delete(3);             //delete element from set
console.log(mySet);

console.log(mySet.has(2)); // check element is present in set or not
console.log(mySet.size);    //check the size of set

const set = new Set([1, 2, 3]);
set.forEach(value => console.log(value));

for(const value of set){
    console.log(value);
}

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]         //Union of Two set with unique values

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)                            //Union of two sets

let d = a.filter((num) => B.has(num))       //Intersection of Two Set
console.log(d);

let s = a.filter((num) => !B.has(num))       //Difference of Two Set
console.log(s);

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)         //return the size og Map

map.set('England', 'London')       //added value in map
console.log(map)
console.log(map.size)

console.log(map.get('England'));     //getting a value from ket in Map

console.log(map.has('Finland'));        //checking key in map

const number = new Set();
console.log(number);

for(i=1; i<=10; i++){
    number.add(i)
}
console.log(number);
number.delete(5)
console.log(number)