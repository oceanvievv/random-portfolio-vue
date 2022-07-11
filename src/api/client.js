import axios from "axios";

const client = axios.create({
  baseURL: "https://retoolapi.dev/CpgSCW/",
  timeout: 5000,
});

export default client;
