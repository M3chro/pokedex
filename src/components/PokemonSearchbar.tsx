import { useState } from "react";

interface Props {
    onSearch: (searchTerm: string) => void;
}

const PokedexSearchbar = ({ onSearch }: Props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default PokedexSearchbar;