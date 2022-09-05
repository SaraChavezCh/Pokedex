import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 600) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
      .then((res) => {
        setPokemon(res.data);
      });
  }, []);

  const changePokemon = () => {
    const randomNumber = Math.floor(Math.random() * 600) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
      .then((res) => {
        setPokemon(res.data);
      });
  };

  // cambio de unidades en botones
  const [isDecimeters, setIsDecimeters] = useState("true");
  const [isHectograms, setIsHectograms] = useState("true");

  // Pokemon aleatorio

  console.log(pokemon);

  return (
    <div className="App">
      <div className="pokemon-box">
        <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
      </div>
    
      <button
        className="change-units"
        onClick={() => setIsDecimeters(!isDecimeters)}
      >
        Change to {isDecimeters ? "metros" : "decimetros"}
      </button>

      <button
        className="change-units second"
        onClick={() => setIsHectograms(!isHectograms)}
      >
        Change to {isHectograms ? "kilogramos" : "hectogramos"}{" "}
      </button>

      <button className="change-pokemon" onClick={changePokemon}>
        Change Pokemon
      </button>
      
      <div className="info">
        <h1>{pokemon.name}</h1>
        <p>
          Weight: {isHectograms ? pokemon.weight : pokemon.weight / 10}
          {isHectograms ? " hectograms" : " Kilogramos"}
        </p>
        <p>
          Height: {""}
          {isDecimeters ? pokemon.height : pokemon.height / 10}
          {isDecimeters ? " decimetros" : " metros"}
        </p>
        <p>type: {pokemon.types?.[0].type.name}</p>
      </div>
    </div>
  );
}

export default App;
