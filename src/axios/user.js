// Axios
import axios from "axios";
import { getApiEndpoint } from "./endpoints";

// Instance
const instance = () => axios.create({
    baseURL: getApiEndpoint() + "accounts/", 
    timeout: 5000
})

export default instance;