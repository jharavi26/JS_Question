//Date & Time Object & Their Method 

const now = new Date()
console.log(now)                   // 2024-11-14T10:00:59.906Z
console.log(now.getFullYear())         //2024
console.log(now.getMonth())        //10
console.log(now.getDay())          //4
console.log(now.getHours());
console.log(now.getSeconds());

let birth = 1998
console.log(typeof(birth));

ismarried=true;
console.log(typeof(ismarried));


let height=20 , base=10;
area = 0.5*height*base;
console.log(area);

hour = 40;
cost =28;
earning = hour*cost;
console.log(earning);

firstname ="Ravikumar";
lastname = "Jha";
if(firstname.length>lastname.length)
{
    console.log(`Your name is ${firstname} greater than your lastname is ${lastname}`)
}
else 
{
    console.log(`Your name is ${firstname} lesser than your lastname is ${lastname}`)
}

const date = new Date();

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(date.getDate()).padStart(2, '0');

const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log(formattedDate);


