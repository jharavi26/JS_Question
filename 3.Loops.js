// // In programming languages to carry out repetitive task we use different kinds of loops.
// // Here are the types of loops in JavaScript:

// // 1.for loop
// // 2.while loop
// // 3.do...while loop
// // 4.for...in loop
// // 5.for...of loop
// // 6.forEach() method (specific to arrays)

// for(let i = 1; i<=6; i++){
//     console.log(i)
//   }

// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// for(let i = 0; i < numbers.length; i++){
//   sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]
// }

// console.log(sum)  // 15

// // while Loop

// let i = 0
// while (i <= 5) {
//   console.log(i)      //0,1,2,3,4,5
//   i++
// }


// // do while loop 

// let j = 0
// do {
//   console.log(j)
//   j++
// } while (j <5)             // 0,1,2,3,4


// // for of Loop    
// // for (const element of arr)

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// for (const tech of webTechs) {
//   console.log(tech.toUpperCase())         //It is very hand way to iterate through an array if we are not interested in the index of each element in the array.
// }


// // For in loop :-This loop is typically used to iterate over the indices or properties of an object.

// // For each Lop :-This is an array method that executes a given function on each element of the array. It's more functional in style and doesn't require an explicit loop.

// const arr = [10, 20, 30];
// arr.forEach((value, index) => {
//   console.log(index, value);           // Logs 0 10, 1 20, 2 30
// });
 

// // Break Keyward :- Break is used to interrupt a loop.
// for(let i = 0; i <= 5; i++){
//   if(i == 3){
//     break                //0,1,2
//   }
//   console.log(i)
// }


// // Continue :- We use the keyword continue to skip a certain iterations.

// for(let i = 0; i <= 5; i++){
//   if(i == 3){
//     continue            //0,1,2,4,5
//   }
//   console.log(i);
// }


for(let i =1 ; i<=100; i++)
if(i%2!==0){
  console.log(`${i}`);
}


