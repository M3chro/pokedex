import Pokemon from "./Pokemon";

interface Props {
    pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
    return (
        <>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
    );
};

export default PokemonCard;
