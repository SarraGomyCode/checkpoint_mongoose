import { combineReducers } from "redux";
import contactReducers from "../reducers/contact";
import EditReducer from "../reducers/edit";

const rootReducer = combineReducers({ contactReducers, EditReducer });
export default rootReducer;
