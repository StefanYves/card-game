import { useState } from "react";
import "./App.css";
import PokeCard from "./components/PokeCard";
import PokeData from "./components/PokeData";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  return (
    <div>
      <PokeData setPokemonData={setPokemonData} />
      <PokeCard pokemonData={pokemonData} setPokemonData={setPokemonData} />
    </div>
  );
}

export default App;
