import axios from "axios";

const client = axios.create({
  baseURL: "https://retoolapi.dev/lrxhqn/",
  timeout: 5000,
});

export default client;
