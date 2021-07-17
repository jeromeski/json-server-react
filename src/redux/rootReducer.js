import usersReducers from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	users: usersReducers
});

export default rootReducer;
