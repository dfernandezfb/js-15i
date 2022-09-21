//* Crear un algoritmo por el cual se simule el lanzamiento de dos dados

/**
 * Tirar los dados --> Pulsar un botón
 * El dado arroja un número aleatorio
 * El número tiene que estar entre 1 y 6
 */

function lanzamientoDados (){
  let dado1 = Math.ceil(Math.random()*6);
  let dado2 = Math.ceil(Math.random()*6);
  alert(`DADO 1: ${dado1} - DADO 2: ${dado2}`)
}