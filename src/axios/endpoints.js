export const deploy = "DEV" // DEV | PRODUCTION
export const public_url = "https://rwa-barberbooking.tk/api/"

// ===========================|| ENDPOINTS ||=========================== //

// Api endpoints
export function getApiEndpoint (){
    if (deploy === "DEV") {
      return public_url;
    }
};