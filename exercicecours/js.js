    
    
    let i = 0;
    let x = 1;

    while (i < 50) {
    fetch('https://rickandmortyapi.com/api/character/' + x)
    .then((response) => response.json())
    .then(data => {
        const img = document.createElement('img');
        img.src = data.image;
        img.alt = data.name;
        img.style.width = '200px';
        img.style.height = '200px';
        img.style.borderColor = ' 1 px solid black; margin: 10px;';
        document.body.appendChild(img);
        document.body.appendChild(document.createTextNode(data.name));
    })
    .catch(error => console.error('Error fetching data:', error));
    x++;
    i++;
}

 

   