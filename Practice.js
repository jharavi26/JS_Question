
 function getData(){
  fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(result => {
    document.getElementById("output1").innerHTML = result.products
    .map(product => `<li>${product.id}: ${product.title}</li>`)
    .join(""); 
})
}