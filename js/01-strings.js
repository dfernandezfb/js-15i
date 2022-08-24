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

console.log(randomString.length)
console.log(randomString.toUpperCase())
console.log(randomString.toLowerCase())
console.log(randomString.includes('manzana'))
console.log(name.charAt(0));
console.log(claveDeInicio.substring(0,8));
console.log(lastname.trim());
console.log(randomString.includes('ito c'));
console.log(url.substring(34).replace('-',' '));