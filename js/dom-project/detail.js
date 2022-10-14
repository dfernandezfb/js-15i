const id = window.location.hash.slice(1);

const products2 = JSON.parse(localStorage.getItem('products'));

const product = products2.find(product=> product.id === id);

const productDetail = document.createElement('div');

productDetail.id = product.id;

productDetail.classList.add('row');

productDetail.innerHTML= `
<div class="col">
    <img src="${product.image}" class="test-img" alt="${product.name}">
  </div>
  <div class="col">
    <div class="row">
      <div class="col">
        <h1 class="text-center">${product.name}</h1>
      </div>
    </div>
    <div class="row">
      <h3 class="col">Precio: $${product.price}</h3>
      <div class="col">Descripción del producto: ${product.description}</div>
    </div>
  </div>
`

let productContainer = document.querySelector('#product-container');

productContainer.appendChild(productDetail);

  
