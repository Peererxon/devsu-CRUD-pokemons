export const PokemonList = () => {
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
      <tbody contentEditable={"true"}>
        <tr>
          <th scope="row">pedro?</th>
          <td>Mark</td>
          <td>
            <img src="" alt="" />.
          </td>
          <td>60</td>
          <td>80</td>
          <td colSpan={2} contentEditable={"false"}>
            <span>
              <i></i>editar
            </span>
            <span>
              <i></i>borrar
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
