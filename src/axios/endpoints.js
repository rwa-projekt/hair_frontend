export const deploy = "DEV" // DEV | PRODUCTION
export const public_url = "http://ss-docker.sumit.sum.ba:5555/api/"

// ===========================|| ENDPOINTS ||=========================== //

// Api endpoints
export function getApiEndpoint (){
    if (deploy === "DEV") {
      return public_url;
    }
};