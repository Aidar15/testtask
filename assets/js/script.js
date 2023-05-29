// let http = new XMLHttpRequest()
// http.open('GET', 'products.json', true)
// http.send()
// http.onload = function() {
//     if(this.readyState  == 4 && this.status == 200) {
//         let products = JSON.parse(this.responseText)
//         let output = ""
//         for(let item of products){
//             output+= `
//                 <div class="products">
//                     <img src="${item.image}" alt="">
//                     <div class="products__discount">${item.discount}</div>
//                     <p class="products__description">${item.title}</p>
//                     <button class="products__button">Add to cart</button>
//                 </div>
//             `;
//         }
//         document.querySelector(".products").innerHTML=output
//     }
// }

fetch("products.json") 
.then(function (response) {
    return response.json();
})
.then(function(products){
    let placeholder = document.querySelector("#data-output")
    let out = ""
    for(let product of products){
        out+=`
        <div class="products">
            <img src="${item.image}" alt="">
            <div class="products__discount">${item.discount}</div>
            <p class="products__description">${item.title}</p>
            <button class="products__button">Add to cart</button>
        </div>
        `;
    }
    placeholder.innerHTML = out;
})