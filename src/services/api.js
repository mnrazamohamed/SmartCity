import axios from "axios";

const API = axios.create({ baseURL: 'http://20.127.154.68:9036/user/senzmate/', });

export default API;