    
    
    let i = 0;
    let x = 1;

    while (i < 50) {
    fetch('https://rickandmortyapi.com/api/character/' + x)
    .then((response) => response.json())
    .then(data => {
        const img = document.createElement('img');
        img.src = data.image;
        img.alt = data.name;
        img.style.width = '300px';
        img.style.height = '300px';
        document.body.appendChild(img) 
        document.body.appendChild(document.createElement('br')) 
        document.body.appendChild(document.createTextNode(data.name));
    })
    .catch(error => console.error('Error fetching data:', error));
    x++;
    i++;
}

 

   