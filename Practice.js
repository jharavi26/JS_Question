let arr = [2,4,6,8,10];


let art = arr.map((x)=>x*4).filter((x)=>x>16)
console.log(art);

let rav = art.reduce((acc, curr)=>acc+curr+100)
console.log(rav);


function add(n){
  return function sub(m){
    return function mal(o){
      return n+m+o
    }
  }
}
c

