const URL = "https://cat-fact.herokuapp.com/facts";


const getFacts = async()=>{
  console.log("Getting Data....");
  let Response= await fetch(URL);
  console.log(Response);                   //JSON Format
  let data = await Response.json();
  console.log(data);
};