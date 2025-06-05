/*let = 5;
let = 7;
let addition = 5+7;
console.log(addition);*/


/*let age1=4;
let age2=6;
let age3=(age1*age2)


let prenom="john"
let nom=" Doe"
let nomComplet= prenom+nom
console.log(nomComplet)

let sujet="le chat"
let verbe=" mange"
let objet=" la souris"
let phrase=sujet+verbe+objet
console.log(phrase)

let b="bonjour"
let a="alice"
function saluer(b, a){
return  b + a ;
}
let resultat =b + a 
console.log(resultat);


let c=7;
let d=8;
function multiplication(c, d){
return c * d;
}
let resulta = multiplication(c, d);
console.log(resulta);

let tab = [1, 2, 3, 4, 5];
tab [0][0]
tab [0][1]
tab [0][2]
tab [0][3]
tab [0][4]

let tabl= [];
tabl.push ("10","20","30");
console.log(tabl);


let tabl= [];
tabl.push ("10","20","30");
tabl.shift ("10");
console.log(tabl);

let personne = {
	nom: 'alice',
	age: 25,
	ville: 'Paris' 
	};
    console.log(personne);

    let compte = {
        solde: 1000,
        titulaire: 'john doe',
    };
    compte.solde.push (+500);
    console.log(compte);

    let data = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
        "batter":
            [
                { "id": "1001", "type": "Rick" },
                { "id": "1002", "type": "Chocolate" },
                { "id": "1003", "type": "Blueberry" },
                { "id": "1004", "type": "Devil's Food" }
            ]
    },
    "topping":
        [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Morty" },
            { "id": "5007", "type": "helloWorld" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
}

console.log(data.name);
console.log(data.ppu);
console.log(data["topping"]);
console.log(data.batters.batter[3].type);
console.log(data.topping[6].type);
console.log(data.topping[0].id);

let chemin1=(data.batters.batter[0].id);
let nom=(data.batters.batter[0].type);
let phrase=nom+ " est l'id "+chemin1;
console.log(phrase);

let a1=(data.topping[6].type);
let phrase2= "cake au "+a1;
console.log(phrase2);

let personne = {
	nom: 'alice',
	age: 25,
	ville: 'Paris' 
	};
    console.log(personne);

    let compte = {
        solde: 1000,
        titulaire: 'john doe',
    };
    compte.solde+=500;
    console.log(compte);


let drink = {
    "id": "2001",
    "type": "smoothie",
    "name": "Tropical Bliss",
    "ppu": 3.75,
    "ingredients": {
        "fruits": [
            { "id": "3001", "type": "Mango" },
            { "id": "3002", "type": "Pineapple" },
            { "id": "3003", "type": "Banana" },
            { "id": "3004", "type": "Coconut" }
        ]
    },
    "toppings": [
        { "id": "6001", "type": "Chia Seeds" },
        { "id": "6002", "type": "Granola" },
        { "id": "6003", "type": "Honey" },
        { "id": "6004", "type": "Mint Leaves" },
        { "id": "6005", "type": "Boba" }
    ]
}
console.log(drink.name);
console.log(drink.ppu);
console.log(drink["toppings"]);
console.log(drink.ingredients.fruits[3].type);
console.log(drink.toppings[4].type);
console.log(drink.toppings[2].id);

let ingredients1=(drink.ingredients.fruits[2].type);
let ing2=(drink.ingredients.fruits[0].type);
let ing3=(drink.toppings[0].type);
let recette= ingredients1+ " plus un peu de "+ing2+ " et beaucoup de "+ ing3;
console.log(recette)*/

/*exercice1*/

/*function controle(age) {
    if(age >= 18) 
        return "Majeur";
     else(age < 18) 
        return "Mineur";
    }
       
    
    console.log(controle(10)); 
    console.log(controle(18));
    console.log(controle(25));

    ou 

    if (age>=18){
        console.log(majeur)
    }
    else (age<18) {
        console.log(mineur)
    }


/*exercice2: affichage nombre pair de 1 a 20:

for (let a=0; a<=20; a+=2 ){
console.log(a);
}

variante perso de 5 en 5 jusqu'a 50 
for (let a=0; a=50; a+=5){
    console.log(a);
}
*/
/*for (let index=2; index <= 20; index=index + 2){
    console.log(index);
}*/

/*for (let i = 1; i <= 20 ; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
}*/

/*let data = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
        "batter":
            [
                { "id": "1001", "type": "Rick" },
                { "id": "1002", "type": "Chocolate" },
                { "id": "1003", "type": "Blueberry" },
                { "id": "1004", "type": "Devil's Food" }
            ]
    },
    "topping":
        [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Morty" },
            { "id": "5007", "type": "helloWorld" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
}*/
//console.log(data.name);
//console.log(data.ppu);
//console.log(data["topping"]);
//console.log(data.batters.batter[3].type);
//console.log(data.topping[6].type);
//console.log(data.topping[0].id);

//let chemin1=(data.batters.batter[0].id);
//let nom=(data.batters.batter[0].type);
//let phrase=nom+ " est l'id "+chemin1;
//console.log(phrase);

//let a1=(data.topping[6].type);
//let phrase2= "cake au "+a1;
//console.log(phrase2);

let jour = 5;
let nomDuJour;

switch (jour) {
    case 1:
        nomDuJour = "Lundi";
        break;
    case 2:
        nomDuJour = "Mardi";
        break;
    case 3:
        nomDuJour = "Mercredi";
        break;
    case 4:
        nomDuJour = "Jeudi";
        break;
    case 5:
        nomDuJour = "Vendredi";
        break;
    case 6:
        nomDuJour = "Samedi";
        break;
    case 7:
        nomDuJour = "Dimanche";
        break;
    default:
        nomDuJour = "Jour invalide";
}

console.log("Aujourd'hui, c'est " + nomDuJour + ".");