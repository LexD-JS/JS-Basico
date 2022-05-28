const pokemonList=['Pikachu','Charmander','Squirtle','Bulbasaur'];


function pokedex (pokemon){
    console.log(`Ese pokemon es un: ${pokemon}`);
}

while(pokemonList.length > 0){
    let pokemon=pokemonList.shift();
    pokedex(pokemon);
}