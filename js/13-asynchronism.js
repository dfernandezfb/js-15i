// //* Entendiendo el motor de JS en el navegador

// console.log('Hola mi banda');

// setTimeout(()=>{
//   console.log('Me metí en el medio')
// },0);

// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');
// console.log('querida de la 15i');

//? PROMESAS: Un objeto que representa una total incógnita, que no sabemos el resultado, ni la demora

const promesa = new Promise((resolve,reject)=>{
  const numero = Math.random();
  console.log(numero);
  setTimeout(()=>{
    numero>0.9?
    resolve('Exito')
    :
    reject('Es menor a 0.5, falla')
  },3000)
})

// promesa.then((message)=>{console.log(message)}).catch((error)=>{console.log(error)})

//? ASYNC - AWAIT

const resolviendoPromesa = async()=>{
  try {
    const resultadoPromesa = await promesa;
    console.log(resultadoPromesa)
    // return resultadoPromesa;
  } catch (error) {
    console.log(error);
  }
}

// console.log(resolviendoPromesa());
// async function leyendoFuncion (){
//   try {
//     console.log(await resolviendoPromesa())
//   } catch (error) {
//     console.log(error);    
//   }
// }

const getRandomCocktail = async()=>{
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-26.81&lon=-65.21&appid=95473dc3791f643b5c418e0eb62bab91&lang=es&units=metric');
    const data = await response.json();
    console.log(data);  
  } catch (error) {
    alert(error.message)
  }
}
getRandomCocktail();