
const ens1 = document.querySelector('.ens1');
const ens2 = document.querySelector('.ens2');
const ens3 = document.querySelector('.ens3');
const ens4 = document.querySelector('.ens4');
const ens5 = document.querySelector('.ens5');
const ens6 = document.querySelector('.ens6');
const ens7 = document.querySelector('.ens7');
const ens8 = document.querySelector('.ens8');
const ens9 = document.querySelector('.ens9');
const ens10 = document.querySelector('.ens10');
const h2 = document.querySelector('h2');
let v1 = true;
let v2 = true;
let v3 = true;
let v4 = true;
let v5 = true;
let v6 = true;
let v7 = true;
let v8 = true;
let v9 = true;
let v10 = true;
let erreurs = 0;
const erreursMax = 10;

//Demander le mot a deviner:

function demanderMot() {
    let motADeviner = prompt("Entrez un mot pour le jeu du pendu :");
    while (!motADeviner || motADeviner.trim() === "") {
        motADeviner = prompt("Veuillez entrer un mot valide :");
    }
    return motADeviner.toLowerCase(); 
  
}

const motPourLeJeu = demanderMot();

//Transforme le motPourLeJeu en tableau pour comparaison:
let tableauMot = motPourLeJeu.split("");
console.log(tableauMot);




// Vérification si la lettre est dans le tableau

function verification() {


     h2.style.color = "red";
    
     document.addEventListener("keydown", (event) => {
  const lettre = event.key;
  console.log(`Vous avez appuyé sur : ${lettre}`)});



if (tableauMot.includes(lettre)) {

lettresDevinees.push(lettre);

if (motADeviner.includes(lettre)){
console.log("lettre trouvé");}




else {

    if (v1 = true) {
        ens1.style.backgroundColor = "black";
        v1 = false;
        
          
    }
    if  (v2 = true && v1 === false) {
        ens2.style.backgroundColor = "black";
        v2 = false ;
        
        
    }
     if  (v3 = true && v1 === false && v2 === false) {
        ens3.style.backgroundColor = "black";
        v3 = false ;
        
        
    }
     if  (v4 = true && v3 === false && v2 === false && v1 === false) {
        ens4.style.backgroundColor = "black";
        v4 = false ;
        
        
    }
     if  (v5 = true && v4 === false && v3 === false && v2 === false && v1 === false ) {
        ens5.style.backgroundColor = "black";
        v5 = false ;
        
        
    }
     if  (v6 = true && v5 === false && v4 === false && v3 === false && v2 === false && v1 === false ) {
        ens6.style.backgroundColor = "black";
        v6 = false ;
        
        
    }
     if  (v7 = true && v6 === false && v5 === false && v4 === false && v3 === false && v2 === false && v1 === false ) {
        ens7.style.backgroundColor = "black";
        v7 = false ;
        
        
        
    }
     if  (v8 = true && v7 === false && v6 === false && v5 === false && v4 === false && v3 === false && v2 === false && v1 === false) {
        ens8.style.backgroundColor = "black";
        v8 = false ;
        
        
    }
    if  (v9 = true && v8 === false && v7 === false && v6 === false && v5 === false && v4 === false && v3 === false && v2 === false && v1 === false) {
        ens9.style.backgroundColor = "black";
        v9 = false ;
        
        
        
    }
     if  (v10 = true && v9 === false && v8 === false && v7 === false && v6 === false && v5 === false && v4 === false && v3 === false && v2 === false && v1 === false) {
        ens10.style.backgroundColor = "black";
        v10 = false ;
        
        
        
    
    
}
}
     }}
