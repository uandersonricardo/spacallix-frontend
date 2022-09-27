import axios from "axios";

import API from "../config/api";

const api = axios.create({
  baseURL: API.baseUrl,
  withCredentials: false
});

export default api;
