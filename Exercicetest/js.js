/*const formulaire = document.querySelector('form');
const btnSubmit = document.querySelector('button');



btnSubmit.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    })*/

const Form = document.getElementById('mockform');
Form.addEventListener('submit', function(e) {
    e.preventDefault();


    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    

  fetch('https://685a52c59f6ef9611155e0fe.mockapi.io/demo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prenom: firstName,
      nom: lastName
    })
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
  })
});