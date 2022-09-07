let days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

console.log(days[0]); //primera vuelta
console.log(days[1]); 
console.log(days[2]);
console.log(days[3]);
console.log(days[4]);
console.log(days[5]);
console.log(days[6]); // days.length=7

//! DRY
//! DON'T REPEAT YOURSELF

for(let i=0; i<days.length; i++){
  console.log(days[i])
}

days.push('Feriadol')
console.log(days);

const dayDeleted = days.pop();
console.log(dayDeleted);
console.log(days);

days.unshift('Feriadol')
console.log(days);

days.shift()
console.log(days);

console.log(days.indexOf('Lunes')) //devuelve -1 cuando el elemento no se encuentra en el array

days.reverse();

console.log(days);

console.log(days.includes('Feriadol'));

console.log('Los dias de la semana son: \n- ' + days.join('\n- '));

days.sort();
console.log(days);

let equipos= ['San Martin de Tucumán', 'Atletico Tucumán', 'Central Norte'];

let muertos = equipos.slice(1,3);
console.log(muertos);

console.log(equipos);

dk = equipos.splice(1,1,'Concepción');
console.log(dk);

console.log(equipos);