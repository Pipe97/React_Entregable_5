import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Pokedex from "./Pages/Pokedex";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import PokedexName from "./Pages/PokedexName";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:name" element={<PokedexName/>}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
