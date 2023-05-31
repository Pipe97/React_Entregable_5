import { axiosInstances } from "../api/axiosInstance";

export const getPokemonByTypeId = async (typeId) => {
  try {
    const res = await axiosInstances.get(`type/${typeId}/`);

    return res.data.pokemon.map((pokemonData) => pokemonData.pokemon);
  } catch (error) {
    console.error(error);
  }
};
