// nombre de 1 a 100

let nombre = 7;
const nombreChoisi = prompt ("choisir un nombre entre 1 et 100:");

if (nombreChoisi < nombre ) {
    console.log("trop bas!");
}
if (nombreChoisi > nombre ) {
    console.log("trop haut");
}
if (nombreChoisi == nombre ) {
    console.log("bravo, c'est trouvé");
}
while ( nombreChoisi != nombre){
        prompt("choisir un nombre entre 1 et 100:");


}
