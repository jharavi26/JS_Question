function Largest(arr){
  if(arr.length<=1){
    return arr;
  }
  let largest =  Number.MIN_SAFE_INTEGER;
  for(let i=0; i<arr.length; i++){
    if(largest<arr[i]){
      largest = arr[i]
    }
  }
  return largest;

}

const arr = [1,3,49,2,8];
console.log(Largest(arr));