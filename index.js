let api = 'https://rickandmortyapi.com/api/character';

fetch(api)
    .then(response => response.json())
    .then(data => {
        let contenedor = document.getElementById('contenedor');

        data.results.forEach(character => {
            let characterDiv = document.createElement('li');
            characterDiv.className = 'character';
             
            
            let characterImage = document.createElement('img');
            characterImage.className = 'image'
            characterImage.src = character.image;
            characterImage.alt = character.name;

           
          

            characterDiv.appendChild(characterImage);
           
            contenedor.appendChild(characterDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching the data:', error);
    });