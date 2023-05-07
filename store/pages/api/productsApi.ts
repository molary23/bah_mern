import axios from "axios";

const BASE_URL = "http://127.0.0.1:6001/api/product/";

const productsApi = axios.create({
  baseURL: BASE_URL,
});

export const getAllProducts = async () => {
  const response = await productsApi.get("all");
  return response.data;
};

export const getProduct = async (id: number) => {
  const response = await productsApi.get(`:${id}`);
  return response.data;
};
