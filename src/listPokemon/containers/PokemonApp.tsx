import { useCallback, useEffect, useState } from "react";
import axiosClient from "../../global/axios";
import { Pokemon } from "../../global/interfaces";
import { PokemonForm } from "../components/PokemonForm";
import { PokemonList } from "../components/PokemonList";
import "./styles/PokemonApp.scss";
export const PokemonApp = () => {
  const [showForm, setShowForm] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(null);
  const [pokemonsFilter, setPokemonsFilter] = useState<Pokemon[] | null>(null);
  /* In order to avoid share the "setter" across differents components if the applications would bigger an alternative could be Redux/Context... */
  useEffect(() => {
    getPokemons();
  }, []);

  const handleSearch = (search: string) => {
    var reg = "(" + search + ")(?![^<]*>|[^<>]*</)";
    var regex = new RegExp(reg, "i");

    // creating the array of matched data
    let newData = pokemons?.filter((pokemon) => {
      return pokemon.name.match(regex);
    });

    setPokemonsFilter(newData || null);
  };

  useEffect(() => {
    if (pokemonSelected) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, [pokemonSelected]);

  const getPokemons = async () => {
    try {
      const response = await axiosClient.get<Pokemon[]>("?idAuthor=1");
      setPokemons(response.data);
      setPokemonsFilter(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const memoDeletePokemon = useCallback(
    async (pokemon: Pokemon) => {
      try {
        const response = await axiosClient.delete<Pokemon>(
          pokemon.id.toString(),
          {
            data: pokemon,
          }
        );
        //deleting element of the front
        const newPokemons = pokemons?.filter((obj) => obj.id !== pokemon.id);

        setPokemonsFilter(newPokemons || null);
      } catch (error) {
        console.error(error);
      }
    },
    [pokemons]
  );

  return (
    <>
      <div className="search">
        <div>
          <h1 className="search__title">Listado de pokemon</h1>
          <div className="search__input">
            <i className="bi bi-search"></i>
            <input
              type="search"
              placeholder="Buscar"
              defaultValue={""}
              onChange={(e) => handleSearch(e.target.value)}
            />
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
      {pokemonsFilter && (
        <PokemonList
          pokemons={pokemonsFilter}
          selectPokemon={setPokemonSelected}
          deletePokemon={memoDeletePokemon}
        />
      )}
      {showForm && (
        <PokemonForm
          showForm={setShowForm}
          pokemonSelected={pokemonSelected}
          clearStatus={setPokemonSelected}
        />
      )}
    </>
  );
};
