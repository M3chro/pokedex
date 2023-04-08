import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import Pokemon from "./Pokemon";
import Header from "./Header";
import { BeatLoader } from "react-spinners";

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
        if (!value) {
            setSearchTerm("");
            return;
        }

        try {
            const searchId = parseInt(value);

            if (isNaN(searchId)) {
                setSearchTerm(value.toLowerCase());
            } else {
                setSearchTerm(searchId.toString());
            }
        } catch (error) {
            console.error(error);
            setSearchTerm("");
        }
    };

    return (
        <>
            <Header onSearch={handleSearch} />
            <section id="pokemon-info" className="container">
                {loading && (
                    <div className="d-flex justify-content-center my-5">
                        <BeatLoader color="#f44336" size={20} />
                    </div>
                )}
                {error && (
                    <div className="d-flex justify-content-center align-items-center">
                        <p className="text-danger text-center">
                            Something went wrong.
                        </p>
                    </div>
                )}
                {pokemon && <PokemonCard pokemon={pokemon} />}
            </section>
        </>
    );
};

export default Pokedex;
