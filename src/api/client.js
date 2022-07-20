import axios from "axios";

const client = axios.create({
  baseURL: "https://retoolapi.dev/85NubM/",
  timeout: 5000,
});

export default client;
