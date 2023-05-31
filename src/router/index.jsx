import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import ProtectedRoute from "../components/common/ProtectedRoute";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import { pokedexLoader } from "./pokedexLoader";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";

// El router de tipo "Browser" siempre necesita que se configure correctamente la plataforma de despliegue (Netlify, Vercel, Servidor).

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  //   {
  //     path: "/pokedex",
  //     element: <p>Aquí se listan los pokemones</p>,
  //   },
  //   {
  //     path: "/pokedex/:pokemonId",
  //     element: <p>Más detalles del polkemon con la id = pokemonId</p>,
  //   },
  {
    path: "/pokedex",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Pokedex />,
        loader: pokedexLoader
      },
      {
        path: ":pokemonId",
        element: <PokemonDetail/>
      },
    ],
  },
]);
