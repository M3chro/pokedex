import PokedexSearchbar, { Props } from "./PokemonSearchbar";

function Header({ onSearch }: Props) {
    return (
        <header>
            <h1 className="text-center pokemon-font">Pokédex</h1>
            <PokedexSearchbar onSearch={onSearch} />
        </header>
    );
}

export default Header;
