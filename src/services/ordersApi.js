import axios from "axios";

const ordersApi = axios.create({
  baseURL: "https://jobayerhosen.github.io/data",
});

export const fetchOrders = async () => {
  const response = await ordersApi.get("/orders.json").catch((err) => {
    console.log(err);
  });
  return response;
};

export default ordersApi;
