import { Pokemon } from "../../global/interfaces";
import "./styles/PokemonList.scss";
interface Props {
  pokemons: Pokemon[];
  selectPokemon: (pokemon: Pokemon) => void;
  deletePokemon: (pokemon: Pokemon) => void;
}

export const PokemonList = ({
  pokemons,
  selectPokemon,
  deletePokemon,
}: Props) => {
  const handleClick = (pokemon: Pokemon) => {
    selectPokemon(pokemon);
  };
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Imagen</th>
          <th scope="col">Ataque</th>
          <th scope="col">Defensa</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map(
          ({ name, id, defense, attack, image, id_author }, index) => (
            <tr key={id}>
              <td>{name}</td>
              <td className="pokemonimage">
                <img
                  src={image}
                  alt="pokemon"
                  title="image of a pokemon"
                  width={40}
                />
              </td>
              <td>{attack}</td>
              <td>{defense}</td>
              <td colSpan={2}>
                <button
                  className="editButton"
                  onClick={() => handleClick(pokemons[index])}
                >
                  <i className="bi bi-pencil"></i>
                  editar
                </button>
                <button
                  className="editButton"
                  onClick={() => deletePokemon(pokemons[index])}
                >
                  <i className="bi bi-trash3-fill"></i>
                  borrar
                </button>
              </td>
            </tr>
          )
        )}
        {/*         <tr>
          <td>Robert</td>
          <td>.</td>
          <td>
            <img src="" alt="" />
            60
          </td>
          <td>80</td>
          <td colSpan={2} contentEditable={"false"}>
            <span>
              <i></i>editar
            </span>
            <span>
              <i></i>borrar
            </span>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};
