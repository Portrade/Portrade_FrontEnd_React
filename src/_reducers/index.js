import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import portfolioReducer from "./portfolioReducer";

export default combineReducers({
    login: loginReducer,
    portfolio: portfolioReducer
});
