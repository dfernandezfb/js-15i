//* JSON: JAVASCRIPT OBJECT NOTATION

let objeto= {  //Objeto que necesita ir a un backend
  propiedad1:'valor1',
  numero:15
}
console.log(objeto);
const objetoJSON= JSON.stringify(objeto) //Objeto que ha sido traducido para que pueda ir a un backend o puede ser una respuesta de un backend
console.log(objetoJSON);

let objetoTraducido = JSON.parse(objetoJSON) //Lo traduzco a Javascript para que pueda utilizar sus propiedades y metodos
console.log(objetoTraducido);

//* Web Storage: Almacenamiento del navegador. Se guarda en formato clave - valor. Hay uno para cada página. Almacenamiento máximo de 5Mb.
//? localStorage: Almacenamiento permanente.
//? sessionStorage: Almacenamiento volatil, que dura lo que dure la sesión.

// localStorage
// sessionStorage
//GUARDADO
localStorage.setItem('elemento1',45);
localStorage.setItem('elemento2','hola');
localStorage.setItem('elemento3', true);
localStorage.setItem('elemento3', false);
localStorage.setItem('elemento3', objetoJSON);

//OBTENCIÓN 
const valor = JSON.parse(localStorage.getItem('elemento3'));
console.log(valor.propiedad1);

//cantidad de elementos guardados

console.log(localStorage.length)

//Borrar un elemento
localStorage.removeItem('elemento1')