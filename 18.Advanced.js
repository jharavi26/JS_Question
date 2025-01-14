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
 
