/*document.addEventListener('mousemove', (event) => {

    console.log(event.clientX, event.clientY);
    
    
})*/
const mouse =document.querySelector('.boule')

document.addEventListener ( 'mousemove', (event) => {
    const x = event.clientX; 
    const y = event.clientY; 
    console.log(`Position de la souris : X=${x}, Y=${y}`);
    mouse.style.left = x + "px" ;
    mouse.style.top = y + "px";

})

