import * as types from "./actionTypes";

const initialState = {
	data: [],
	user: {},
	loading: false
};

const usersReducers = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			};
		case types.ADD_USER:
		case types.DELETE_USER:
			return {
				...state,
				loading: false
			};

		default:
			return state;
	}
};

export default usersReducers;
