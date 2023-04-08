import { useState } from "react";

interface Props {
    onSearch: (searchTerm: string) => void;
}

const PokedexSearchbar = ({ onSearch }: Props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        if (!value || /^[a-zA-Z0-9-]+$/.test(value)) {
            setSearchTerm(value);
        }
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form className="p-4 text-center" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="e.g. Pikachu, 15, Onix, 551, ..."
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
            <button className="m-2 btn btn-warning" type="submit">
                Search
            </button>
        </form>
    );
};

export default PokedexSearchbar;
export type { Props };
