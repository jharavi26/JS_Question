//An API (Application Programming Interface) allows you to interact with external services or libraries. APIs can be used to fetch data, perform actions, or access functionalities that aren't built directly into your application.

//Whenever we deal with API is always return a Promise.

//The fetch() function is commonly used to make HTTP requests. 

// The async keyword is used to define a function that always returns a promise.

// The await keyword can only be used inside an async function.
// It pauses the execution of the async function until the promise resolves or rejects.


const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async()=>{
  console.log("Getting Data....");
  let Response= await fetch(URL);
  console.log(Response);                   //JSON Format
  let data = await Response.json();
  console.log(data);
};

function GenerateJoke(){
const data = fetch("https://official-joke-api.appspot.com/random_joke")   // Fetch a random joke from the Joke API
data.then((response)=>{
  return response.json();                 // Parses the JSON response
}).then((result)=>{
  var element = document.getElementById("main")
  element.innerHTML = `<h3>Setup :   ${result.setup} </h3> 
   <h2>Punchline: ${result.punchline} </h2>`
})
}

async function greet(){
  try{

    const art = await fetch("https://official-joke-api.appspot.com/random_joke")
    console.log(art);
    const rav = await art.json();
    console.log(rav)
    console.log("Setup:", rav.setup);
    console.log("Punchline:", rav.punchline);

    const element = document.getElementById("side");
    element.innerHTML = `
      <h3>Setup: ${rav.setup}</h3> 
      <h2>Punchline: ${rav.punchline}</h2>`;
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
}
greet();