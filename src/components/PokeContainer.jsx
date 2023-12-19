import React, { useState } from "react";
import PokeCard from "./PokeCard";
import Pagination from "./Pagination";
import "../css/pokeContainer.css"

const PokeContainer = ({ pokemons }) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);

  const maximun = pokemons && pokemons.length / perPage;

  return (
    <>
      <Pagination page={page} setPage={setPage} maximun={maximun} />

      <div className="poke__container">
        {pokemons
          ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
          .map((pokemon) => (
            <PokeCard key={pokemon.url} url={pokemon?.url} />
          ))}
      </div>
    </>
  );
};


export default PokeContainer;
