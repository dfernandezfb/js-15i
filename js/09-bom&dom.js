// //! BOM --> Browser Object Model --> Nos permite manipular el navegador: su historial, su barra de direcciones, la información del navegador, la camara, el microfono, los usbs conectados, la pantalla, entre otras cosas

// //* Funciones de tiempo
// // window.setTimeout === setTimeout
// // window.setInterval === setInterval
// //? setInterval --> ejecuta una tarea cada un determinado lapso de tiempo

// function helloWorld(){
//   console.log('Hi everybody');
// }

// // const idInterval = setInterval(helloWorld,1000); // --> te devuelve un id 

// // const idInterval2 = setInterval(()=>{console.log('Hola mi banda');},5000)

// // // 1s--> 1000ms
// // // 10s--> 10000ms

// // //? setTimeout --> Ejecuta una tarea una sola vez, pasado un determinado tiempo

// // setTimeout(()=>console.log('Hola, está lloviendo'),7000);

// //! CUENTA REGRESIVA -- Houston, tenemos un problema

// // let countdown= 10;

// // const countdownInterval = setInterval(()=>{
// //   console.log('Despegue en '+ countdown);
// //   countdown--;
// // },1000)

// // setTimeout(()=>{
// //   clearInterval(countdownInterval)
// //   console.log('Despegueeeeeeeeee')
// // },11000)

// //! DOM --> Document Object Model --> Nos va a permitir manipular los elementos de mi documento=== HTML

// // window.document === document

// //?SELECTORES
// //* POR ID
// // document.getElementById(id) trae uno solo
// //* POR CLASE
// // document.getElementsByClassName(class) trae varios
// //* POR NOMBRE DE LA ETIQUETA
// // document.getElementsByTagName(input)  trae varios 
// //* POR SELECTORES DE CSS
// // document.querySelector



// function changeText (){
//   const h2ToChange = document.getElementById('h2-to-change');
//   // h2ToChange.innerText = 'El texto ha sido cambiado';
//   // h2ToChange.style.marginLeft='100px'
//   // h2ToChange.style.backgroundColor='tomato'
//   // h2ToChange.style.display='none'
//   h2ToChange.classList.add('special-effects');
// }

// function changeTheme(){
//   // const elementToChange = document.getElementById('testing-theme');
//   const elementToChange = document.querySelector('.testing-theme');
//   // const elementToChange = document.querySelector('#testing-theme');
//   // const elementsToChange = document.querySelectorAll('.testing-theme');
//   if(elementToChange.classList.contains('light')){
//     elementToChange.classList.add('dark');
//     elementToChange.classList.remove('light')
//   }else{
//     elementToChange.classList.add('light')
//     elementToChange.classList.remove('dark');
//   }
// }

// function addSquare(){
//   //CREAMOS EL ELEMENTO
//   const newSquare = document.createElement('div');
//   //LE PONEMOS SU INFORMACIÓN
//   newSquare.classList.add('square');
//   newSquare.innerText='Cuadrado';
//   //UBICAMOS AL PADRE
//   const newSquareContainer = document.querySelector('.squares-container');
//   //EL PADRE ADOPTA AL HIJO
//   newSquareContainer.appendChild(newSquare)
// }

// // const publish = (event)=>{
// //   event.preventDefault(); //EVITAMOS QUE SE RECARGUE PARANDO SU ACTIVIDAD POR DEFECTO
// //   /*
// //     ToDo
// //     * 1- Obtener lo que hay en el textarea ✅
// //         1.1- Deberíamos identificar al textarea con un id
// //         1.2- Tenemos que seleccionar al textarea
// //         1.3- Obtener lo que tiene adentro ese elemento (innerText o innerHTML en un elemento comun, pero en un input, hay una propiedad que se llama value)
// //         1.4- Evitar la recarga de la página
// //     * 2- Crear un elemento nuevo que guarde lo que se escribió anteriormente
// //         2.1- Crear un elemento nuevo en el documento
// //         2.2- Le ponemos la información
// //         2.3- Buscamos al padre
// //         2.4- Le decimos al padre que adopte al hijo  
// //   */
// //   const tweet = document.getElementById('tweet');
// //   const tweetText = tweet.value;
// //   const newTweet = document.createElement('div');
// //   const id = new Date().getTime();
// //   newTweet.id= id;
// //   newTweet.innerHTML = `
// //   <p>${tweetText}</p> 
// //   <button class="btn btn-danger d-block ms-auto" onclick="deleteTweet(${id})"> Eliminar </button>`;
// //   newTweet.classList.add('text-light', 'bg-secondary','p-3','tweet-styles','my-3');
// //   const tweetsContainer = document.querySelector('.tweets-container');
// //   tweetsContainer.appendChild(newTweet);
// //   document.querySelector('form').reset();
// // }

// // const deleteTweet = (id)=>{
// //   const tweetToDelete = document.getElementById(id);
// //   tweetToDelete.remove();
// //   /**
// //    * ToDo
// //    *  1- Ubicar el elemento que queremos borrar
// //    *    a) Lo identificamos por un id que nosotros tenemos que crearle
// //    *    b) Identificarlo a traves de la información del evento
// //    *  2- Borrarlo
// //    */
// // }


