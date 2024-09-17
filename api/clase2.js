let contenedor = document.getElementById("contenedor");

fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  .then(resp => resp.json())
  .then(data => {
    data.results.forEach(pokemon => {
      let fragmento = document.getElementById('contenedor');
      let divPokemon = document.createElement('div');
      let span = document.createElement('span');
      span.textContent = `Nombre: ${pokemon.name}`;
      divPokemon.appendChild(span);
      fragmento.appendChild(divPokemon);
    })
  })


