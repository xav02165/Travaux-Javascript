
const case0 = document.querySelector('.case0');
const case1 = document.querySelector('.case1');
const case2 = document.querySelector('.case2');
const case3 = document.querySelector('.case3');
const case4 = document.querySelector('.case4');
const case5 = document.querySelector('.case5');
const case6 = document.querySelector('.case6');
const case7 = document.querySelector('.case7');
const case8 = document.querySelector('.case8');
let turnPlayer = 0;
let compteur = 0;
let finito = false;

case0.addEventListener('click', () => {
    if (compteur < 8) {
        compteur++;
        return;
    }
    if (compteur == 8) {
        console.log ("match nul");
        finito = true;
        
    }
});
case1.addEventListener('click', () => {
    if (compteur < 8) {
        compteur++;
        return;
    }
    if (compteur == 8) {
        console.log ("match nul");
        finito = true;
        
    }
});
case2.addEventListener('click', () => {
    if (compteur < 8) {
        compteur++
        return
    }
    if (compteur == 8) {
        console.log ("match nul")
        finito = true;
    }
})
case3.addEventListener('click', () => {
    if (compteur < 8) {
        compteur++
        return
    }
    if (compteur == 8) {
        console.log ("match nul")
        finito = true;
        
    }
})
case4.addEventListener('click', () => {
    if (compteur < 8) {
        compteur++
        return
    }
    if (compteur == 8) {
        console.log ("match nul")
        finito = true;
    }
})
case5.addEventListener('click', () => {
    if (compteur < 8) {
        compteur++
        return
    }
    if (compteur == 8) {
        console.log ("match nul")
        finito = true;
    }
})
case6.addEventListener('click', () => {
    if (compteur < 8) {
        compteur++
        return
    }
    if (compteur == 8) {
        console.log ("match nul")
        finito = true;
    }
})
case7.addEventListener('click', () => {
    if (compteur < 8) {
        compteur++
        return
    }
    if (compteur == 8) {
        console.log ("match nul")
        finito = true;
        
    }
})
case8.addEventListener('click', () => {
    if (compteur < 8) {
        compteur++
        return
    }
    if (compteur == 8) {
        console.log ("match nul")
        
    }
})

case0.addEventListener('click', () => {
     if (finito == true) {
        rejouer();
        finito = false;
        return;
    }
    if (case0.style.backgroundImage !== ""){
        return
    }
    if (turnPlayer == 0){
        case0.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case0.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }
    verifVictoire()
})
case1.addEventListener('click', () => {
     if (finito == true) {
        rejouer();
        finito = false;
        return;
    }
    if (case1.style.backgroundImage !== ""){
        return
    }
    if (turnPlayer == 0){
        case1.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case1.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }
    verifVictoire()
})

case2.addEventListener('click', () => {
     if (finito == true) {
        rejouer();
        finito = false;
        return;
    }
    if (case2.style.backgroundImage !== ""){
        return
    }
    if (turnPlayer == 0){
        case2.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case2.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }
    verifVictoire()
})
case3.addEventListener('click', () => {
     if (finito == true) {
        rejouer();
        finito = false;
        return;
    }
    if (case3.style.backgroundImage !== ""){
        return
    }    
    if (turnPlayer == 0){
        case3.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case3.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }

    verifVictoire()
    
})
case4.addEventListener('click', () => {
    if (finito == true) {
        rejouer();
        finito = false;
        return;
    }
    if (case4.style.backgroundImage !== ""){
        return
    }
    if (turnPlayer == 0){
        case4.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case4.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }
    
    verifVictoire()
})

case5.addEventListener('click', () => {
     if (finito == true) {
        rejouer();
        finito = false;
        return;
    }
    if (case5.style.backgroundImage !== ""){
        return
    }
    if (turnPlayer == 0){
        case5.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case5.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }

    verifVictoire()
    
})
case6.addEventListener('click', () => {
     if (finito == true) {
        rejouer();
        finito = false;
        return;
    }
    if (case6.style.backgroundImage !== ""){
        
        return
    }
    if (turnPlayer == 0){
        case6.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case6.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }
    
    verifVictoire()
})

case7.addEventListener('click', () => {
    if (finito == true) {
        rejouer();
        finito = false;
        return;
    }
    if (case7.style.backgroundImage !== ""){
        return
    }
        if (turnPlayer == 0){
            case7.style.backgroundImage = "url('images/x.png')";
            turnPlayer = 1
        }
        else {
            case7.style.backgroundImage = "url('images/o.png')";
            turnPlayer = 0     
        }
    verifVictoire()
})

case8.addEventListener('click', () => {
    if (finito == true) {
        rejouer();
        finito = false;
        return;
    }
    if (case8.style.backgroundImage !== ""){
        return
    }
        if (turnPlayer == 0){
            case8.style.backgroundImage = "url('images/x.png')";
            turnPlayer = 1
        }
        else {
            case8.style.backgroundImage = "url('images/o.png')";
            turnPlayer = 0     
        }
    verifVictoire()
})


