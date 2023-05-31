import axios from "axios";

export const axiosInstances = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
