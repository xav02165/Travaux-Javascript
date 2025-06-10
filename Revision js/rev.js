// nombre de 1 a 100

/*let nombre = 7;
let tentative = 0;

while (tentative !== nombre) {
    tentative = parseInt(prompt("devinez un nombre entre 1 et 100 :"));

    console.log("ce n'est pas le bon nombre" );
}
console.log("bravo, vous avez deviné le nombre!");*/


//calendrier

/*function infoMois(Nombrejours) {
    const mois = [
        { nom: "janvier", jour: 31 },
        { nom: "fevrier", jour: 28 },
        { nom: "mars", jour: 31 },
        { nom: "avril", jour: 30},
        { nom: "mai", jour: 31 },
        { nom: "juin", jour: 30 },
        { nom: "juillet", jour: 31 },
        { nom: "aout", jour: 31 },
        { nom: "septembre", jour: 30 },
        { nom: "octobre", jour: 31 },
        { nom: "novembre", jour: 30 },
        { nom: "decembre", jour: 31},
    ];
}*/

/*let compteur = 1 ;
let sommeTotal = 0;

while (compteur<=100) {
    sommeTotal = compteur + sommeTotal++;
    compteur++
    
}

  console.log(sommeTotal);*/

   //nombre de 1 a 10

/*let nombre = 7;
let tentative = 0;

while (tentative !== nombre) {
    tentative = parseInt(prompt("devinez un nombre entre 1 et 10 :"));

    console.log("ce n'est pas le bon nombre" );
}
console.log("bravo, vous avez deviné le nombre!");*/

//OUI OU NON

/*let lundi = 1;
let mardi = 2 ;
let mercredi = 3 ;
let jeudi = 4 ;
let vendredi = 5 ;

switch (lundi) {
    case 1 : 
    console.log ("spaghetti bologanaise");
    break;
    case 2 : 
    console.log ("poulet roti");
    break;
    case 3 : 
    console.log ("poisson pané");
    break;
    case 4 : 
    console.log ("salade composée");
    break;
    case 5 : 
    console.log ("pizza margherita");
    break;
    default:
    console.log("non applicable");
    break;
}*/

 let mois = parseInt (prompt ("quel est le numero du mois?")) ;


switch (mois) {
    
    case 1:
        console.log("janvier a 31 jours");
        break;
    case 2 : 
    jours = (prompt ( "quel est le nombre de jours dans l'année")) ;
        if ( jours % 2 === 0) {
        console.log("Fevrier a 29 jours");
    }
        if (jours % 2 != 0) { 
        console.log("Fevrier a 28 jours");
    }
        break;
    case 3:
        console.log("Mars a 31 jours");
        break;
    case 4:
        console.log("Avril a 30 jours");
        break;
    case 5:
        console.log("Mai a 31 jours");
        break;
    case 6:
        console.log("juin a 30 jours");
        break;
    case 7:
        console.log("juillet a 31 jours");
        break;
    case 8:
        console.log("aout a 31 jours");
        break;
    case 9:
        console.log("septembre a 30 jours");
        break;
    case 10:
        console.log("octobre a 31 jours");
        break;
    case 11:
        console.log("novembre a 30 jours");
        break;
    case 12:
        console.log("decembre a 31 jours");
        break;

    default:
        break;
}