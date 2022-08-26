
//*Redondeo y truncamiento
let numero = 35.75;

// Redondeo --> 36
console.log('numero redondeado', Math.round(numero));
// Truncamiento-->35
console.log('numero redondeado', Math.floor(numero));

//*Encontrar máximos y mínimos

let maximo = Math.max(1,15,2,35,8,112,4,9);
console.log('Numero más grande ', maximo);

let minimo = Math.min(1,15,2,35,8,112,4,9);
console.log('Numero más chico ', minimo);

//* Potencias y raíces

console.log('3 al cuadrado es: ', Math.pow(3,2));
console.log('3 al cubo es: ', Math.pow(3,3));

console.log('La raíz cuadrada de 9 es: ', Math.sqrt(9));
console.log('La raíz cubica de 27 es: ', Math.cbrt(27));


//* Obtener un numero aleatorio que está entre 0 y 1

let aleatorio = Math.random();
console.log(aleatorio);

//? Obtener un numero aleatorio que esté entre 0 y 10 --> 0 y 1 *10 --> 0 y 10

let aleatorio2 = Math.round(Math.random() * 10);
console.log(aleatorio2);

//* Parsear cadenas

let string='15.25asd'
console.log(string);

console.log(Number(string));
console.log(parseInt(string));
console.log(parseFloat(string));

//* Limitar la cantidad de decimales

let numero2 = Math.random();
console.log(Number(numero2.toFixed(2))); //el .toFixed te convierte el numero a un string