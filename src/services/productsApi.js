import axios from "axios";

const productsApi = axios.create({
  baseURL: "https://jobayerhosen.github.io/data",
});

export const fetchProducts = async () => {
  const response = await productsApi.get("/products.json").catch((err) => {
    console.log(err);
  });
  return response;
};

export default productsApi;
