// Conditions can be implementing using the following ways:

// 1.if
// 2.if else
// 3.if else if else
// 4.switch
// 5.ternary operator

let a =24;
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

let weather = 'sunny'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

let r =3, s=4;
if(r>s){
    console.log(`${r} is greater than ${s}`)
}
else {
    console.log(`${r} is lesser than ${s}`)
}


let p=4, q=3;
p>q?console.log(`${p} is greater than ${q}`): (`${p} is lesser than ${q}`);