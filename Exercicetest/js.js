/*const formulaire = document.querySelector('form');
const btnSubmit = document.querySelector('button');



btnSubmit.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    })*/

/*const Form = document.getElementById('mockform');

Form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lastname');
    const age = document.getElementById('age');
    console.log(firstName.value);
    console.log(lastName.value);

    fetch('https://685a97779f6ef9611157086a.mockapi.io/api/v1/Formulaire', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prenom: firstName.value,
            nom: lastName.value,
            age: age.value,

        })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
        })
});

<form id="mockform">
    <label for="username">Nom :</label>
    <input type ="texte" id="firstname"  placeholder="Prénom"  />
    <input type="text" id="lastname"  placeholder="Nom de famille" />
    <input type ="number" id="age" />

    <button id="submitButton">Envoyer</button>  
  </form> 







*/
/*//Form Data
const inputPrenom = document.querySelector('.inputPrenom')
const inputNom = document.querySelector('.inputNom')
let form = document.querySelector('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let data = new FormData(form)

    console.log(data.get("inputNom"));
    console.log(data.get("inputPrenom"));
    
})

fetch('https://685a97779f6ef9611157086a.mockapi.io/api/v1/Formulaire', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
            prenom: inputPrenom.value,
            nom: inputNom.value,
            

        })
    
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
        })*/

   // Constante    

   

const passwordLength = document.getElementById('password-length');
const displayPasswordLength = document.getElementById('display-password-length');
displayPasswordLength.textContent = passwordLength.value;

passwordLength.addEventListener('input',() => {
    displayPasswordLength.textContent = passwordLength.value 
});
    

const lowerCaseCheckbox = document.getElementById('lowercase');
const upperCaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

const generateButton = document.getElementById('generateButton');


 // fonction de generattion de mot de passe
        
function generateurDePassword() {
    const length = parseInt(passwordLength.value);
    const lowerCase = lowerCaseCheckbox.checked;
    const upperCase = upperCaseCheckbox.checked;
    const numbers = numbersCheckbox.checked;
    const symbols = symbolsCheckbox.checked;

    let characters = '';
    if (lowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (upperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) characters += '0123456789';
    if (symbols) characters += '!@#$%^&*()_+[]{}|;:,.<>?';

   
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); // ?
        password += characters[randomIndex];  // ?
    }
    
    console.log (`${password}`)
    return password;
};

generateButton.addEventListener('click',generateurDePassword  ) ;
   
