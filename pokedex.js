//traer la API
const baseUrl = "https://pokeapi.co/api/v2/pokemon";

//conectar al server
window
  .fetch(baseUrl)
  //procesar la respuesta y convertiral en JSON

  .then((respuesta) => respuesta.json())
  //Json -> data -> renderizar info
  .then((responseJson) => {
      
      responseJson.results.forEach((item) => {
          

      //coger el id del pokemon
      const nombreDelPokemon = `${item.name}`;
      const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${nombreDelPokemon}`;
      window
        .fetch(urlPokemon)
        .then((resp) => resp.json())
        .then((data) => {
          const idDelPokemon = data.id;

          const cardsContainer = document.querySelector('.cards-container')

const pokebox = document.createElement('div')
pokebox.classList.add('Pokebox')

const pokeboxSup = document.createElement('div')
pokeboxSup.classList.add('Pokebox-sup')

const pokeboxSup1A = document.createElement('div')
pokeboxSup1A.classList.add('Pokebox-sup-1a')

const pokeboxSupCircle = document.createElement('div')
pokeboxSupCircle.classList.add('Pokebox-sup-circle')

//add imagen into the element
const imagen = document.createElement("img");
document.body.appendChild(imagen);
imagen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idDelPokemon}.png`;

const pokeboxSup2A = document.createElement('div')
pokeboxSup2A.classList.add('Pokebox-sup-2a')

//crear numId
const numId = document.createElement("h3");
document.body.appendChild(numId);
numId.append(`Co. ${idDelPokemon}`);
numId.className = 'font-sans text-lg'
numId.id = 'PokeId'

//crear nombre
const nombre = document.createElement("h3");
document.body.appendChild(nombre);
nombre.append(`${item.name}`);
nombre.className = 'font-sans text-lg'
nombre.id = 'pokeNombre'

const pokeboxDown = document.createElement('div')
pokeboxDown.classList.add('Pokebox-down')

cardsContainer.append(pokebox)
pokebox.append(pokeboxSup)
pokebox.append(pokeboxDown)
pokeboxSup.append(pokeboxSup1A)
pokeboxSup.append(pokeboxSupCircle)
pokeboxSup.append(pokeboxSup2A)
pokeboxSupCircle.append(imagen)
pokeboxDown.append(numId)
pokeboxDown.append(nombre)




         



        });
    });
});
