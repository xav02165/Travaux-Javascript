// nombre de 1 a 100

let nombre = 7;
let tentative = 0;

while (tentative !== nombre) {
    tentative = parseInt(prompt("devinez un nombre entre 1 et 100 :"));

    console.log("ce n'est pas le bon nombre" );
}
console.log("bravo, vous avez deviné le nombre!");
