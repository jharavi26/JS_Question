/* DOM :- Programming interface provided by web browsers that represents the structure of a web document as a tree of objects.
It allows JavaScript to interact with and manipulate the content, structure, and styles of a webpage dynamically.
getElementsByClassName() & TagName() method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. 
The length property provides the size of the collection. 
It is possible to loop through all the HTMLCollection elements. */

//Selecting Element :-
// 1.document.getElementsByTagName('tagname')
// 2.document.getElementsByClassName('classname')
// 3.document.getElementById('id')
// 4.document.queryselector() , queryAllSelector

/*let firstTitle = document.querySelector('h1') // select the first available h1 element
let firstTitle = document.querySelector('#first-title') // select id with first-title
let firstTitle = document.querySelector('.title') // select the first available element with class title*/

/* Attribute :- An attribute is added in the opening tag of HTML which gives additional information about the element.
The setAttribute() method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute. 

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')

The textContent property is used to add text to an HTML element.
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'

The innerHTML property sets or gets the HTML content of an element, including its descendants.

Styling Element :-document.getElementById("title").style.color = "blue";
*/

// result = document.getElementsByTagName('p');
// console.log(result);

// Selecting dom element using query selector method
const Element = document.querySelectorAll("p");
console.log(Element);
console.log(Element.length);

// // // Iterate through each element and log its textContent
Element.forEach(element => {
    console.log(element.textContent);
  });

// //Another way is 
for(let i=0; i<=Element.length;i++){
    console.log(Element[i]);
}

const ele = document.querySelector('#first-para');       // selecting element using Id_Name
console.log(ele)
console.log(ele.textContent);

let res =document.querySelector('#third-para');
console.log(res);
let ravi = res.textContent = 'Fourth Paragraph' 
console.log(ravi);
