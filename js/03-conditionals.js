
//ESTRUCTURA CONDICIONAL SIMPLE

// let edad= prompt('¿Cuantos años tenes?');
// if(edad>= 18 ){
//   //codigo a ejecutar
//   console.log('Machate tranquilo');
// }else{
//   //codigo a ejecutar si la condición del if dió falso
//   console.log('Vaya a tomar gatorade');
// }

//CEMENTERIO INDIO EMBRUJADO

// const tieneAnteojos = prompt('Trajiste tus anteojos?'); 

// if(tieneAnteojos.toLowerCase() === 'si'){
//   alert('Corre wachin')
// }else{
//   if(tieneAnteojos.toLowerCase() === 'no'){
//     alert('Compra tranquilo')
//   }else{
//     alert('Por favor solo respuesta de si y no')
//   }
// }

//Pares e impares
// const numero = prompt('Ingrese un numero para ver si es par o impar'); //! prompt devuelve un string!

// if(numero%2===0){
//   console.log('%cEs par','color:blue; font-size:30px;');
// }else{
//   console.log('%cEs impar','color:red; font-size:30px;');
// }

// CEMENTERIO INDIO EMBRUJADO CON CONDICIONALES MULTIPLES

// const tieneAnteojos = prompt('Trajiste tus anteojos?'); 

// if(tieneAnteojos.toLowerCase() === 'si'){
//   alert('Corre wachin')
// }else if(tieneAnteojos.toLowerCase() === 'no'){
//   alert('Compra tranquilo')
// }else{
//   alert('Por favor solo respuesta de si y no')
// }

//PATOVICA DE FIESTA

// let edad = prompt('Cuantos años tenes?');

// if(edad>=18){
//   alert('Disfruta la fiesta')
// } else if(prompt('Trajiste tutor').toLowerCase()==='si'){
//   alert('Disfruten la fieste')
// } else{
//   alert('Vaya a la casa changuito')
// }

// PROVINCIAS COPADAS

let provincia = prompt('Che, de donde sos?');

// if(provincia.toLowerCase()==='tucuman'){
//   console.log('%cQue buen sanguche de milanesa hermano','color:yellow; font-size:30px;');
// }else if (provincia.toLowerCase()==='cordoba'){
//   console.log('%cEstá loco esos cuartetazos hermano','color:yellow; font-size:30px;');
// } else if(provincia.toLowerCase()==='santiago del estero'){
//   console.log('%cQue siestas papá','color:yellow; font-size:30px;');
// } else if(provincia.toLowerCase()==='buenos aires'){
//   console.log('%cPorteño bobo','color:yellow; font-size:30px;');
// } else{
//   console.log('%cProvincia irrelevante','color:yellow; font-size:30px;');
// }

switch(provincia.toLowerCase()){
  case 'tucuman':
    console.log('%cQue buen sanguche de milanesa hermano','color:yellow; font-size:30px;');
    break;
  case 'cordoba':
    console.log('%cEstá loco esos cuartetazos hermano','color:yellow; font-size:30px;');
    break;
  case 'santiago del estero':
    console.log('%cQue siestas papá','color:yellow; font-size:30px;');
    break;
  case 'buenos aires':
    console.log('%cPorteño bobo','color:yellow; font-size:30px;');
    break;
  default:
    console.log('%cProvincia irrelevante','color:yellow; font-size:30px;');
}