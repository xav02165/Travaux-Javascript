// // fetch('https://rickandmortyapi.com/api/character')
// // .then((response) => response.json()) 
// // .then(data => {
// //     console.log(data);
// // }) 

const body = document.querySelector('body');
// let x = 1;



fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
        console.log(data.info.pages);



        for (let i = 1; i < data.info.pages; i++) {
            fetch(`https://rickandmortyapi.com/api/character?page=${i}`)

                .then((response) => response.json())
                .then((data) => {

                    data.results.forEach((personnage) => {
                        console.log(personnage);

                        let div = document.createElement('div');
                        body.appendChild(div);

                        let img = document.createElement('img');
                        img.src = personnage.image;
                        img.style.width = '300px';
                        img.style.height = '300px';
                        div.appendChild(img)

                        let p = document.createElement('p');
                        p.textContent = personnage.name;
                        div.appendChild(p);
                    });

                });

        }

    })

