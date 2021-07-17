import axios from "axios";
import * as types from "./actionTypes";

const getUsers = (users) => ({
	type: types.GET_USERS,
	payload: users
});

export const loadUsers = () => {
	return function (dispatch) {
		axios
			.get(`${process.env.REACT_APP_API}`)
			.then((res) => {
				console.log(res);
				dispatch(getUsers(res.data));
			})
			.catch((error) => console.log(error));
	};
};

const userDeleted = () => ({
	type: types.DELETE_USER
});

export const deleteUser = (id) => {
	return function (dispatch) {
		axios
			.delete(`${process.env.REACT_APP_API}/${id}`)
			.then((res) => {
				console.log(res);
				dispatch(userDeleted());
				dispatch(getUsers());
			})
			.catch((error) => console.log(error));
	};
};
