export const deploy = "DEV" // DEV | PRODUCTION
export const public_url = "http://192.168.88.203:5555/api/"

// ===========================|| ENDPOINTS ||=========================== //

// Api endpoints
export function getApiEndpoint (){
    if (deploy === "DEV") {
      return public_url;
    }
};