function verifVictoire(){
    // Condition de victoire
    // Victoire pour les X
    if ((case0.style.backgroundImage === 'url("images/x.png")' && case1.style.backgroundImage === 'url("images/x.png")' && case2.style.backgroundImage) === 'url("images/x.png")'){      
        console.log("c'est gagne pour les X")
        scoreX++ 
        compteurVictoire();
        
        
    }
    if (case3.style.backgroundImage === 'url("images/x.png")' && case4.style.backgroundImage === 'url("images/x.png")' && case5.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X")
        scoreX++
        compteurVictoire();
    }
    if (case6.style.backgroundImage === 'url("images/x.png")' && case7.style.backgroundImage === 'url("images/x.png")' && case8.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X")
        scoreX++
        compteurVictoire();
    }
    if (case0.style.backgroundImage === 'url("images/x.png")' && case3.style.backgroundImage === 'url("images/x.png")' && case6.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X")
        scoreX++
        compteurVictoire();
    }
    if (case1.style.backgroundImage === 'url("images/x.png")' && case4.style.backgroundImage === 'url("images/x.png")' && case7.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X")
        scoreX++
        compteurVictoire();
    }
    if (case2.style.backgroundImage === 'url("images/x.png")' && case5.style.backgroundImage === 'url("images/x.png")' && case8.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X")
        scoreX++
        compteurVictoire();
    }
    if (case0.style.backgroundImage === 'url("images/x.png")' && case4.style.backgroundImage === 'url("images/x.png")' && case8.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X")
        scoreX++
        compteurVictoire();
    }
    if (case2.style.backgroundImage === 'url("images/x.png")' && case4.style.backgroundImage === 'url("images/x.png")' && case6.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X")
        scoreX++
        compteurVictoire();
    }

    // Victoire pour les O
    if (case0.style.backgroundImage === 'url("images/o.png")' && case1.style.backgroundImage === 'url("images/o.png")' && case2.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O")
        scoreO++
        compteurVictoire();
    }
    if (case3.style.backgroundImage === 'url("images/o.png")' && case4.style.backgroundImage === 'url("images/o.png")' && case5.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O")
        scoreO++
        compteurVictoire();
    }
    if (case6.style.backgroundImage === 'url("images/o.png")' && case7.style.backgroundImage === 'url("images/o.png")' && case8.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O")
        scoreO++
        compteurVictoire();
    }
    if (case0.style.backgroundImage === 'url("images/o.png")' && case3.style.backgroundImage  === 'url("images/o.png")'&& case6.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O")
        scoreO++
        compteurVictoire();
    }
    if (case1.style.backgroundImage === 'url("images/o.png")' && case4.style.backgroundImage === 'url("images/o.png")' && case7.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O")
        scoreO++
        compteurVictoire();
    }
    if (case2.style.backgroundImage === 'url("images/o.png")' && case5.style.backgroundImage === 'url("images/o.png")' && case8.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O")
        scoreO++
        compteurVictoire();
    }
    if (case0.style.backgroundImage === 'url("images/o.png")' && case4.style.backgroundImage === 'url("images/o.png")' && case8.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O")
        scoreO++
        compteurVictoire();
    }
    if (case2.style.backgroundImage === 'url("images/o.png")' && case4.style.backgroundImage === 'url("images/o.png")' && case6.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O")
        scoreO++
        compteurVictoire();
    }
    

}

/*compteur de victoire*/
let scoreX = 0;
let scoreO = 0;
let spanX;
let spanO;

function compteurVictoire() {
    
    spanX = document.getElementById("scoreX");
    spanX.textContent = scoreX;
    
        
    spanO = document.getElementById("scoreO");
    spanO.textContent = scoreO;
    finito = true;
    
}
/*reinitialiser le jeu*/
function reset() {
    turnPlayer = 0 ;
    compteur = 0 ;
    scoreX = 0 ;
    scoreO = 0 ;
    spanX = 0 ;
    spanO = 0 ;
    spanO = document.getElementById("scoreO");
    spanX = document.getElementById("scoreX");
    spanX.textContent = scoreX;
    spanO.textContent = scoreO;
    case0.style.backgroundImage="";
    case1.style.backgroundImage="";
    case2.style.backgroundImage="";
    case3.style.backgroundImage="";
    case4.style.backgroundImage="";
    case5.style.backgroundImage="";
    case6.style.backgroundImage="";
    case7.style.backgroundImage="";
     case8.style.backgroundImage="";
    }

/*bouton rejouer*/
function rejouer() {
    turnPlayer = 0 ;
    compteur = 0 ;
    case0.style.backgroundImage="";
    case1.style.backgroundImage="";
    case2.style.backgroundImage="";
    case3.style.backgroundImage="";
    case4.style.backgroundImage="";
    case5.style.backgroundImage="";
    case6.style.backgroundImage="";
    case7.style.backgroundImage="";
    case8.style.backgroundImage="";
    }

    