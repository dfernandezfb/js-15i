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

