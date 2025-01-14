// Debouncing :- It ensures that a function is only called once after a specified period of time has passed since the last time it was invoked. 
//If a new event is triggered before the delay ends, the previous call is canceled, and the timer restarts.

let timer;
document.getElementById("input").addEventListener("keydown", ()=>{
  clearTimeout(timer)
  timer = setTimeout(function(){
      let inputval = document.getElementById("input").value;
      document.getElementById("output").innerText = inputval;
    },2000)
  })

  // Throttling in JavaScript is a technique used to improve performance by controlling how often a function is executed over time. It ensures that a function is only executed at most once within a specified time interval, even if it is called multiple times during that interval.

  let lastExecutionTime = 0;
  const throttleDelay = 1000; // 1 second
  
  document.getElementById("input1").addEventListener("input", () => {
      const currentTime = Date.now();
  
      if (currentTime - lastExecutionTime > throttleDelay) {
          // Get the current value of the input field
          const inputValue = document.getElementById("input1").value;
  
          // Update the output
          document.getElementById("output1").innerText = inputValue;
  
          // Update the last execution time
          lastExecutionTime = currentTime;
      }
  });
  
 
