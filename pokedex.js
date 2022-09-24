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
      // console.log(responseJson)

      //coger el id del pokemon
      const nombreDelPokemon = `${item.name}`;
      console.log;
      const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${nombreDelPokemon}`;
      window
        .fetch(urlPokemon)
        .then((resp) => resp.json())
        .then((data) => {
          const idDelPokemon = data.id;

          //crear imagen
          const imagen = document.createElement("img");
          document.body.appendChild(imagen);
          imagen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idDelPokemon}.png`;
          console.log(idDelPokemon);

          //crear id
          const numId = document.createElement("h3");
          document.body.appendChild(numId);
          numId.append(`Co. ${idDelPokemon}`);

          //crear nombre
          const nombre = document.createElement("h3");
          document.body.appendChild(nombre);
          nombre.append(`${item.name}`);


        });
    });
  });
