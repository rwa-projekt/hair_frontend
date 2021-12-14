export const deploy = process.env.DEPLOY

// ===========================|| ENDPOINTS ||=========================== //

// Api endpoints
export function getApiEndpoint (){
    // DEV
    if (deploy === "DEV") {
      return "";
    }
};