//An API (Application Programming Interface) allows you to interact with external services or libraries. APIs can be used to fetch data, perform actions, or access functionalities that aren't built directly into your application.

//Whenever we deal with API is always return a Promise.

//The fetch() function is commonly used to make HTTP requests. 

// The async keyword is used to define a function that always returns a promise.

// The await keyword can only be used inside an async function.
// It pauses the execution of the async function until the promise resolves or rejects.


function getData(){
  fetch("https://picsum.photos/v2/list")
  .then((res)=>res.json())
  .then((res)=>{
    const data = res.map((item)=>(
    `<span><img src = ${item.download_url} width="200px">
  </span>`
  ))
document.getElementById("output1").innerHTML = data  
})
}


function getData1(){
  fetch("https://picsum.photos/v2/list")
  .then((res)=>res.json())
  .then((res)=>{
    if(res.length>0){
    const data = `<span><img src = ${res[0].download_url} width="200px"></span>`
    document.getElementById("output1").innerHTML = data 
}})
 
}

