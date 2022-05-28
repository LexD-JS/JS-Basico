/*Un cliclo for se itera por cada elemento que se este recorriendo hasta que se cumpla una condición especifica.*/

const pokemonList=['Pikachu','Charmander','Squirtle','Bulbasaur'];


function pokedex (pokemon){
    console.log(`Ese pokemon es un: ${pokemon}`);
}

// for(let i=0;i<pokemonList.length;i++){
//     pokedex(pokemonList[i])
// }

/*Aquí podemos ver que tenemos un array donde tenemos algunos pokemones, pero queremos
imprimirlos en pantalla sin usar un console.log para cada uno, ya que sería medio tedioso hacer eso.
Así que lo que hacemos es escribir una función que simplemente me imprima el nombre del pokemon.
Y tenemos tambien un coclo for, que recorre cada elemento del array hasta finalizarlo y por cada
elemento realizará una llamada a nuestra función y le pasara el nombre del elemento que esta recorriendo
en ese momento, así podemos obtener cada nombre por separado.*/




for (let pokemon of pokemonList) {
    pokedex(pokemon)
}