
// hello1();
// // hello2();
// // hello3();

// function hello1(){
//   console.log('Hola a todos');
// }

// const hello2 = function(){
//   console.log('Hi everyone');
// }

// const hello3 = ()=>{
//   console.log('Oi');
// }

// // const addition =(x, y) =>{
// //   const addition = x + y;
// //   return addition
// // }
// const addition = (fulano, mengano) => fulano + mengano  
// const resta = (fulano, mengano) => fulano - mengano  

// // const power = (x) =>{
// //   const power = x*x;
// //   return power
// // }
// const power = x => x * x  

// const additionOutput = addition(4,7);

// console.log(additionOutput);

// const winner = (team1, team2) => console.log(`El equipo ${team1} le ganó a el ${team2}`);

// //ToDo EJERCICIO

// const database = ['javier','martin', 'agos', 'marcos','luis'];

// const getDatabase = ()=>alert(database.join(', '));

// const deleteUser = () =>{
//   const name = prompt ('Que usuario queres borrar?').toLowerCase();
//   if(database.includes(name)){
//     const position = database.indexOf(name);
//     database.splice(position,1);
//     alert('Usuario eliminado')
//   }else{
//     alert('Usuario no encontrado')
//   }
// }

// const updateUser = function (){
//   const name = prompt ('Que usuario queres modificar?').toLowerCase();
//   const update = prompt ('Como es la modificacion?').toLowerCase();
//   if(database.includes(name)){
//     const position = database.indexOf(name);
//     // database[position]=update
//     database.splice(position,1,update);
//     alert('La base de datos ha sido actualizada')
//   }else{
//     alert('Usuario no encontrado')
//   }
// }

//* LAS FUNCIONES CALLBACK SON FUNCIONES QUE SE PASAN COMO ARGUMENTO DE OTRAS FUNCIONES

// const hi = nombre => alert('Hola ' + nombre);
// const bye = nombre => alert('Chau '+ nombre);

// function userRegister (saludo){
//   const name = prompt('Como es su nombre?');
//   saludo(name)
// }

// userRegister(hi)
// userRegister(bye)


// //*FILTER AND FIND
// const ageDatabase = [22, 26, 30, 20, 22];

// // function mayoresDe25(edad){
// //   if(edad>=25){
// //     return edad
// //   }
// // }

// // const olderThan25 = ageDatabase.filter(mayoresDe25);
// const olderThan25 = ageDatabase.filter(age=>age>=25); //! Devuelve una lista de todos los elementos que coinciden con la condición especificada
// const olderThan35 = ageDatabase.filter(age=>age>=35); //! si ninguno coincide devuelve un array vista []

// const mayorA25 = ageDatabase.find(age=>age>=25); //!Devuelve el primer elemento que se encuentra en el array que cumple con la condición especificada
// const mayorA35 = ageDatabase.find(age=>age>=35); //! si ninguno coincide devuelve null

// //* FOREACH AND MAP

// ageDatabase.forEach(age=>{
//   if(age>20) console.log('Es mayor a 20');
//   else console.log('Es menor a 20');
// }); //! NO DEVUELVE NADA NI TAMPOCO MODIFICA AL ARRAY ORIGINA, PERO TE PERMITE EJECUTAR UNA ACCIÓN CON CADA ITEM DEL ARRAY
// const en20años= ageDatabase.map(age=>age+20); //! TE PERMITE EJECUTAR UNA DETERMINADA ACCIÓN CON CADA ITEM DEL ARRAY Y GUARDARLO EN UN ARRAY NUEVO


//ToDo Calculadora

// const calculator = ()=>{
//   const num1= Number(prompt('Decime el primer número'));//1 --> 1
//   const num2 = Number(prompt('Decime el segundo número'));//asd --> nan
//   const operation = prompt('Que operación deseas realizar? (+,-,/,*\)');
//   if(isNaN(num1) || isNaN(num2)){ //false y true --> false
//     alert('Ingrese números válidos') 
//     return //CORTA LA EJECUCIÓN DEL CÓDIGO (el return)
//   }
//   switch(operation){
//     case '+':
//       alert(num1+num2);
//       break
//     case '-':
//       alert(num1-num2);
//       break
//     case '/':
//       alert(num1/num2);
//       break
//     case '*':
//       alert(num1*num2);
//       break
//     default:
//       alert('Ingresa una operación válida')
//   }
// }

