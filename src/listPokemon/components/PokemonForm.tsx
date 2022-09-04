import "./styles/PokemonForm.scss";

interface Props {
  showForm: (formStatus: boolean) => void;
}
export const PokemonForm = ({ showForm }: Props) => {
  const handleCloseForm = () => {
    showForm(false);
  };
  return (
    <div className="pokeForm">
      <span className="pokeForm__title">Nuevo Pokemon</span>

      <div className="inputs">
        <div className="pokeinput">
          <label className="pokeinput__label" htmlFor="nombre">
            Nombre:
          </label>
          <input
            className="pokeinput__input"
            type="text"
            id="nombre"
            name="nombre"
          />
        </div>

        <div className="pokeinput">
          <label className="pokeinput__label" htmlFor="img">
            Imagen:
          </label>
          <input
            className="pokeinput__input"
            type="text"
            id="img"
            name="imagen"
          />
        </div>
      </div>

      <div className="inputs">
        <div className="pokeinput controls">
          <label htmlFor="atq" className="pokeinput__label">
            Ataque: <span>0</span>
          </label>
          <input
            className="pokeinput__range"
            type="range"
            id="atq"
            name="ataque"
            min="0"
            max="100"
          />
          <label className="pokeinput__label" htmlFor="atq">
            100
          </label>
        </div>

        <div className="pokeinput controls">
          <label htmlFor="def" className="pokeinput__label">
            Defensa: <span>0</span>
          </label>
          <input
            className="pokeinput__range"
            type="range"
            id="def"
            name="defensa"
            min="0"
            max="100"
          />
          <label className="pokeinput__label" htmlFor="def">
            100
          </label>
        </div>
      </div>

      <div className="buttons">
        <button className="button button--primary">
          <i className="bi bi-save"></i>
          Guardar
        </button>

        <button className="button button--primary" onClick={handleCloseForm}>
          <i className="bi bi-x-lg"></i>
          Cancelar
        </button>
      </div>
    </div>
  );
};
