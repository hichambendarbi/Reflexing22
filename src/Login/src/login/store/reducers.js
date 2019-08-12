//import redux module
import { combineReducers } from "redux";
//declare our initial object
const initialState = {
  login: {
    username: "",
    password: ""
  },
  signup: {
    email: "",
    password: "",
    confirmPassword: ""
  },
  forgotPassword: {
    email: ""
  }
};

/**
 * login reducer set username and
 * password from user entry
 *
 * @param {*} state
 * @param {*} action
 * @returns {*} state
 */
const login = (state = { ...initialState.login }, action) => {
  if (action.type === "TYPING_USERNAME") {
    state.username = action.value;
    return { ...state };
  }

  if (action.type === "TYPING_PASSWORD") {
    state.password = action.value;
    return { ...state };
  }

  if (action.type === "SHOW_USERNAME") {
    state.username = action.username;
    return { ...state };
  }
  return state;
};

/**
 * signup to set new user data
 * @param {*} state
 * @param {*} action
 */
const signup = (state = { ...initialState.signup }, action) => {
  switch (action.type) {
    case "TYPING_EMAIL":
      return { ...state };
    case "TYPING_PASSWORD":
      return { ...state };
    case "TYPING_PASSWORD_CONFIRMATION":
      return { ...state };
    default:
      return state;
  }
};

/**
 * forgot password
 * @param {*} state
 * @param {*} action
 */
const forgotPassword = (state = { ...initialState.forgotPassword }, action) => {
  switch (action.type) {
    case "TYPING_EMAIL":
      return { ...state };
    default:
      return state;
  }
};

//lets combine All reducers 
//in a big one 
export default combineReducers({
  login,
  signup,
  forgotPassword
});
