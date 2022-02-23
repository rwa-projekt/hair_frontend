// Redux effects
import { takeLatest, put, call, select } from "redux-saga/effects";

// Axios imports
import axios_reservations from "../../../axios/reservations";
import { LOGOUT } from "../user/actions";

// Actions
import * as actions from "./actions";

// ::::::::::::::::::: Initial state

// Initial state
const initialState = {
    reservations: {
        status: "",
        data: []
    }
};


// ::::::::::::::::::: Reducer

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actions.GET_RESERVATIONS:
            return {
                ...state,
                reservations: {
                    status: "loading",
                    data: [],
                    message: ""
                },
            };

        case actions.GET_RESERVATIONS_SUCCESS:
            return {
                ...state,
                reservations: {
                    status: "",
                    data: action.data,
                    message: action.message
                },
            };

        case actions.GET_RESERVATIONS_FAIL:
            return {
                ...state,
                reservations: {
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

// GetReservations
export function* watcher_getReservations() {
    yield takeLatest(actions.GET_RESERVATIONS, getReservations);
  }
  
  function _getReservations(options) {
    return axios_reservations(options).get("", {
      params: options.queryParams,
    });
  }
  
  function* getReservations(payload) {
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
      const response = yield call(_getReservations, options);
      const data = transformData(response);
  
      // Yields
      yield put({
        type: actions.GET_RESERVATIONS_SUCCESS,
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
      yield put({ type: actions.GET_RESERVATIONS_FAIL, error, message: "" });
    }
}
// GetReservations end