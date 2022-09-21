//! VARIABLES 
var numero = 15; //* no tiene scope definido, se puede modificar con el paso del tiempo
let numero2 = 16; //* si tiene scope definido, se puede modificar con el paso del tiempo
const numero3 = 17; //* tiene scope definido, no se puede modificar con el paso del tiempo

//! STRINGS --> Una cadena de caracteres, que está encerrada entre comillas simples, dobles o invertidas
"Soy un string"
'Soy un string'
`Soy un string`

//* Concatenación de strings

"12345" + "6789" --> "123456789"
"12345" + 6789 --> "123456789"
"12345" + 67 + 89 --> "123456789"
12 + 34 + "56789" --> "4656789"

//* Template literals

` Mi numero favorito es ${numero}` --> "Mi numero favorito es 15"
` Mi numero favorito es ${numero / 3}` --> "Mi numero favorito es 3"

//*Propiedad LENGTH (la única)

"Hola soy diego".length --> 14

//* Métodos TOUPPERCASE
/**
 * para pasar a mayuscula - toUpperCase
 * para pasar a minuscula - toLowerCase
 * para saber si un cadena de caracteres se encuentra adentro de otra - include
 * para sacar los espacios del comienzo y del final - trim
 * para saber que caracter se encuentra en una determinada posicion del string - charAt
 */
"Hola".toUpperCase() --> "HOLA"

//! NUMBERS y MATH

//* Obtener un numero random
Math.random() //--> //* me devuelve un numero aleatorio entre 0 y 1

/**
 * para hacer potencias
 * para hacer raices
 * para truncar numeros
 * para redondear
 */

//! OPERADORES

//* Asignación --> = simplemente le asigna un valor a una variable 
//* Aritmeticos --> +, -, *, /, %
//* Relacion --> Evaluan una condición --> >, >=, <, <=,!=,!==, ==, === (el doble igual solo compara el valor, y el triple igual ademas de comparar el valor, compara tambien el tipo de valor)
//* Condicional o Ternario --> Evaluaba una condición, y si era afirmativa, ejecutaba un código, y si era negativa, ejecutaba otro código

5>4 ? 'Es mayor' : 'Es menor'

//* Lógicos --> Evaluaban varias condiciones --> AND [&&] (todas las condiciones deben ser afirmativas), OR [||] (con una sola condicion afirmativa es suficiente), NOT [!] (hace la contra, operador de negación)

//! Comunicación con el cliente

//* PROMPT --> muestra una ventana con un mensaje y le permite al cliente responder con un mensaje.

//* CONFIRM --> muestra una ventana con un mensaje y le permite al cliente responder con un aceptar o cancelar.

//* ALERT --> muestra una ventana con un mensaje.

//! ESTRUCTURAS CONDICIONALES

//* if

if(5>4){
  console.log("se ejecuta");
}
if(5<4){
  console.log("no se ejecuta");
}

//* if - else

if(5>4){
  console.log("se ejecuta");
}else{
  console.log("no se ejecuta");
}
if(5<4){
  console.log("no se ejecuta");
}else{
  console.log("si se ejecuta");
}

//* switch

switch(pais){
  case 'arg':
    console.log('Es arg');
    break;
  case 'bra':
    console.log('Es bra');
    break;
  case 'uru':
    console.log('Es uru');
    break;
}

//! ESTRUCTURAS ITERATIVAS

//* while --> mientras la condicion que le pongas sea verdadera, el codigo se va a reejecutar.
let x=5;
while(x>4){
  console.log("Hola");
  x--
}

//* for --> va a ejecutar un código una DETERMINADA cantidad de veces

for(let i=0; i<10; i++){
  console.log("Hola");
}

//! ARRAYS --> Una lista de datos ORDENADA, encerrada entre corchetes, cada dato separado por coma
const numeros = [ 1, 2, 3, 4, 5 ] //se guarda la referencia del array (123)
numeros.push(6) --> [ 1, 2, 3, 4, 5, 6 ] //123
const string = "hola"; //123
string = "chau"; //ERROR //456
[
  "Terminator", //0
  "Gladiador", //1
  "Titanic", //2
]
peliculas[1] --> "Gladiador"
[
  "Mozart",
  "Bethoven",
  "Vivaldi"
]

//* Para modificar el array simplemente tengo que llamar al array y ponerle entre corchetes la posición


//* Propiedad LENGTH --> Nos dice la cantidad de datos que tengo en la lista

//* Métodos

/**
 * Para agregar un dato al array --> push, unshift
 * Para eliminar un dato del array --> pop, shift
 * Ordenarlos --> sort
 * Para saber si un elemento se encontraba adentro del array --> includes
 * Para unir todos los datos en un super string --> join
 * Para cortar el array --> slice, splice
 * Para ejecutar un determinado codigo con cada elemento del array --> forEach, map (el map te devuelve un array con la modificación que vos quieras hacer)
 * Para encontrar elementos o uno solo que cumpla con una determinada condición --> find (para encontrar un solo elemento), filter (para encontrar varios elementos que cumplan con la condición)
 */

//! FUNCIÓN --> Porción de código reutilizable, que puede recibir datos para utilizarlos, y puede devolver datos
function suma(x, y){
  return x+y
}
const funcionParaSumar = function (x, y){
  return x+y
}
const funcionParaSumar2 = (x, y)=> x+y
suma(4,5) // --> 9
suma(6,7) // --> 13

//! CALLBACK -->  Es una función que se utiliza como argumento de otra función

//! OBJETOS --> Conjunto de caracteristicas (propiedades) y funcionalidades (métodos), van encerrados entre llaves. Cada una de las propiedades va separada de otra por coma, cada propiedad va separada de su valor por dos puntos
let movies = [
  {
    name:'El Padrino',
    duration:150,
    cast:['Al Pacino','Marlon Brando', 'Jackie Chan'],
  },
  {
    name:'Terminator',
    duration:120,
    cast:['Arnold Schwarzenegger','Piñon fijo']
  },
  {
    name: 'Caracortada',
    duration:120,
    cast:['Al Pacino','Gerardo Sofovich']
  }
]

let moviesWithAl = movies.filter(movie=>movie.cast.includes('Al Pacino'));
moviesWithAl.forEach(movie=>console.log(movie.name))