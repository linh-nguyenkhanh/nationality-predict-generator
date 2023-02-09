import axios from "axios";

const BASE_URL = "https://api.nationalize.io/?name=";

export const fetchFromAPI = axios.get(`${BASE_URL}/${name}`);
