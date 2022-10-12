//! Capturing vs Bubbling

let padre = document.getElementById('padre');
let hijo = document.getElementById('hijo');

padre.addEventListener('click',()=>console.log('Soy el padre'))
hijo.addEventListener('click',()=>console.log('Soy el hijo'))



const corral = document.querySelector('.corral');
const pet = document.querySelector('.pet');
let x = 0;
let y = 0;



window.addEventListener('keydown',(event)=>{
  event.preventDefault();
  let corralCoor = corral.getBoundingClientRect();
  let petCoor = pet.getBoundingClientRect();
  console.log(corralCoor);
  console.log(petCoor);
  switch(event.key){
    case 'ArrowDown':
      if(petCoor.bottom<corralCoor.bottom){
        console.log('aca voy a mover el cuadrado para abajo');
        y++;
      }
    break;
    case 'ArrowLeft':
      if(petCoor.left > corralCoor.left){
        console.log('aca voy a mover el cuadrado para la izquierda');
        x--;
      }
    break;
    case 'ArrowRight':
      if(petCoor.right < corralCoor.right){
        console.log('aca voy a mover el cuadrado para la derecha');
        x++;
      }
    break;
    case 'ArrowUp':
      if(petCoor.top > corralCoor.top){
        console.log('aca voy a mover el cuadrado para arriba');
        y--;
      }
    break;
  }
  pet.style.transform= `translate(${x*10}px,${y*10}px)`
})

// 0*10 = 0
// 1*10 = 10
// 2*10 = 20

// (0,0)
// -> abajo
// (0,10)
// ->arriba
// (0,-10)
// ->derecha
// (10,0)