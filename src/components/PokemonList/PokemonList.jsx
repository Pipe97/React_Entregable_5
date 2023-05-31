import { useState } from "react";
import { usePagination } from "../../hooks/Usepagination";
import PagesComponent from "../PagesComponent/PagesComponent";
import PokemonCard from "../Pokedex/PokemonCard/PokemonCard";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemons }) => {
  const [pokemonsPerPage, setPokemonsPerPage] = useState(15);
  const [currentPage, totalPages, pokemonsSlice, changePage] = usePagination(
    pokemons,
    pokemonsPerPage
  );
  return (
    <section>
      <PagesComponent
        totalPages={totalPages}
        onChangePage={changePage}
        onNextPage={() => changePage(currentPage + 1)}
        onBackPage={() => changePage(currentPage - 1)}
      />

      <ul>
        {pokemonsSlice.map((pokemon) => (
          <li key={pokemon.url}>
            <Link to={`/pokedex/${pokemon.url.split("/").at(-2)}`}>
              <PokemonCard pokemonId={pokemon.url.split("/").at(-2)} />
            </Link>
          </li>
        ))}
      </ul>

      <PagesComponent
        totalPages={totalPages}
        onChangePage={changePage}
        onNextPage={() => ch(currentPage + 1)}
        onBackPage={() => ch(currentPage - 1)}
      />
    </section>
  );
};

export default PokemonList;
