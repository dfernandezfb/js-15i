//*WHILE: MIENTRAS LA CONDICIÓN SE CUMPLA SE EJECUTA EL CÓDIGO DE ADENTRO
// let numero =15;

// while(numero==15){
//   console.log('Estoy todavía adentro del while');
//   numero++;
// }

// console.log('Salí del while');

// //ToDo EJERCICIO

// let numero = prompt('Ingresa un numero');
// let contador = 0;

// while(contador<numero){
//   console.log(contador);
//   contador++;
// }

// // while(numero>=0){//si si ... si si no (sale del while)
// //   console.log(numero);//15 14 ... 1 0
// //   numero--;//14 13 ... 1 0 -1
// // }
// //ToDo EJERCICIO

// let response = prompt('Por qué la luna es mayor que el sol');
// let intentos =1;
// let surrender = false;

// while(response.toLowerCase()!='porque sale de noche' && surrender===false){
//   response= prompt('Intenta nuevamente');
//   intentos++;
//   if(intentos===3){
//     alert('Pensá en batman');
//   }
//   if(intentos===5){
//     surrender=true;
//   }
// }

// if(surrender!=true){
//   alert('Llegó Don Comedia');
// }else{
//   alert('Amargo')
// }

//*FOR
// let numero = prompt('Ingresa un numero');

// for(let contador = 0; contador < numero; contador++){
//   console.log(contador);
// }
// let contador = 0;

// while(contador<numero){
//   console.log(contador);
//   contador++;
// }

// // while(numero>=0){//si si ... si si no (sale del while)
// //   console.log(numero);//15 14 ... 1 0
// //   numero--;//14 13 ... 1 0 -1
// // }

//ToDo Machete de tablas

// let number =  prompt('Que tabla queres saber?');

// for(let contador=0; contador<=10 ; contador++){
//   console.log( `${number}x${contador}=${number*contador}`/*5x0=0*/)
// }


//!EJERCICIO EN GRUPOS :D
// //* - Recibir dos valores y la operacion a realizar (+, -, *, /)

// //* - Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0 (PISTA: isNaN(x))

// //* - Con una estructura switch verificar la operacion y devolver un mensaje con el resultado de la misma.

// //* - Si se ingresa una operación que no está contemplada devolver un mensaje de error.

// // PONGAN PARA NO SEGUIRME A LA IZQUIERDA
// //EJERCICIO GRUPOS (1) guille gi nico pereira y marcos martin

// let valor1 = Number(prompt("ingrese un numero"));
// let valor2 = Number(prompt("ingrese un segundo numero"));
// let operacion = prompt("ingrese un operador para realizar la operación");

// if(isNaN(valor1)){
// valor1 = 0;
// }
// if(isNaN(valor2)){
//   valor2 = 0;
//   }

// if(valor2==0){
// valor2 = Number(prompt("ingrese un numero distinto de cero"));
// }

//   switch(operacion){
//     case "+":
//     console.log(valor1 + valor2);
//     break;
//     case "-":
//     console.log(valor1 - valor2);
//     break;
//     case "*":
//       console.log(valor1 * valor2);
//       break;
//       case "/":
//         console.log(valor1 / valor2);
//         break;
//         default:
//           console.log("ERROR 404");
//   }



// //EJERCICIO GRUPOS (2) javier valentin luis fabio agos
// //* - Recibir dos valores y la operacion a realizar (+, -, *, /)

// //* - Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0 (PISTA: isNaN(x))

// //* - Con una estructura switch verificar la operacion y devolver un mensaje con el resultado de la misma.

// //* - Si se ingresa una operación que no está contemplada devolver un mensaje de error.
// let number1 = number(prompt("Ingrese un numero"));
// let number2 = number(prompt("Ingrese un numero"));
// const operacion = prompt("que operacion quieres realizar? (+, -, *, /) ")

// if(isNaN(number1)){
//     number1=0;
// }
// if(isNaN(number2)){
//     number2=0;
// }
// //esaaaaaaaaaa
// //vamoooooooooooo
// // ya terminaron? zzzzzzzzzzzzzz
// switch(operacion){
//     case "+" : console.log(number1+number2);
//     break
//     case "-" : console.log(number1-number2);
//     break
//     case "*" : console.log(number1*number2);
//     break
//     case "/" : console.log(number1/number2);
//     break
//     default : alert("operacion incorrecta")
// }
// //listo diego... creo
// // FALLO, vean que tienen error



// //EJERCICIO GRUPOS (3) daniela david stefan nico peralta stella 

// //* - Recibir dos valores y la operacion a realizar (+, -, *, /)

// //* - Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0 (PISTA: isNaN(x))

// //* - Con una estructura switch verificar la operacion y devolver un mensaje con el resultado de la misma.

// //* - Si se ingresa una operación que no está contemplada devolver un mensaje de error.



// // Mi no tener microfono :)

// const number1 = prompt ("Ingrese 1er valor");
// const number2 = prompt ("Ingrese 2do valor");
// const operacion = prompt ("Ingrese operacion a realizar (+ - * /)");

// if (isNaN(number1)){
//     adiossssssssss
// }