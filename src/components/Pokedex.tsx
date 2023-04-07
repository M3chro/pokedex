import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import Pokemon from "./Pokemon";
import PokedexSearchbar from "./PokemonSearchbar";

const Pokedex = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [searchTerm, setSearchTerm] = useState("");

  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;

  useEffect(() => {
    if (!searchTerm) return;

    setLoading(true);
    setError(false);

    axios
      .get(url)
      .then((response) => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [searchTerm]);

  const handleSearch = (value: string) => {
    setSearchTerm(value.toLowerCase());
  };

  return (
    <>
      <PokedexSearchbar onSearch={handleSearch} />
      {loading && !pokemon && <p>Loading...</p>}
      {error && <p>Something went wrong. Please try again later.</p>}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </>
  );
};

export default Pokedex;
