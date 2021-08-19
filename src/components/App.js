import React, { useEffect, useState} from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [allPokemon, setAllPokemon] = useState([])
  
  useEffect(()=> {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json()
    .then(data => setAllPokemon(data)))
  }, [])

  return (
    <div className="App">
      <PokemonPage allPokemon={allPokemon}/>
    </div>
  );
}

export default App;
