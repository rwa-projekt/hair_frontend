// Redux effects
import { takeLatest, put, call, select } from "redux-saga/effects";

// Axios imports
import axios_user from "../../../axios/user";

// Actions
import * as actions from "./actions";
import axios from "axios";
import { getApiEndpoint } from "../../../axios/endpoints";

// Initial state
const initialState = {
  user: {
    status: "",
    token: "asgasgS",
    account: {
        id: 1,
        name: "Test",
        email: "",
        is_admin: false,
        phone_number: null
    }
  },
  register: {
    status: "",
    data: { 
        token: "", 
        account: {

        }
    },
  },
  getUser: {
    status: "loading",
    token: "asgasg",
    account: {
        id: null,
        name: "",
        email: "",
        is_admin: false,
        phone_number: null
    }
  },
};

export default function reducer(state = initialState, action = {}) {
  // Helper variable
  // var tmp;

  switch (action.type) {
    case actions.GET_USER:
      return {
        ...state,
        getUser: {
          status: "loading",
          data: { token: "", account: {}},
          message: "",
        },
      };

    case actions.GET_USER_SUCCESS:
      return {
        ...state,
        getUser: {
          status: "",
          data: action.data,
          message: action.message,
        },
        user: {
          status: "",
          data: action.data,
          message: action.message,
        },
      };

    case actions.GET_USER_FAIL:
      return {
        ...state,
        getUser: {
          status: "error",
          data: { token: "", account: {} },
          message: action.message,
        },
      };
    case actions.REGISTER:
      return {
        ...state,
        register: {
          status: "loading",
          data: {},
          message: "",
        },
      };

    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          status: "",
          data: action.data,
          message: action.message,
        },
      };

    case actions.REGISTER_FAIL:
      return {
        ...state,
        register: {
          status: "error",
          data: {},
          message: action.message,
        },
      };
    // Login
    case actions.LOGIN:
      return {
        ...state,
        user: {
            status: "loading",
            token: null,
            account: {
                id: null,
                name: "",
                email: "",
                is_admin: false,
                phone_number: null
            },
            message: "",
        },
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          status: "",
          data: action.data,
          message: action.message,
        },
      };

    case actions.LOGIN_FAIL:
      return {
        ...state,
        user: {
            status: "error",
            token: null,
            account: {
                id: null,
                name: "",
                email: "",
                is_admin: false,
                phone_number: null
            },
            message: action.message,
        },
      };

    case actions.LOGOUT_PROCEED:
      return {
        ...state,
        user: {
            status: "",
            token: null,
            account: {
                id: null,
                name: "",
                email: "",
                is_admin: false,
                phone_number: null
            },
            message: "",
        },
      };

    default:
      return { ...state };
  }
}

function transformData(data) {
  return data.data;
}

const authToken = () => localStorage.getItem("token");

function _logout(options) {
  return axios.post(`${getApiEndpoint()}accounts/logout/`, {}, { 
        headers: { 
            Authorization: "Token " + options.token 
        } 
    }
  );
}

export function* watcher_logout() {
  yield takeLatest(actions.LOGOUT, logout);
}
//logout
function* logout(payload) {
  try {
    const token = yield select(authToken);
    const options = { token };

    yield localStorage.removeItem("token");
    yield localStorage.removeItem("user");
    yield localStorage.removeItem("authTime");

    if (payload.successCallback) {
      payload.successCallback();
    }
    yield put({ type: actions.LOGOUT_PROCEED });
    const response = yield call(_logout, options);
  } catch (error) {
    if (payload.errorCallback) {
      payload.errorCallback();
    }
    yield put({ type: actions.LOGOUT_PROCEED });
  }
}




// Login
export function* watcher_login() {
  yield takeLatest(actions.LOGIN, login);
}

function _login(options) {
  return axios_user(options).post(`auth/`, options.data);
}

function* login(payload) {
  try {
    const token = yield select(authToken);
    const options = {
      data: payload.data,
    };
    const response = yield call(_login, options);
    const data = transformData(response);

    localStorage.setItem("token", data.token);


    yield put({
      type: actions.LOGIN_SUCCESS,
      data,
    });


    if(data.account.is_admin){
      if(payload.adminCallback){
        payload.adminCallback()
      }
    }
    else{
      if(payload.userCallback){
        payload.userCallback()
      }
    }

  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === 401) {
      yield put({ type: actions.LOGOUT });
    }

    if (payload.errorCallback) {
      payload.errorCallback();
    }
    // dispatch a failure action to the store with the error
    yield put({ type: actions.LOGIN_FAIL, error, message: "" });
  }
}
// Login


// Register
export function* watcher_register() {
  yield takeLatest(actions.REGISTER, register);
}

function _register(options) {
  return axios_user(options).post(`accounts/`, options.data);
}

function* register(payload) {
  try {
    const options = {
      data: payload.data,
    };
    const response = yield call(_register, options);
    const data = transformData(response);
    yield put({
      type: actions.REGISTER_SUCCESS,
      data,
    });

    localStorage.setItem("token", data.token);
    yield put({ type: actions.LOGIN_SUCCESS, data });

    if (payload.successCallback) {
      payload.successCallback();
    }
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === 401) {
      yield put({ type: actions.LOGOUT });
    }

    if (payload.errorCallback) {
      payload.errorCallback();
    }
    // dispatch a failure action to the store with the error
    yield put({ type: actions.REGISTER_FAIL, error, message: "" });
  }
}
// Register



// Get user
export function* watcher_getUser() {
  yield takeLatest(actions.GET_USER, getUser);
}

function _getUser(options) {
  return axios_user(options).get(`getuser/`, {
    params: options.queryParams,
  });
}

function* getUser(payload) {
  try {
    const options = {
      queryParams: payload.queryParams,
    };
    const response = yield call(_getUser, options);
    const data = transformData(response);
    yield put({
      type: actions.GET_USER_SUCCESS,
      data,
    });

    yield put({ type: actions.LOGIN_SUCCESS, data });

    if(!!data.token){
      if(data.account.is_admin){
        if (payload.adminRedirect) {
          payload.adminRedirect();
        }
      }
      else{
        if (payload.userRedirect) {
          payload.userRedirect();
        }
      }
    }


  } catch (error) {
    console.log(error);
    if (payload.errorCallback) {
      payload.errorCallback();
    }
    if (error.response && error.response.status === 401) {
      yield put({ type: actions.LOGOUT });
    }

    // dispatch a failure action to the store with the error
    yield put({ type: actions.GET_USER_FAIL, error, message: "" });
  }
}
// Get user
