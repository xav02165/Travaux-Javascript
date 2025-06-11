const case0=document.querySelector('.case0');
const case1=document.querySelector('.case1');
const case2=document.querySelector('.case2');
const case3=document.querySelector('.case3');
const case4=document.querySelector('.case4');
const case5=document.querySelector('.case5');
const case6=document.querySelector('.case6');
const case7=document.querySelector('.case7');
const case8=document.querySelector('.case8');
const case9=document.querySelector('.case9');
const case10=document.querySelector('.case10');
const case11=document.querySelector('.case11');
const case12=document.querySelector('.case12');
const case13=document.querySelector('.case13');
const case14=document.querySelector('.case14');
const case15=document.querySelector('.case15');
const h1=document.querySelector('h1');
const li=document.createElement("li");
//


//changement de couleur
 case0.addEventListener('click', () => {
    case15.style.backgroundColor='red';
    case10.style.backgroundColor='yellow';
    case5.style.backgroundColor='green';
    
})

//texte qui apparait
 case1.addEventListener('click', (event) =>{
    h1.textContent="revision du mercredi";
 })

 //changement de couleur uni
 case3.addEventListener('click',()=>  {
    case15.style.backgroundColor='blue';
    case10.style.backgroundColor='blue';
    case5.style.backgroundColor='blue';
 })

 //creation de nouveau li
 case2.addEventListener('click',() => {
    const ul=document.getElementById("list");

     const li1 = document.createElement('li');
     const text1 = document.createTextNode('une');
         li1.appendChild(text1);
         ul.appendChild(li1);

  
     const li2 = document.createElement('li');
     const text2 = document.createTextNode('dos');
         li2.appendChild(text2);
         ul.appendChild(li2);

  
     const li3 = document.createElement('li');
     const text3 = document.createTextNode('tres');
        li3.appendChild(text3);
         ul.appendChild(li3);
 });

 //suppression d'element
 const ul=document.querySelector('ul');

 case4.addEventListener('click', (event) => {
ul.firstElementChild
ul.removeChild(ul.firstElementChild);

ul.lastElementChild
ul.removeChild(ul.lastElementChild);
 })

 //boule qui se deplace

 const mouse =document.querySelector('.boule')

document.addEventListener ( 'mousemove', (event) => {
    const x = event.clientX; 
    const y = event.clientY; 
    console.log(`Position de la souris : X=${x}, Y=${y}`);
    mouse.style.left = x + "px" ;
    mouse.style.top = y + "px";

})


//test flash for fun

function flashElement(flash, duration = 500, times = 3) {
  const element = document.getElementById("flash");
  if (!element) {
    console.error(`Élément avec l'ID "${flash}" introuvable.`);
    return;
  }

  let count = 0;
  const interval = setInterval(() => {
    element.style.opacity = element.style.opacity === "0" ? "1" : "0";
    count++;

    if (count >= times * 10){
      clearInterval(interval);
      element.style.opacity = "1"; 
    }
  }, duration / (times * 2));
}

flashElement()