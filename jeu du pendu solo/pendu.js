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

//Demander une lettre:

function demanderLettre () {
let lettreAJouer = prompt ("Choississez une lettre:");

}
let lettreAJouer = demanderLettre();

//Comparer la lettre au mot du tableau:
