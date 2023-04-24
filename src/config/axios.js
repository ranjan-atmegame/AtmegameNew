import axios from "axios";
import { API_URL } from "./index";

export default axios.create({
  baseURL: API_URL,
});
