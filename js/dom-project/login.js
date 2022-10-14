class User{
  constructor(id,name, age, email, password){
    this.id = id
    this.name = name
    this.age = age
    this.email = email
    this.password = password
  }
}

const users = [
  new User(1,'Diego Fernández',26,'diego@gmail.com','123456'),
  new User(2,'Javier Robles',35,'javier@gmail.com','12345678'),
  new User(3,'Facu Aguirre',25,'facu@gmail.com','123456'),
  new User(4,'Nicolas Pereira',26,'nico@gmail.com','123456'),
  new User(5,'Giselle Hemsy',25,'gi@gmail.com','123456'),
]

const login = (e)=>{
  //! PREVENIMOS EL COMPORTAMIENTO POR DEFECTO
  e.preventDefault();
  //! CAPTURAMOS LA INFORMACION
  //? Identificar de alguna manera los inputs en el HTML
  //? Selecciono los inputs desde JS
  const email = document.getElementById('values-email').value;
  const password = document.getElementById('values-password').value;
  const userFound = users.find(user=>user.email===email);
  if(userFound){
    const isOk = userFound.password===password
    if(isOk){
      alert('entro');
    }else{
      alertMessage('contraseña erronea','form')
    }
    
  }else{
    alertMessage('email incorrecto','form')
  }
}

function alertMessage (message,queryContainer){
  let alertMessage = document.createElement('div');
  alertMessage.classList.add('alert','alert-danger','mt-3');
  alertMessage.setAttribute('role','alert');
  alertMessage.innerText = message;
  let container= document.querySelector(queryContainer);
  container.appendChild(alertMessage);
  setTimeout(()=>{
    alertMessage.remove()
  },2000)
}