// const innerCalculator = (num1, num2, operation)=>{
//   if(isNaN(num1) || isNaN(num2)){ //false y true --> false
//     alert('Ingrese números válidos') 
//     return //CORTA LA EJECUCIÓN DEL CÓDIGO (el return)
//   }
//   switch(operation){
//     case '+':
//       return num1+num2;
//     case '-':
//       return num1-num2;
//     case '/':
//       return num1/num2;
//     case '*':
//       return num1*num2;
//     default:
//       return 'Ingresa una operación válida'
//   }
// }

// const outcome = innerCalculator(8,3,'*')
// console.log(outcome);

// function little (){
//   console.log('hi');
//   return
//   console.log('bye');
// }

// function big (little){
//   little();
//   console.log('sale de la mas chica nada mas');
// }

//ToDo trolley

let products = ['agua','cerveza','gin','vino','fernet','cachaza','gatorade','ron','vodka','whisky'];
let trolley = [];

const addProduct = ()=>{
  const productToAdd = prompt('Que producto deseas agregar al carrito?').toLowerCase();
  if(products.includes(productToAdd)){
    trolley.push(productToAdd);
  }else{
    alert('No vendemos ese producto, volvé mañana')
  }
}

const getTrolley = ()=>{
  alert('Los productos de su carrito son: \n- ' + trolley.join('\n- '))
}

function getProductFromTrolley (){
  const productToFind = prompt('Que producto deseas ver de tu carrito?').toLowerCase();
  if(trolley.includes(productToFind)){
    const product = trolley.find(drink => drink == productToFind)
    alert(product)
  }else{
    alert('No tienes ese producto en tu carrito')
  }
}

const findProducts = function (){
  const search = prompt('Buscar bebidas...').toLowerCase();
  const results = products.filter(product=>product.includes(search));
  alert(results)
}

const removeProductFromTrolley = ()=>{
  const productToRemove = prompt('Que bebida deseas eliminar de tu carrito?').toLowerCase();
  checkIfIsInTrolley(productToRemove);
  trolley = trolley.filter(product=>product!=productToRemove);
  alert('Producto eliminado')
}

function checkIfIsInTrolley(product){
  if(!trolley.includes(product)){
    return alert('No tienes ese producto en tu carrito')
  }
}

//ToDo Rock paper scissors

const options = ['piedra', 'papel', 'tijeras'];

function playerMove(){
  let move = prompt('Piedra, papel, o tijeras?').toLowerCase().trim();
  return move;
}
function botMove(){
  let randomNumber=Math.random()
  let move = Math.floor(randomNumber * 2.99);
  console.log(randomNumber * 2.99);
  console.log(move);
  return options[move]
}

function game ( player ){
  const bot = botMove();
  // const player = playerMove();
  switch(true){
    case player === bot:
      alert(`El bot jugó ${bot}. Empate`);
      break;
    case player==='piedra' && bot==='papel':
      alert(`El bot jugó papel. Gana el bot`);
      break;
    case player==='piedra' && bot==='tijeras':
      alert(`El bot jugó tijeras. Ganaste vos`);
      break;
    case player==='papel' && bot==='piedra':
      alert(`El bot jugó piedra. Ganaste vos`);
      break;
    case player==='papel' && bot==='tijeras':
      alert(`El bot jugó tijeras. Gana el bot`);
      break;
    case player==='tijeras' && bot==='piedra':
      alert(`El bot jugó piedra. Gana el bot`);
      break;
    case player==='tijeras' && bot==='papel':
      alert(`El bot jugó papel. Ganaste vos`);
      break;
  }
}