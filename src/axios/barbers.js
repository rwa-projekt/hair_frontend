// Axios
import axios from "axios";
import { getApiEndpoint } from "./endpoints";

// Instance
const instance = (options) => axios.create({
    baseURL: getApiEndpoint() + "accounts/accounts/", 
    timeout: 10000,
    headers: {
        Authorization: "Token " + options.token,
    },
})

export default instance;