import axios from "axios";
//71936250/json/
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});
export default api;