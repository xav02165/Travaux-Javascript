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


//Demander le mot a deviner:
/*
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

//Demander une lettre:
const lettre = choixLettre();

function choixLettre () {
let lettreAJouer = prompt ("Choississez une lettre:");

}
verification();


// Vérification si la lettre est dans le tableau

function verification() {

if (tableauMot.includes(lettre)) {
  choixLettre ();

} 

    if (v1 = true) {
        ens1.style.backgroundColor = "black";
        v1 = false;
        choixLettre () ;
        return;  
    }
    if  (v2 = true) {
        ens2.style.backgroundColor = "black";
        v2 = false ;
        return;
    }
     if  (v3 = true) {
        ens3.style.backgroundColor = "black";
        v3 = false ;
        return;
    }
     if  (v4 = true) {
        ens4.style.backgroundColor = "black";
        v4 = false ;
        return;
    }
     if  (v5 = true) {
        ens5.style.backgroundColor = "black";
        v5 = false ;
        return;
    }
     if  (v6 = true) {
        ens6.style.backgroundColor = "black";
        v6 = false ;
        return;
    }
     if  (v7 = true) {
        ens7.style.backgroundColor = "black";
        v7 = false ;
        return;
        
    }
     if  (v8 = true) {
        ens8.style.backgroundColor = "black";
        v8 = false ;
        return;
    }
    if  (v9 = true) {
        ens9.style.backgroundColor = "black";
        v9 = false ;
        return;
        
    }
     if  (v10 = true) {
        ens10.style.backgroundColor = "black";
        v10 = false ;
        return;
        
    
    
}
choixLettre ();

}

*/

//Demande mot a deviner:
let motADeviner = prompt("Entrez le mot a deviner :").toLowerCase();


let lettresTrouvees = Array(motADeviner.length).fill("_");
let lettresDevinees = [];
let erreurs = 0;
const erreursMax = 10;

function afficherErreur() {
    console.log("Lettre incorrecte !");
}

//Boucle principal:


While = (lettresTrouvees.includes("_") && (erreurs < erreursMax));  {
    
    const proposition = prompt("Devine une lettre:").toLowerCase();

    /*if (!proposition || proposition.length !== 1 || lettresDevinees.includes(proposition)); {
        alert("Lettre invalide ou deja proposée!");
        
    }*/

    lettresDevinees.push(proposition);

    if (motADeviner.includes(proposition)){


    for (let i = 0; i < motADeviner.length; i++) {
    if (motADeviner[i] === proposition);

console.log("Bien joué!" + lettresTrouvees.join(" "));
}}
    else {
    erreurs++;
    afficherErreur();
    console.log("erreur${erreurs}/$ {erreursMax}");
}
}

//Fin de partie
if (!lettresTrouvees.includes("_")) {
    alert("Felicitations, tu as deviné le mot : " + motADeviner);
}
else {
    alert("Dommage! le mot etait: " + motADeviner);
}
