export const deploy = "DEV" // DEV | PRODUCTION
export const public_url = "http://propeler.ddns.net:8005/api/"

// ===========================|| ENDPOINTS ||=========================== //

// Api endpoints
export function getApiEndpoint (){
    if (deploy === "DEV") {
      return public_url;
    }
};