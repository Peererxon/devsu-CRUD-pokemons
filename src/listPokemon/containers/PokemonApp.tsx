import { PokemonList } from "./PokemonList";
import "./styles/PokemonApp.scss";
export const PokemonApp = () => {
  return (
    <>
      <div className="search">
        <div>
          <h1 className="search__title">Listado de pokemon</h1>
          <div className="search__input">
            <i className="bi bi-search"></i>
            <input type="search" placeholder="Buscar" />
          </div>
        </div>
        <button type="button" className="search__button">
          <i className="bi bi-plus-lg"></i> Nuevo
        </button>
      </div>
      <PokemonList />
    </>
  );
};