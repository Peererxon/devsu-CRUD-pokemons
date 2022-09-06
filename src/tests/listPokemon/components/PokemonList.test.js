import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { PokemonList } from "../../../listPokemon/components/PokemonList";

test("Should render pokemons if data is send", () => {
  const mockData = [
    {
      attack: 10,
      defense: 80,
      id: 1,
      hp: 100,
      id_author: 1,
      image: "http.myimage.com",
      name: "bulbasur",
      type: "water",
    },
    {
      attack: 80,
      defense: 30,
      id: 2,
      hp: 200,
      id_author: 1,
      image: "http.myimage.com",
      name: "cyndaquil",
      type: "fire",
    },
  ];

  render(<PokemonList pokemons={mockData} />);

  expect(screen.getByText("bulbasur")).toBeInTheDocument();
});
