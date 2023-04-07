import { Chart, registerables } from "chart.js";
import { Radar } from "react-chartjs-2";
import Pokemon from "./Pokemon";
import { useState } from "react";
import ReactPaginate from "react-paginate";

type Props = {
    pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
    Chart.register(...registerables);

    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE = 10;

    const statsData = {
        labels: pokemon.stats?.map((stat) => stat.stat.name) || [],
        datasets: [
            {
                label: "Stats",
                data: pokemon.stats?.map((stat) => stat.base_stat) || [],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="card mb-4 shadow-sm text-center">
            <div className="card-header d-flex align-items-center justify-content-center">
                {pokemon.sprites && (
                    <img
                        src={pokemon.sprites.front_default}
                        className="img-fluid rounded"
                        style={{ width: "200px" }}
                    />
                )}
                <h4 className="display-4 text-capitalize fw-bold text-danger">
                    {pokemon.name}
                </h4>
                <img
                    src={pokemon.sprites.back_default}
                    className="img-fluid rounded"
                    style={{ width: "200px" }}
                />
            </div>
            <div className="card-body">
                <div className="row gx-5">
                    <div className="col-12 col-lg-6">
                        <div className="row">
                            <div className="col-6">
                                {pokemon.types && (
                                    <div className="mb-3">
                                        <h5 className="fw-bold">Types:</h5>
                                        <ul className="list-inline">
                                            {pokemon.types.map((type) => (
                                                <li
                                                    key={type.type.name}
                                                    className="list-inline-item badge bg-secondary me-1"
                                                >
                                                    {type.type.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {pokemon.abilities && (
                                    <div className="mb-3">
                                        <h5 className="fw-bold">Abilities:</h5>
                                        <ul className="list-unstyled">
                                            {pokemon.abilities.map(
                                                (ability) => (
                                                    <li
                                                        key={
                                                            ability.ability.name
                                                        }
                                                    >
                                                        {ability.ability.name}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <h5 className="fw-bold">Height:</h5>
                                    <p>{pokemon.height}</p>
                                </div>
                                <div className="mb-3">
                                    <h5 className="fw-bold">Weight:</h5>
                                    <p>{pokemon.weight}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 d-block d-lg-none">
                            {pokemon.stats && (
                                <div className="d-flex justify-content-center">
                                    <Radar data={statsData} />
                                </div>
                            )}
                        </div>
                        {pokemon.moves && (
                            <div className="mb-3">
                                <h5 className="fw-bold">Moves:</h5>
                                <table className="table table-striped">
                                    <tbody>
                                        {pokemon.moves
                                            .slice(
                                                currentPage * ITEMS_PER_PAGE,
                                                (currentPage + 1) *
                                                    ITEMS_PER_PAGE
                                            )
                                            .map((move) => (
                                                <tr key={move.move.name}>
                                                    <td>{move.move.name}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                                <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    pageCount={Math.ceil(
                                        pokemon.moves.length / ITEMS_PER_PAGE
                                    )}
                                    onPageChange={({ selected }) =>
                                        setCurrentPage(selected)
                                    }
                                    containerClassName={
                                        "pagination justify-content-center"
                                    }
                                    activeClassName={"active"}
                                    pageClassName={"page-item"}
                                    pageLinkClassName={"page-link"}
                                    previousClassName={"page-item"}
                                    previousLinkClassName={"page-link"}
                                    nextClassName={"page-item"}
                                    nextLinkClassName={"page-link"}
                                    breakClassName={"page-item"}
                                    breakLinkClassName={"page-link"}
                                />
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-lg-6 d-none d-lg-block">
                        {pokemon.stats && (
                            <div className="mb-3">
                                <div className="d-flex justify-content-center">
                                    <Radar data={statsData} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
