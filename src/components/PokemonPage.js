import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";

function PokemonPage(props) {

  const {allPokemon} = props

  const displayPokemon = allPokemon.map(pokemon=> <PokemonCard key={pokemon.id} pokemon={pokemon}/>)


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection />
      {displayPokemon}
    </Container>
  );
}

export default PokemonPage;
