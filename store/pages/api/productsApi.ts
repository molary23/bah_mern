import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const productsApi = axios.create({
  baseURL: BASE_URL,
});

export const getAllProducts = async () => {
  const response = await productsApi.get("");
  return response.data;
};

export const getProduct = async (id: number) => {
  const response = await productsApi.get(`/:${id}`);
  return response.data;
};
