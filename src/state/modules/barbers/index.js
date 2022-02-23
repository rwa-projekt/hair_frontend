// Redux effects
import { takeLatest, put, call, select } from "redux-saga/effects";

// Axios imports
import axios_barbers from "../../../axios/barbers";
import { LOGOUT } from "../user/actions";

// Actions
import * as actions from "./actions";

// ::::::::::::::::::: Initial state

// Initial state
const initialState = {
    barbers: {
        status: "",
        data: []
    },
    clients: {
      status: "",
      data: []
    }
};


// ::::::::::::::::::: Reducer

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actions.GET_BARBERS:
            return {
                ...state,
                barbers: {
                    status: "loading",
                    data: [],
                    message: ""
                },
            };

        case actions.GET_BARBERS_SUCCESS:
            return {
                ...state,
                barbers: {
                    status: "",
                    data: action.data,
                    message: action.message
                },
            };

        case actions.GET_BARBERS_ERROR:
            return {
                ...state,
                barbers: {
                    status: error,
                    data: [],
                    message: action.message
                },
            };

          case actions.GET_CLIENTS:
            return {
                ...state,
                clients: {
                    status: "loading",
                    data: [],
                    message: ""
                },
            };

        case actions.GET_CLIENTS_SUCCESS:
            return {
                ...state,
                clients: {
                    status: "",
                    data: action.data,
                    message: action.message
                },
            };

        case actions.GET_CLIENTS_FAIL:
            return {
                ...state,
                clients: {
                    status: error,
                    data: [],
                    message: action.message
                },
            };
        default:
            return { ...state };
    }
}



// ::::::::::::::::::: Helper functions

function transformData(data) {
    return data.data;
}
  
const authToken = () => localStorage.getItem("token");



// ::::::::::::::::::: Reducers

// GetBarbers
export function* watcher_getBarbers() {
    yield takeLatest(actions.GET_BARBERS, getBarbers);
  }
  
  function _getBarbers(options) {
    return axios_barbers(options).get("barbers/", {
      params: options.queryParams,
    });
  }
  
  function* getBarbers(payload) {
    try {
      // Token
      const token = yield select(authToken);
  
      // Options
      const options = {
        token: token,
        queryParams: payload.queryParams,
        id: payload.id
      };
  
      // Response
      const response = yield call(_getBarbers, options);
      const data = transformData(response);
  
      // Yields
      yield put({
        type: actions.GET_BARBERS_SUCCESS,
        data,
        id: payload.id
      });
  
      // Success callback
      if (payload.successCallback) {
          payload.successCallback();
      }
    }
  
    catch (error) {
      // Logging out error
      console.log(error);
      if (error.response && error.response.status === 401) {
        yield put({ type: LOGOUT });
      }
  
      // Error callback
      if(payload.errorCallback){
        payload.errorCallback();
      }
  
      // Dispatch a failure action to the store with the error
      yield put({ type: actions.GET_BARBERS_ERROR, error, message: "" });
    }
  }
  // GetBarbers end




  // GetBarbers
export function* watcher_getClients() {
  yield takeLatest(actions.GET_CLIENTS, getClients);
}

function _getClients(options) {
  return axios_barbers(options).get("clients/", {
    params: options.queryParams,
  });
}

function* getClients(payload) {
  try {
    // Token
    const token = yield select(authToken);

    // Options
    const options = {
      token: token,
      queryParams: payload.queryParams,
      id: payload.id
    };

    // Response
    const response = yield call(_getClients, options);
    const data = transformData(response);

    // Yields
    yield put({
      type: actions.GET_CLIENTS_SUCCESS,
      data,
      id: payload.id
    });

    // Success callback
    if (payload.successCallback) {
        payload.successCallback();
    }
  }

  catch (error) {
    // Logging out error
    console.log(error);
    if (error.response && error.response.status === 401) {
      yield put({ type: LOGOUT });
    }

    // Error callback
    if(payload.errorCallback){
      payload.errorCallback();
    }

    // Dispatch a failure action to the store with the error
    yield put({ type: actions.GET_CLIENTS_FAIL, error, message: "" });
  }
}
// GetBarbers end