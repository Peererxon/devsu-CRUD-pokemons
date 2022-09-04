import { useState } from "react";
import { PokemonForm } from "../components/PokemonForm";
import { PokemonList } from "../components/PokemonList";
import "./styles/PokemonApp.scss";
export const PokemonApp = () => {
  const [showForm, setShowForm] = useState(false);
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
        <button
          type="button"
          className="button button--primary"
          onClick={() => setShowForm(true)}
        >
          <i className="bi bi-plus-lg"></i>
          Nuevo
        </button>
      </div>
      <PokemonList />
      {showForm && <PokemonForm showForm={setShowForm} />}
    </>
  );
};
