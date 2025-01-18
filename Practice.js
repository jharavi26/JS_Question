const p1 = new Promise((resolve, reject)=> setTimeout(resolve, 1000, "art1"))
const p2 = new Promise((resolve, reject)=> setTimeout(resolve, 2000, "art2"))
const p3 = new Promise((resolve, reject)=> setTimeout(reject, 100, "art3"))
const p4 = new Promise((resolve, reject)=> setTimeout(resolve, 3000, "art4"))

Promise.race([p1,p2,p3,p4])
  .then((res)=>console.log(res))
  .catch((error)=>console.log(error))
