//CARRITO DE COMPRAS

class Product{
  constructor(name, id, price, description, image){
    this.name = name;
    this.id = id;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

let products = [
  new Product('Notebook El Robles', 'JR', 100000,'i5 - 8gb ram - gamer - 256gb ssd','./assets\\images\\photo-1525547719571-a2d4ac8945e2.avif'),
  new Product('Disco HDD El Guille', 'GA', 10000, '2 Tb', 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'),
  new Product('Monitor El Diegote', 'DF', 90000, "IPS 27' UHD4K",'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1477&q=80'),
  new Product('Webcam Valentinius', 'MF', 25000, '1080 Full Hd','https://images.unsplash.com/photo-1629429407756-446d66f5b24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
  new Product('Celular Gabius', 'GR',50000,'Full HD - 4gb ram - 128gb','https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'),
  new Product('Televisor El Diegote', 'DF1','106000','Full HD - Android TV - 50"', 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80')  
]

localStorage.setItem('products',JSON.stringify(products));

// let cart; 
// let favs; 
// const setFromLS = (key,variable)=>{
//   console.log(key);
//   console.log(variable);
//   const elementFromLS = JSON.parse(localStorage.getItem(key));
//   if(elementFromLS){
//     variable = JSON.parse(localStorage.getItem(key));
//   }else{
//     variable=[];
//   }
// }
// setFromLS('cart',cart);
// setFromLS('favs',favs); 
//! BUG
let cart; 
let favs; 
const favsFromLS = JSON.parse(localStorage.getItem('favs'));
const cartFromLS = JSON.parse(localStorage.getItem('cart'));
if(favsFromLS){
  favs = JSON.parse(localStorage.getItem('favs'));
}else{
  favs=[];
}
if(cartFromLS){
  cart = JSON.parse(localStorage.getItem('cart'));
}else{
  cart=[];
}



products.forEach(product=>{
  // CREAR EL ELEMENTO
  const newProductCard = document.createElement('div');                  // <div> </div>
  // AGREGARLE LA INFORMACIÓN
  
  newProductCard.id=product.id;                                         // <div id="JR"></div>
  newProductCard.classList.add('card','my-3');                            // <div id="JR" class="card my-3"></div>
  newProductCard.style.width="300px"                                       // <div id="JR" class="card my-3" style="width:300px;"></div> 
  newProductCard.innerHTML = `
    <a href='http://127.0.0.1:5500/detail-product.html#${product.id}'>
      <img src=${product.image} class="card-img-top img-flid" style="height:300px" alt=${product.name}>
    </a>
    <div class="card-body">
      <h5 class="card-title"><a href='http://127.0.0.1:5500/detail-product.html#${product.id}'>${product.name}</a></h5>
      <p class="card-text">${product.description}</p>
      <p><strong> Precio: $ ${product.price}</strong></p>
      <button class="btn btn-primary" onclick="addProductToCart(${product.id})">🛒</button>
      <button class="btn btn-danger" onclick="addProductToFavs(${product.id})">💙</button>
    </div>
  `                                                                               // <div id="JR" class="card my-3" style="width:300px;">
                                                                                      //todo el HTML de recien
                                                                                  //</div> 
  // BUSCAMOS AL PADRE
  const productsContainer = document.querySelector('main');
  // EL PADRE ADOPTA AL HIJO
  productsContainer.appendChild(newProductCard);
})
/**
 * 
 * @param {es el elemento del DOM que tiene el id donde yo hice click} domProduct 
 * @Function Agrega el elemento en el cual se hizo click a el carrito
 */
const addProductToCart = (domProduct)=>{
  let product = products.find(product=> product.id == domProduct.id);
  cart.push(product);
  localStorage.setItem('cart',JSON.stringify(cart));
  const newProductCard = document.createElement('div');
  // AGREGARLE LA INFORMACIÓN
  newProductCard.id=product.id+'-cart';
  newProductCard.classList.add('card','my-3');
  newProductCard.style.width="300px"
  newProductCard.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <p><strong> Precio: $ ${product.price}</strong></p>
    <button class="btn btn-warning" onclick="removeProduct('${product.id}-cart')"> ❌ </button>
    </div>
      `
  // BUSCAMOS AL PADRE
  const productsContainer = document.querySelector('#cart-body');
  // EL PADRE ADOPTA AL HIJO
  productsContainer.appendChild(newProductCard);
}


cart.forEach(product =>{
  // CREAR EL ELEMENTO
const newProductCard = document.createElement('div');
// AGREGARLE LA INFORMACIÓN
  console.log(product);
newProductCard.id=product.id +'-cart';
newProductCard.classList.add('card','my-3');
newProductCard.style.width="300px"
console.log(product.id);
newProductCard.innerHTML = `
  <div class="card-body">
  <h5 class="card-title">${product.name}</h5>
  <p class="card-text">${product.description}</p>
  <p><strong> Precio: $ ${product.price}</strong></p>
  <button class="btn btn-warning" onclick="removeProduct('${product.id}-cart')"> ❌ </button>
  </div>
    `
// BUSCAMOS AL PADRE
const productsContainer = document.querySelector('#cart-body');
// EL PADRE ADOPTA AL HIJO
productsContainer.appendChild(newProductCard);
})

/**
 * 
 * @param {es el elemento del DOM que tiene el id donde yo hice click} domProduct 
 * @Function Agrega los productos al array de favoritos y no hace falta que los dibuje en el DOM
 */
const addProductToFavs = (domProduct)=>{
  let productToSave = products.find(product => product.id ===domProduct.id);
  favs.push(productToSave);
  localStorage.setItem('favs',JSON.stringify(favs));
}

const removeProduct = (id)=>{
  let productToRemove = products.find(product => product.id === id.slice(0,2));
  cart = cart.filter(product=>product.id!=productToRemove.id);
  localStorage.setItem('cart',JSON.stringify(cart));
  document.getElementById(id).remove();
}




//? OPTIONAL CHAINING

//! array.filter() //que pasa si ese array no existe o no es un elemento array? se rompe
//* array?.filter() //la solución es poner el signo de pregunta y de esa manera solo si es un elemento array va a hacer el filter

