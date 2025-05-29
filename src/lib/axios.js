import axios from "axios";
import { API_BASE_URL } from "../constants";

const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5001/api"
  : `${API_BASE_URL}/api`;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
