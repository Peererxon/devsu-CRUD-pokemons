import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://bp-pokemons.herokuapp.com/",
});

export default axiosClient;
