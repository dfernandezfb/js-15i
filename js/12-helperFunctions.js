export const suma = (x,y)=>{
  return x+y
}

export const navbar = ()=>{
  const navbar = document.createElement('navbar');
  navbar.innerHTML=`<h1>Soy un navbar</h1>`
  document.querySelector('#navbar-container').appendChild(navbar)
}