let person = {
  name: "Marcos Rigo",
  age: 32,
  location: 'Tucumán',
  hobbies:['Jugar al futbol', 'escabiar', 'Gimnasio'],
  pet:[{
    name:'Teo',
    type:'dog'
  },{
    name:'Chiquita',
    type:'dog'
  }],
  children: null,

  saludar: function(){
    console.log('Hola, soy Marcos');
  }
}


//Para leer un dato podemos utilizar dos tipos de notaciones:

//* Notación de punto

console.log(person.name);

//* Notación de corchete

console.log(person['name']);

//! Para editar alguna propiedad usamos las mismas notaciones

//Si quiero leer el nombre del segundo perrito
console.log(person.pet[1].name);

delete person.children

console.log(person);

//ToDo

let person2 = {
  name:'Diego',
  age:26,
  dni:31253513,
  address:'Calle sin nombre 123',
  children:0,
  job:'Programador',

  saludar:function(){
    console.log(`Hola, yo soy ${this.name}`);
  },
  listar: function(){
    for (property in this){
      console.log(`${property} = ${ this[property]}`);
    }
  }


}

// CREANDO OBJETOS CON LA FUNCIÓN CONSTRUCTORA

function Team (name, colors, people){
  this.name= name;
  this.colors = colors;
  this.people = people
}

let sanMartin = new Team('San Martín de Tucumán', ['Rojo','Blanco'],1000000);
let atletico = new Team('Atletico Tucumán',['Celeste','Blanco'],200);

console.log(sanMartin);
console.log(atletico);

// CREANDO OBJETOS CON CLASES

class Country{
  constructor(name, people){
    this.name=name;
    this.people=people;
  }
  // toLowerCase
  // toUpperCase
}

const arg = new Country('Argentina', 40000000);
const bra = new Country('Brasil',100000000);

console.log(arg);
console.log(bra);

const cadena = new String('hola soy una cadena');

console.log(cadena);

10

new Number(10)

const series = [
  {
    name:'Friends',
    seasons:10,
    origin: 'EEUU',
    description:'6 amigos que realizan aventuras',
    showDescription: function(){
      console.log(`La serie se llama ${this.name}, un breve resumen es el siguiente:\n ${this.description} `)
    }
  },{
    name:'Game of Thrones',
    seasons:8,
    origin:'Ireland',
    description:'Una lucha interminable por el trono de hierro',
    showDescription: function(){
      console.log(`La serie se llama ${this.name}, un breve resumen es el siguiente:\n ${this.description} `)
    }
  },{
    name:'Breaking Bad',
    seasons:5,
    origin:'EEUU',
    description:'Un profesor de quimica que descubre su lado malvado',
    showDescription: function(){
      console.log(`La serie se llama ${this.name}, un breve resumen es el siguiente:\n ${this.description} `)
    }
  }
]

// series.forEach(mostrarDescripcion)

// function mostrarDescripcion(serie){
//   serie.showDescription();
// }

series.forEach(serie=>serie.showDescription())
// series.map(serie=>serie.showDescription()) --> [null,null,null]
// [1,2,3]
// numeros.forEach(numero=>console.log(numero))
// 1 --> console.log(1)
// 2 --> console.log(2)
// 3 --> console.log(3)