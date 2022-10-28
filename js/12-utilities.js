//? El destructuring es una caracteristica nueva de ES6 que nos permite desempacar un arreglo o un objeto directamente y de manera múltiple para extraerlos en constantes o variables

//* DESESTRUCTURACIÓN DE OBJETOS (OBJECT DESTRUCTURING)

const person = {
  name: 'Diego',
  age:26,
  job: 'Fullstack developer'
}

// const name = person.name;
// const age = person.age;
// const job = person.job;

//! DESESTRUCTURACIÓN BÁSICA
// const {name, age , job} = person;
// const { job } = person; 
//! NO INTERESA EL ORDEN, SOLO QUE EL NOMBRE SEA IGUAL A COMO ES LA PROPIEDAD 
// const {job, age, name} = person; 
//! DESESTRUCTURACIÓN NOMBRADA
const {age:edad} = person

// console.log(name);
// console.log(age);
// console.log(edad);
// console.log(job);
// console.log(person.name);
// console.log(person.age);
// console.log(person.job);

let personas = [
  {
    name:'Diego',
    age:26
  },
  {
    name:'Nicole',
    age:27
  },
  {
    name:'Javier',
    age:40
  },
  {
    name:'Guille',
    age:25
  }
]

personas.forEach(({name,age})=>{
  console.log(name);
  console.log(age);
})

function getSong(){
  const song = {
    name:'Clocks',
    singer:'Coldplay'
  }
  return song
}

const songFromAnotherSide = getSong();
const {name, singer} = getSong()
console.log(name);
console.log(singer);

//* DESESTRUCTURACIÓN DE ARREGLOS (ARRAY DESTRUCTURING)

const rgb = [100,150,200];

// const red = rgb[0];
// const green = rgb[1];
// const blue = rgb[2];
//! DESESTRUCTURACIÓN BÁSICA
// const [red, green, blue] = rgb;
//! SI IMPORTA EL ORDEN
// console.log(red);
// console.log(green);
// console.log(blue);
//! Si dejo un espacio vacío omito el valor que se encuentre en esa posición
// const [red, ,blue] = rgb;
// console.log(red);
// console.log(blue);

// // USO COMÚN

// const useState = (valorInicial)=>{
//   return [estado, funcionEstado];
// }

// const [persona, funcionPersona] = useState('hola')

//* SPREAD OPERATOR ...
//? Nos permite trabajar de una manera más agradable con arrays y con objetos

const cincoYSeis = [5,6];
const del1Al10 = [1,2,3,4,...cincoYSeis,7,8,9,10];
console.log(del1Al10);
const copia1to10 = [...del1Al10] //copia
console.log(copia1to10);
const del1al11 = [...del1Al10,11];
console.log(del1al11);

let dog={
  name:'Killer',
  age:8,
  gender:'male',
  breed:'unknown'
}

console.log(dog);

let dogWithOwner = {
  ...dog,
  owner:'Diego'
}

console.log(dogWithOwner);

//* IMPORTACIÓN Y EXPORTACIÓN (IMPORT Y EXPORT)

//? Podemos exportar (importar) funciones, objetos, variables, contantes para que se puedan utilizar en otro script
//? Existen dos tipos de exportación: nombrada y por defecto

import {suma, navbar} from './12-helperFunctions.js'
import pepito from './12-export-test.js';
import { PAGE_NAME, PERSON_NAME, PERSON_NAME_2 } from './12-constants.js'

console.log(suma(4,5));
console.log(PAGE_NAME);
console.log(PERSON_NAME);
console.log(PERSON_NAME_2);

navbar()

pepito();

//* REPASO DE FUNCIONES
//ARROW FUNCTION
const test = ()=>{

}
// nombrada
function test2 (){

}
//anonima 2
const test3 = function(){

}

//* OPERADOR TERNARIO

let x = 5;

x>5?
console.log('es mayor que 5') 
:
console.log('es menor que 5');

//* TRY - CATCH
//? Nos permite evitar que nuestro código se rompa si hay algún error
try{
  console.log('Hola, esta todo correcto');
  if(x==5) throw Error('No está definido el operador ternario para 5');
  // console.log(diego);
}catch(error){
  console.error(error.message);
}
console.log('js terminó su trabajo');