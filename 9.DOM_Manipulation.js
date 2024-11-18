/* Creating an Element :-To create an HTML element we use tag name. Creating an HTML element using JavaScript is very simple and straight forward. 
We use the method document.createElement(). The method takes an HTML element tag name as a string parameter.*/

let result = document.createElement("h3");         //Single Element Creations
result.textContent = "Dom-Manipulation";
document.body.appendChild(result);              //Appending child to a parent element
console.log(result);

// Accessing a Element 
// Traverse DOM:

// 1.element.parentNode
// 2.element.childNodes
// 3.element.firstChild
// 4.element.lastChild
// 5.element.nextSibling
// 6.element.previousSibling

let title
        for (let i = 0; i < 3; i++) {
            title = document.createElement('p')
            title.className = 'title'
            title.style.fontSize = '24px'
            title.textContent = i;
            console.log(title)
        }


        const current = document.querySelector('.current');

        // Parent Node
        console.log(current.parentNode); // Logs the <div class="parent">
        
        // Child Nodes
        const parent = document.querySelector('.parent');
        console.log(parent.children); // Logs all <p> elements
        console.log(parent.firstElementChild); // Logs the first <p> element
        console.log(parent.lastElementChild);  // Logs the last <p> element
        
    

