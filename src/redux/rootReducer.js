import usersReducers from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	data: usersReducers
});

export default rootReducer;
