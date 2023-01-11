import { POKEMON_TYPE_COLORS } from "../navigation/PokedexNavigation";

const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;
