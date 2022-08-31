
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

// let provincia = prompt('Che, de donde sos?');

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

// switch(provincia.toLowerCase()){
//   case 'tucuman':
//     console.log('%cQue buen sanguche de milanesa hermano','color:yellow; font-size:30px;');
//     break;
//   case 'cordoba':
//     console.log('%cEstá loco esos cuartetazos hermano','color:yellow; font-size:30px;');
//     break;
//   case 'santiago del estero':
//     console.log('%cQue siestas papá','color:yellow; font-size:30px;');
//     break;
//   case 'buenos aires':
//     console.log('%cPorteño bobo','color:yellow; font-size:30px;');
//     break;
//   default:
//     console.log('%cProvincia irrelevante','color:yellow; font-size:30px;');
// }

// //! EJERCICIO DE REPASO DE CONDICIONALES

// const num1 = Number(prompt('Ingrese un número')); //"15" + "20" = "1520"
// const num2 = Number(prompt('Ingrese un segundo número')); //"15" + "20" = "1520"

// if(num1>num2){
//   console.log(num1 + num2, 'suma');
// }else if(num1<num2){
//   console.log(num2-num1,'resta');
// }else{
//   console.log(num1*num2, 'multiplicacion');
// }

// // //! EJERCICIO DE REPASO DE CONDICIONALES

// const age = prompt('Cuantos años tenes?');26

// switch(true){ //"26"
//   case age>0 && age<=10: //false
//     console.log('La granja de Zenón');
//     break;
//   case age>10 && age<=20: //false
//     console.log('Tini, La triple T');
//     break;
//   case age>20 && age<=30: //true
//     console.log('Paulo Londra, Plan B');
//     break;
//   case age>30 && age<=40://false
//     console.log('Amar azul, Yo tomo lícor');
//     break;
//   case age>40 && age<=50://false
//     console.log('Ricardo Montaner, ');
//     break;
//   case age>50 && age<=60://false
//     console.log('Karicia, Quinceañera');
//     break;
//   default:
//     console.log('Amargo');
//     break;
// }
// //! EJERCICIO DE REPASO DE CONDICIONALES

const day= new Date().getDay();

switch(day){
  case 1:
    console.log('Hoy es lunes');
    break;
  case 2:
    console.log('Hoy es martes');
    break;
  case 3:
    console.log('Hoy es miercoles');
    break;
  case 4:
    console.log('Hoy es jueves');
    break;
  case 5:
    console.log('Hoy es viernes');
    break;
  case 6:
    console.log('Hoy es sabado');
    break;
  case 7:
    console.log('Hoy es domingo');
    break;
}
