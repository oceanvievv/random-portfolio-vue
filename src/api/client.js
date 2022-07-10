import axios from "axios";

const client = axios.create({
  baseURL: "https://retoolapi.dev/PDq2jR/",
  timeout: 5000,
});

export default client;
