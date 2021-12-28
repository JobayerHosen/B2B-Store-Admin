import axios from "axios";

const customersApi = axios.create({
  baseURL: "https://jobayerhosen.github.io/data",
});

export const fetchCustomers = async () => {
  const response = await customersApi.get("/customers.json").catch((err) => {
    console.log(err);
  });
  return response;
};

export default customersApi;
