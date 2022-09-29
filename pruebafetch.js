// var idDelPokemon =0

// const nombreDelPokemon = "charmander"
// const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${nombreDelPokemon}`

// //traer el ID

// window.fetch(urlPokemon).
// then((resp)=>resp.json())
// .then(data =>{
//     const numId = document.createElement('h3')
//     document.body.appendChild(numId)
//     numId.append(data.id)
//     console.log(data.id)

//     var idDelPokemon = data.id
//     return idDelPokemon
// })

// console.log(idDelPokemon + ' esta')


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
imagen.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'

const pokeboxSup2A = document.createElement('div')
pokeboxSup2A.classList.add('Pokebox-sup-2a')

const co = document.createElement('h3')
co.textContent = idDelPokemon 
co.className = 'font-sans text-lg'
co.id = 'PokeId'

const pokenombre = document.createElement('h3')
pokenombre.textContent = idDelPokemon 
pokenombre.className = 'font-sans text-lg'
pokenombre.id = 'pokeNombre'

const pokeboxDown = document.createElement('div')
pokeboxDown.classList.add('Pokebox-down')

cardsContainer.append(pokebox)
pokebox.append(pokeboxSup)
pokebox.append(pokeboxDown)
pokeboxSup.append(pokeboxSup1A)
pokeboxSup.append(pokeboxSupCircle)
pokeboxSup.append(pokeboxSup2A)
pokeboxSupCircle.append(imagen)





// const box = document.querySelector('.Pokebox-sup-circle');
// box.append(imagen);

