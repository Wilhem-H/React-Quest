import { useState } from 'react'
import { useEffect } from 'react'
import PropTypes  from "prop-types"
import './App.css'


import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'

function App() {

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    useEffect(
      () =>  {
        window.alert("Hello pokemon trainer :)")
        console.log (pokemonIndex)
      }, 
      []
   );
  
    function pikachu(){
      if (pokemonIndex === 3) {
        window.alert('pika pikachu !!!');
    }
   } 

    PokemonCard.propTypes = {
      pokemon : PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
      }).isRequired,
    } 
    
  const [pokemonIndex, setPokemonIndex] = useState (0);

  const selectPokemon = (index) => { setPokemonIndex(index)}
  
  return (
    <div>
      <h1>Pokedex</h1>
      <PokemonCard pokemon = {pokemonList[pokemonIndex]} pikachu = {pikachu} />
      <NavBar onSelect={selectPokemon} pokemonList={pokemonList}/>
    </div>
  )
}


export default App