// //! OPCION B PARA BORRADO
// const publish = (event)=>{
//   event.preventDefault(); //EVITAMOS QUE SE RECARGUE PARANDO SU ACTIVIDAD POR DEFECTO
//   /*
//     ToDo
//     * 1- Obtener lo que hay en el textarea ✅
//         1.1- Deberíamos identificar al textarea con un id
//         1.2- Tenemos que seleccionar al textarea
//         1.3- Obtener lo que tiene adentro ese elemento (innerText o innerHTML en un elemento comun, pero en un input, hay una propiedad que se llama value)
//         1.4- Evitar la recarga de la página
//     * 2- Crear un elemento nuevo que guarde lo que se escribió anteriormente
//         2.1- Crear un elemento nuevo en el documento
//         2.2- Le ponemos la información
//         2.3- Buscamos al padre
//         2.4- Le decimos al padre que adopte al hijo  
//   */
//   const tweet = document.getElementById('tweet');
//   const tweetText = tweet.value;
//   const newTweet = document.createElement('div');
//   newTweet.innerHTML = `
//   <p>${tweetText}</p> 
//   <button class="btn btn-danger d-block ms-auto" onclick="deleteTweet(event)"> Eliminar </button>`;
//   newTweet.classList.add('text-light', 'bg-secondary','p-3','tweet-styles','my-3');
//   const tweetsContainer = document.querySelector('.tweets-container');
//   tweetsContainer.appendChild(newTweet);
//   document.querySelector('form').reset();
// }

// const deleteTweet = (event)=>{
//   const tweetToDelete = event.target.parentElement;
//   tweetToDelete.remove();
//   /**
//    * ToDo
//    *  1- Ubicar el elemento que queremos borrar
//    *    a) Lo identificamos por un id que nosotros tenemos que crearle
//    *    b) Identificarlo a traves de la información del evento
//    *  2- Borrarlo
//    */
// }

//CARRITO DE COMPRAS

class Product{
  constructor(name, uid, price, description, image){
    this.name = name;
    this.uid = uid;
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
  new Product('Celular Gabius', 'GR',50000,'Full HD - 4gb ram - 128gb','https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')
]


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
  
  newProductCard.id=product.uid;                                         // <div id="JR"></div>
  newProductCard.classList.add('card','my-3');                            // <div id="JR" class="card my-3"></div>
  newProductCard.style.width="300px"                                       // <div id="JR" class="card my-3" style="width:300px;"></div> 
  newProductCard.innerHTML = `
    <img src=${product.image} class="card-img-top img-fluid" alt=${product.name}>
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.description}</p>
      <p><strong> Precio: $ ${product.price}</strong></p>
      <button class="btn btn-primary" onclick="addProductToCart(${product.uid})">Agregar al carrito</button>
      <button class="btn btn-danger" onclick="addProductToFavs(${product.uid})">💙</button>
    </div>
  `                                                                               // <div id="JR" class="card my-3" style="width:300px;">
                                                                                      //todo el HTML de recien
                                                                                  //</div> 
  // BUSCAMOS AL PADRE
  const productsContainer = document.querySelector('main');
  // EL PADRE ADOPTA AL HIJO
  productsContainer.appendChild(newProductCard);
})

const addProductToCart = (domProduct)=>{
  let product = products.find(product=> product.uid == domProduct.id);
  cart.push(product);
  localStorage.setItem('cart',JSON.stringify(cart));
  const newProductCard = document.createElement('div');
  // AGREGARLE LA INFORMACIÓN
  newProductCard.id=product.uid+'-cart';
  newProductCard.classList.add('card','my-3');
  newProductCard.style.width="300px"
  newProductCard.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <p><strong> Precio: $ ${product.price}</strong></p>
    <button class="btn btn-warning" onclick="removeProduct('${product.uid}-cart')"> ❌ </button>
    </div>
      `
  // BUSCAMOS AL PADRE
  const productsContainer = document.querySelector('#cart-body');
  // EL PADRE ADOPTA AL HIJO
  productsContainer.appendChild(newProductCard);
}
const getCart = ()=>{
  cart.forEach(product =>{
    // CREAR EL ELEMENTO
  const newProductCard = document.createElement('div');
  // AGREGARLE LA INFORMACIÓN
    console.log(product);
  newProductCard.id=product.uid +'-cart';
  newProductCard.classList.add('card','my-3');
  newProductCard.style.width="300px"
  console.log(product.uid);
  newProductCard.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <p><strong> Precio: $ ${product.price}</strong></p>
    <button class="btn btn-warning" onclick="removeProduct('${product.uid}-cart')"> ❌ </button>
    </div>
      `
  // BUSCAMOS AL PADRE
  const productsContainer = document.querySelector('#cart-body');
  // EL PADRE ADOPTA AL HIJO
  productsContainer.appendChild(newProductCard);
})
}

const addProductToFavs = (domProduct)=>{
  let productToSave = products.find(product => product.uid ===domProduct.id);
  favs.push(productToSave);
  localStorage.setItem('favs',JSON.stringify(favs));
}

const removeProduct = (id)=>{
  let productToRemove = products.find(product => product.uid === id.slice(0,2));
  cart = cart.filter(product=>product.uid!=productToRemove.uid);
  localStorage.setItem('cart',JSON.stringify(cart));
  document.getElementById(id).remove();
}

getCart();


//? OPTIONAL CHAINING

//! array.filter() //que pasa si ese array no existe o no es un elemento array? se rompe
//* array?.filter() //la solución es poner el signo de pregunta y de esa manera solo si es un elemento array va a hacer el filter

