import axios from "axios";

const API = axios.create({ baseURL: 'http://20.127.154.68:9036/v2/', });

export default API;