// Axios
import axios from "axios";
import { getApiEndpoint } from "./endpoints";

// Instance
const instance = (options) => axios.create({
    baseURL: getApiEndpoint() + "barber_booking/hair_styles/", 
    timeout: 10000,
    headers: {
        Authorization: "Token " + options.token,
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    },
})

export default instance;