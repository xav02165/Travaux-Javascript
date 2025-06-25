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
//Form Data
const form = document.querySelector("#fileinfo");

form.addEventListener("submit", async (event) => {
  const formData = new FormData(form);

  formData.append("CustomField", "This is some extra data");

  const response = await fetch("stash.php", {
    method: "POST",
    body: formData,
  });
  event.preventDefault();
});

