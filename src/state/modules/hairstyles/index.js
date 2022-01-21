// Redux effects
import { takeLatest, put, call, select } from "redux-saga/effects";

// Axios imports
import axios_hairstyles from "../../../axios/hairstyles";
import { LOGOUT } from "../user/actions";

// Actions
import * as actions from "./actions";

// ::::::::::::::::::: Initial state

// Initial state
const initialState = {
    hairstyles: {
        status: "",
        data: []
    }
};


// ::::::::::::::::::: Reducer

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actions.GET_HAIRSTYLES:
            return {
                ...state,
                hairstyles: {
                    status: "loading",
                    data: [],
                    message: ""
                },
            };

        case actions.GET_HAIRSTYLES_SUCCESS:
            return {
                ...state,
                hairstyles: {
                    status: "",
                    data: action.data,
                    message: action.message
                },
            };

        case actions.GET_HAIRSTYLES_FAIL:
            return {
                ...state,
                hairstyles: {
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

// GetHairstyles
export function* watcher_getHairstyles() {
    yield takeLatest(actions.GET_HAIRSTYLES, getHairstyles);
  }
  
  function _getHairstyles(options) {
    return axios_hairstyles(options).get("", {
      params: options.queryParams,
    });
  }
  
  function* getHairstyles(payload) {
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
      const response = yield call(_getHairstyles, options);
      const data = transformData(response);
  
      // Yields
      yield put({
        type: actions.GET_HAIRSTYLES_SUCCESS,
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
      yield put({ type: actions.GET_HAIRSTYLES_FAIL, error, message: "" });
    }
  }
  // GetHairstyles end