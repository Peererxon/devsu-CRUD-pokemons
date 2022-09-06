import { url } from "inspector";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import axiosClient from "../../global/axios";
import { Pokemon } from "../../global/interfaces";

import "./styles/PokemonForm.scss";

interface Props {
  showForm: (formStatus: boolean) => void;
  pokemonSelected?: Pokemon | null;
  clearStatus: (pokemon: null) => void;
}

type FormData = {
  name: string;
  attack: number;
  defense: number;
  image: string;
  lastName: string;
};
export const PokemonForm = ({
  showForm,
  pokemonSelected,
  clearStatus,
}: Props) => {
  const handleCloseForm = () => {
    showForm(false);
  };

  const { register, handleSubmit, reset, formState } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: any) => {
    console.log(data);
    const pokemon: any = {
      ...data,
      name: data.name,
      attack: parseInt(data.attack),
      defense: parseInt(data.defense),
    };
    if (pokemonSelected) {
      updatePokemon(pokemon);
      return;
    }
    createPokemon(pokemon);
  };

  const updatePokemon = async (pokemon: any) => {
    pokemon.idAuthor = pokemonSelected?.id_author;
    pokemon.id = pokemonSelected?.id;
    //update
    setLoading(true);
    try {
      const response = await axiosClient.put(
        `/${pokemon.id.toString()}`,
        pokemon
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const createPokemon = async (pokemon: Pokemon) => {
    setLoading(true);
    const newPokemon = {
      ...pokemon,
      hp: 100,
      idAuthor: 1,
      type: "normal",
    };
    try {
      const response = await axiosClient.post("?idAuthor=1", newPokemon);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  /**
   * @description cleanup function
   */
  useEffect(() => {
    if (pokemonSelected) {
      reset(pokemonSelected);
    }
    return () => {
      clearStatus(null);
      reset();
    };
  }, [clearStatus, reset, pokemonSelected]);
  return (
    <form action="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="pokeForm">
        <span className="pokeForm__title">Nuevo Pokemon</span>

        <div className="inputs">
          <div className="pokeinput">
            <label className="pokeinput__label" htmlFor="nam">
              name:
            </label>
            <input
              {...register("name")}
              className="pokeinput__input"
              type="text"
              id="name"
              defaultValue={pokemonSelected?.name}
            />
          </div>

          <div className="pokeinput">
            <label className="pokeinput__label" htmlFor="image">
              Imagen:
            </label>
            <input
              {...register("image")}
              required
              className="pokeinput__input"
              type="text"
              id="image"
              defaultValue={pokemonSelected?.image}
            />
          </div>
        </div>

        <div className="inputs">
          <div className="pokeinput controls">
            <label htmlFor="attack" className="pokeinput__label">
              Ataque: <span>0</span>
            </label>
            <input
              {...register("attack")}
              className="pokeinput__range"
              type="range"
              id="attack"
              min="0"
              max="100"
              defaultValue={pokemonSelected?.attack}
            />
            <label className="pokeinput__label" htmlFor="attack">
              100
            </label>
          </div>

          <div className="pokeinput controls">
            <label htmlFor="defense" className="pokeinput__label">
              Defensa: <span>0</span>
            </label>
            <input
              {...register("defense")}
              className="pokeinput__range"
              type="range"
              id="defense"
              min="0"
              max="100"
              defaultValue={pokemonSelected?.defense}
            />
            <label className="pokeinput__label" htmlFor="defense">
              100
            </label>
          </div>
        </div>

        <div className="buttons">
          <button
            className="button button--primary"
            type="submit"
            disabled={!formState.isValid}
          >
            {loading ? (
              <div className="spinner-border text-red" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              <i className="bi bi-save"></i>
            )}
            Guardar
          </button>

          <button className="button button--primary" onClick={handleCloseForm}>
            <i className="bi bi-x-lg"></i>
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};
