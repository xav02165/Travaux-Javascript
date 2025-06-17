/*
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

  


if (erreursMax < 10 ) {

    if (v1 = true) {
        ens1.style.backgroundColor = "black";
        v1 = false;
        verification();
          
    }
    if  (v2 = true && v1 === false) {
        ens2.style.backgroundColor = "black";
        v2 = false ;
        verification();
        
    }
     if  (v3 = true && v1 === false && v2 === false) {
        ens3.style.backgroundColor = "black";
        v3 = false ;
         verification();
        
    }
     if  (v4 = true && v3 === false && v2 === false && v1 === false) {
        ens4.style.backgroundColor = "black";
        v4 = false ;
         verification();
        
    }
     if  (v5 = true && v4 === false && v3 === false && v2 === false && v1 === false ) {
        ens5.style.backgroundColor = "black";
        v5 = false ;
         verification();
        
    }
     if  (v6 = true && v5 === false && v4 === false && v3 === false && v2 === false && v1 === false ) {
        ens6.style.backgroundColor = "black";
        v6 = false ;
         verification();
        
    }
     if  (v7 = true && v6 === false && v5 === false && v4 === false && v3 === false && v2 === false && v1 === false ) {
        ens7.style.backgroundColor = "black";
        v7 = false ;
         verification();
        
        
    }
     if  (v8 = true && v7 === false && v6 === false && v5 === false && v4 === false && v3 === false && v2 === false && v1 === false) {
        ens8.style.backgroundColor = "black";
        v8 = false ;
         verification();
        
    }
    if  (v9 = true && v8 === false && v7 === false && v6 === false && v5 === false && v4 === false && v3 === false && v2 === false && v1 === false) {
        ens9.style.backgroundColor = "black";
        v9 = false ;
         verification();
        
        
    }
     if  (v10 = true && v9 === false && v8 === false && v7 === false && v6 === false && v5 === false && v4 === false && v3 === false && v2 === false && v1 === false) {
        ens10.style.backgroundColor = "black";
        v10 = false ;

        
        
        
  
    
}
}
}
*/

// Mot à deviner
const motADeviner = prompt("Entrez un mot pour le jeu du pendu :");
let lettresTrouvees = Array(motADeviner.length).fill("_");
let essaisRestants = 10;

// Affichage initial
const affichageMot = document.getElementById("mot");
const affichageEssais = document.getElementById("essais");
affichageMot.textContent = lettresTrouvees.join(" ");
affichageEssais.textContent = `Essais restants : ${essaisRestants}`;

// Fonction pour gérer le choix d'une lettre
function verifierLettre(event) {
  const lettre = event.key.toLowerCase(); 
  if (!/[a-z]/.test(lettre) || lettre.length !== 1) {
    alert("Veuillez entrer une lettre valide !");
    return;
  }

  if (motADeviner.includes(lettre)) {
    // Met à jour les lettres trouvées
    for (let i = 0; i < motADeviner.length; i++) {
      if (motADeviner[i] === lettre) {
        lettresTrouvees[i] = lettre;
      }
    }
  } else {
    essaisRestants--;
  }

  // Affichage
  affichageMot.textContent = lettresTrouvees.join(" ");
  affichageEssais.textContent = `Essais restants : ${essaisRestants}`;

  // Vérifie les conditions de victoire ou de défaite
  if (!lettresTrouvees.includes("_")) {
    alert("Félicitations, vous avez gagné !");
    document.removeEventListener("keydown", verifierLettre);
  } else if (essaisRestants <= 0) {
    alert(`Vous avez perdu ! Le mot était : ${motADeviner}`);
    document.removeEventListener("keydown", verifierLettre);
  }
}

// addeventListener
document.addEventListener("keydown", verifierLettre);
