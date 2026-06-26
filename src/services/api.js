import axios from "axios";

const api = axios.create({
 baseURL: "https://travel-explorer-muyj.onrender.com/"
});

export default api;
