"Es igual a simple comilla"
'Es igual a doble comilla'

' Messi dijo: "la comisión 15i es la mejor" ';

' Messi dijo: "la soupl\'onion es la mejor" '; //escapando a el comportamiento de string de la comilla

//* CONCATENACIÓN DE STRINGS

console.log( "HOLA, SOY " + "DIEGO");

console.log( "15" + "15"); 

console.log( "15" + 15); 
// JAVASCRIPT LEE DE IZQ A DER Y DE ARRIBA A ABAJO
console.log( "15" + 15 + 15); "151515"

console.log( 15 + 15 + "15"); "3015"

//* TEMPLATE LITERALS
let edad = 26;
let cerveza = 'Roja';
let provincia = 'Tucumán'
console.log(`Diego tiene ${edad} y vive en ${provincia} y le gusta la cerveza ${cerveza}`)

console.log("Diego tiene " + edad + " y vive en " + provincia + " y le gusta la cerveza " + cerveza)

//MÉTODOS Y PROPIEDADES DE LOS STRINGS

let randomString = 'Pablito clavó un clavito';
let name = 'Diego' //D0i1e2g3o4
let claveDeInicio=  '23082022135135121351351351'
let lastname = '                 Fernandez                           '
let url = 'http://paginadediego.com/?usuario=luis-alberto-ledesma'

//.length --> Te devuelve la cantidad de caracteres que tiene el string
console.log(randomString.length)

//.toUpperCase() --> Pasaba todo el string a mayuscula
console.log(randomString.toUpperCase())

//.toLowerCase() --> Pasaba todo el string a minuscula
console.log(randomString.toLowerCase())

//.includes(string) --> Prueba si el string que esta adentro de los parentesis se encuentra en el string analizado. Te devuelve un booleano
console.log(randomString.includes('manzana'))

//.charAt(position<numero>) --> Te devuelve el caracter que se encuentra en esa posición
console.log(name.charAt(0));

//.substring(<inicio>,<final>) --> Te devuelve un nuevo string que es el que comienza en <inicio> y termina en <final>
console.log(claveDeInicio.substring(0,8));

//.trim() --> Quita los espacios al comienzo y al final del string
console.log(lastname.trim());

console.log(randomString.includes('ito c'));

//.replace(<cadena a reemplazar>, <cadena de reemplazo>) --> Reemplazaba un parte de la cedena por otra que se le especifica
console.log(url.substring(34).replace('-',' '));

//ToDo EJERCICIO DEL APELLIDO

// const respuestaUsuario = prompt('¿Cual es su apellido?');
// const ultimaLetra = respuestaUsuario.substring(respuestaUsuario.length - 1);
// const ultimaLetra2 = respuestaUsuario.charAt(respuestaUsuario.length-1);
// console.log(`La última letra de tu apellido es la ${ultimaLetra} y ${ultimaLetra2}`);


// 0F  1E  2R  3N  4A  5N  6D  7E  8Z

// 1   2   3   4   5   6   7   8   9 --> 9 caracteres

//ToDo EJERCICIO DE LA PRIMERA LETRA
const nombreUsuario = prompt('Ingresa por favor tu nombre');
const primeraLetra = nombreUsuario.charAt(0);
const primeraLetraMayuscula = primeraLetra.toUpperCase();
const resto = nombreUsuario.substring(1)
console.log(primeraLetraMayuscula + resto);
