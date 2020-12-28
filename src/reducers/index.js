import { combineReducers } from "redux";
import counterReducer from "../reducers/counter";
import loggedReducer from "../reducers/isLogged";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
