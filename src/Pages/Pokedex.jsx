import React, { useRef, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import PokeContainer from "../components/PokeContainer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../css/pokedex.css";
import Loading from "../components/Loading";

const Pokedex = () => {
  const [selectValue, setselectValue] = useState("all-pokemons");

  const trainerName = useSelector((state) => state.trainerName);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const [pokemons, getAllPokemons, hasError, setPokemons] = useFetch(url);

  const urlTypes = "https://pokeapi.co/api/v2/type";
  const [types, getAllTypes] = useFetch(urlTypes);

  const firstLetterCapitalized = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  useEffect(() => {
    if (selectValue === "all-pokemons") {
      getAllPokemons();
    } else {
      axios
        .get(selectValue)
        .then((resp) => {
          const data = {
            results: resp.data.pokemon.map((pokeInfo) => pokeInfo.pokemon),
          };
          setPokemons(data);
        })
        .catch((error) => console.error(error));
    }
  }, [selectValue]);

  useEffect(() => {
    getAllTypes();
  }, []);
  // console.log(pokemons);

  const searchPokemon = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault;
    const inputValue = searchPokemon.current.value.trim().toLowerCase();
    navigate(`/pokedex/${inputValue}`);
  };

  const handleChangeType = (e) => {
    setselectValue(e.target.value);
  };

  return (
    <div className="pokedex__container">
      <div className="poke__header">
        <div className="poke__level-1">
          <div className="poke__content-logo-L1">
            <img src="/public/logo-pokedex.png" alt="" className="poke__logo" />
          </div>
        </div>
        <div className="poke__level-2">
          <div className="poke__content-logo-L2">
            <Link to={"/"}>
              <i className="bx bx-x poke__exit"></i>
            </Link>
            <img
              src="/pokedex-icon2.png"
              alt=""
              className="poke__icon-2"
            />
          </div>
        </div>
      </div>

      <div className="poke__cards-header">
        <p className="poke__welcome">
          Bienvenido{" "}
          <span className="poke__trainer-name">
            {firstLetterCapitalized(trainerName)}
          </span>
          , aquí puedes encontrar a tu pokemon favorito{" "}
        </p>
        <form className="poke__form-content" onSubmit={handleSubmit}>
          <div className="poke__head-search">
            <div className="poke__search-content">
              <input className="poke__input" ref={searchPokemon} type="text" />
              <button className="poke__btn">Buscar</button>
            </div>
            <div className="select__content">
              <select className="poke__select" onChange={handleChangeType}>
                <option value="all-pokemons">All Pokemons</option>
                {types?.results.map((typeInfo) => (
                  <option key={typeInfo.url} value={typeInfo.url}>
                    {typeInfo.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
        <PokeContainer pokemons={pokemons?.results} />
      </div>
    </div>
  );
};

export default Pokedex;
