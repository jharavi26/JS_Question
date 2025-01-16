const mypromise = new Promise((resolve, reject)=>{
  let art = true;
  setTimeout(()=>{
  if(art){
    resolve("Art is True")
  }
    else {
      reject ("Art is False")

    }
  },3000)
})


mypromise.then(result=>console.log(result))
.catch(error=>console.log("Error:" , error))

