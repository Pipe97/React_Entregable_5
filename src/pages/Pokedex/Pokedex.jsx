import { useContext } from "react";
import { UserNameContext } from "../../context/UserNameContext";

import PokemonList from "../../components/PokemonList/PokemonList";

import "./Pokedex.css";
import { useLoaderData } from "react-router-dom";
import FiltersForm from "../../components/Pokedex/FiltersForm/FiltersForm";

const Pokedex = () => {
  const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();
  const { userName } = useContext(UserNameContext);

  return (
    <section>
      <p className="pokedex__message">
        <em className="pokedex__message__username">
          Bienvenido {userName},&nbsp;{" "}
        </em>{" "}
        aquí podrás encontrar tu pokemon favorito
      </p>

      <FiltersForm nameInitial={pokemonName} typeInitial={pokemonTypeId} />

      {!pokemons.length ? (
        <p>No hay pokemones</p>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </section>
  );
};

export default Pokedex;
