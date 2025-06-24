/*const formulaire = document.querySelector('form');
const btnSubmit = document.querySelector('button');



btnSubmit.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    })*/

const Form = document.getElementById('mockform');

Form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lastname');
    console.log(firstName.value);
    console.log(lastName.value);

    fetch('https://685a97779f6ef9611157086a.mockapi.io/api/v1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prenom: firstName.value,
            nom: lastName.value,
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
        })
});

