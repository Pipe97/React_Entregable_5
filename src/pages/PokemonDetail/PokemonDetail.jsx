import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { pokemonId } = useParams();

  return (
    <div>
      <h1>Detalle del Pokemon</h1>
      <p>
        <mark>{pokemonId}</mark>
      </p>
    </div>
  );
};

export default PokemonDetail;
