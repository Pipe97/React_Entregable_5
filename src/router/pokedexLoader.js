import { getAllPokemons } from "../services/getAllPokemons";
import { getPokemonByTypeId } from "../services/getPokemonsByTypeId";

export const pokedexLoader = async ({ request }) => {
  const url = new URL(request.url);
  const pokemonName = url.searchParams.get("pokemonName") ?? "";
  const pokemonTypeId = url.searchParams.get("pokemonType") ?? "";

  let pokemons;

  if (pokemonName && pokemonTypeId) {
    // Filtros cruzados : se envía tanto nombre como tipo.
    pokemons = await getPokemonByTypeId(pokemonTypeId);
    pokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  } else if (!pokemonName && !pokemonTypeId) {
    // Ningún filtro = obtener todos los pokemons
    pokemons = await getAllPokemons();
  } else if (pokemonName) {
    // Solo nombre = buscar los pokemons que sus nombres contenga ese valor
    pokemons = await getAllPokemons();
    pokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  } else if (pokemonTypeId) {
    // solo tipo = buscar los pokemons que pertenezcan a ese tipo
    pokemons = await getPokemonByTypeId(pokemonTypeId);
  }

  return { pokemons, pokemonName, pokemonTypeId };
};
