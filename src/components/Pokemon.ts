type Pokemon = {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: {
      front_default: string;
      back_default: string;
    };
    types: Array<{ type: { name: string } }>;
    stats: Array<{ base_stat: number; stat: { name: string } }>;
    abilities: Array<{ ability: { name: string, url: string } }>;
    moves: Array<{ move: { name: string } }>;
};

export default Pokemon;
