import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.20:3333",
});
//192.168.0.20:19001exp://192.168.0.20:19000exp://192.168.0.20:19000
export default api;
