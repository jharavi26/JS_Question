/* Event :- An event is something that occurs when a user interacts with the webpage, such as:
Clicking a button,Hovering over an element,Pressing a key, Scrolling the page, Submitting a form.

An event listener :- It is a function that waits for an event to occur on a specific element 
                      and executes a callback function when the event is triggered.

Ways to Add Event Handlers :- 
1. Inline Event Handler :- <button onclick="alert('Button clicked!')">Click Me</button>
2. using DOM Element Properties :- const button = document.getElementById('myButton');
                                    button.onclick = function() {
                                        alert('Button clicked!');
                                    };
3. using AddEventHandler Method :-element.addEventListener(eventType, eventHandler, options);

button.addEventListener('click', function() {
    alert('Button clicked!');
});

When an event occurs, an event object is automatically passed to the event handler, containing information about the event.

Event Propagation :- When an event occurs, it propagates through the DOM in two phases:

Capturing Phase: From the root to the target element.
Bubbling Phase: From the target element back to the root.
*/

const button = document.querySelector('button')
      button.addEventListener('click', e => {
        console.log('e gives the event listener object:', e);
        console.log('e.target gives the selected element: ', e.target);
        console.log( 'e.target.textContent gives content of selected element: ',e.target.textContent);
      })

// Generate numbers and classify them
// Utility function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

// Function to generate and classify numbers
function generateNumbers(n) {
  const container = document.getElementById('numberContainer');
  container.innerHTML = ''; // Clear previous numbers

  for (let i = 1; i <= n; i++) {
      const div = document.createElement('div');
      div.classList.add('number');

      // Add the class based on the number type
      if (isPrime(i)) {
          div.classList.add('prime');
      } else if (i % 2 === 0) {
          div.classList.add('even');
      } else {
          div.classList.add('odd');
      }

      div.textContent = i; // Display the number
      container.appendChild(div); // Append the number to the container
  }
}

// Attach event listener to the Generate button
document.getElementById('generateButton').addEventListener('click', function () {
  const input = document.getElementById('numberInput').value;
  const number = parseInt(input);

  if (!isNaN(number) && number > 0) {
      generateNumbers(number);
  } else {
      alert('Please enter a valid positive integer.');
  }
});
