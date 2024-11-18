/* Creating an Element :-To create an HTML element we use tag name. Creating an HTML element using JavaScript is very simple and straight forward. 
We use the method document.createElement(). The method takes an HTML element tag name as a string parameter.*/

let result = document.createElement("h3");         //Single Element Creations
result.textContent = "Dom-Manipulation";
document.body.appendChild(result);              //Appending child to a parent element
console.log(result);

let title
        for (let i = 0; i < 3; i++) {
            title = document.createElement('p')
            title.className = 'title'
            title.style.fontSize = '24px'
            title.textContent = i;
            console.log(title)
        }

const grid = document.querySelector('.grid');

        for (let i = 0; i <= 101; i++) {
          const div = document.createElement('div');
          div.textContent = i;
        
          if (isPrime(i)) {
            div.className = 'red'; // Prime numbers
          } else if (i % 2 === 0) {
            div.className = 'green'; // Even numbers
          } else {
            div.className = 'yellow'; // Odd numbers
          }
        
          grid.appendChild(div);
        }
        
function isPrime(num) {
          if (num < 2) return false;
          for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
          }
          return true;
        }


