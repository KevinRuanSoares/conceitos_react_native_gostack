import axios from "axios";

const api = axios.create({
  baseURL: "https://34bd805a6f6b.ngrok.io",
});

export default api;
