// // Array :- an Array can store multiple values. Each value in an array has an index, and each index has a reference in a memory address. 

// // Create a Array 
const ars = new Array();
console.log(ars);

// // using Bracket 

const arrr = []
console.log(arrr);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log(numbers.slice(1,5));   //[ 3.14, 9.81, 37, 98.6 ] cut out 1 & 5 index element 

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

const rev = numbers.concat(fruits)     //Concatenating array using concat
console.log(rev);
console.log(rev.indexOf('mango'));     // to check element is present in array or not

console.log(rev.includes('lemon'));          //To check if an item exist in an array. If it exist it returns the true else it returns false.
 console.log(rev.toString());              // Converts array to string

 console.log(rev.join('$ '));                 //Join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string.

// arr containing different data types
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] 

console.log(arr)
console.log(arr[2]);     // accessing array using its indexes
let lastIndex = arr.length - 1;
console.log(arr[lastIndex])

console.log(typeof(arr));   // check datatype of variable

arr[2]=false;                 //change the array element using index
console.log(arr)

const four4values = Array(6).fill(4)   // it creates 4 element values filled with '4'
console.log(four4values)               //     [4, 4, 4, 4, 4, 4] 


const array = [1, 2, 3, 4, 5];
const splicedArray = array.splice(1, 2, 6, 7);        // removes [2, 3] and inserts [6, 7]
console.log(splicedArray);                             // [2, 3] (elements removed)
console.log(array);                             //     [1,6,7,4,5 ]

array.push(8);                                 // Push: adding item in the end. 
console.log(array);         

array.pop();                                // Pop : remove last elemnt in array
console.log(array);

array.shift();                         //shift: Removing one array element in the beginning of the array.
console.log(array);

array.unshift(24);                  //unshift: Adding array element in the beginning of the array.
console.log(array);                        

array.reverse();                        //reverse: reverse the order of an array.
console.log(array)

array.sort((a, b) => a - b);              // Sorting numbers requires a compare function,
console.log(array);


const arr = new Array(1,2,3,4,5);
console.log(arr);
console.log(arr[0]);
console.log(arr[arr.length-1]);

const company = ['google', 'facebook', 'amazon', 'flipkart', 'netflix', 'zomato']
for(let i=0; i<company.length; i++)
{
    console.log(company[i].toUpperCase());
}
