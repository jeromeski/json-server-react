import axios from "axios";
import * as types from "./actionTypes";

const getUsers = (users) => ({
	type: types.GET_USERS,
	payload: users
});

const userDeleted = () => ({
	type: types.DELETE_USER
});

const userAdded = () => ({
	type: types.ADD_USER
});

const getUser = (data) => ({
	type: types.GET_USER,
	payload: data
});

const userUpdated = (data) => ({
	type: types.UPDATE_USER,
	payload: data
});

export const loadUsers = () => {
	return function (dispatch) {
		axios
			.get(`${process.env.REACT_APP_API}`)
			.then((res) => {
				dispatch(getUsers(res.data));
			})
			.catch((error) => console.log(error));
	};
};

export const deleteUser = (uid) => {
	return function (dispatch) {
		axios
			.delete(`${process.env.REACT_APP_API}${uid}`)
			.then((res) => {
				dispatch(userDeleted());
				dispatch(loadUsers());
			})
			.catch((error) => console.log(error));
	};
};

export const addUser = (user) => {
	return function (dispatch) {
		axios
			.post(`${process.env.REACT_APP_API}`, user)
			.then((res) => {
				dispatch(userAdded());
				dispatch(loadUsers());
			})
			.catch((error) => console.log(error));
	};
};

export const updateUser = (id, user) => {
	return function (dispatch) {
		axios
			.put(`${process.env.REACT_APP_API}${id}`, user)
			.then((res) => {
				dispatch(userUpdated(res.data));
				dispatch(loadUsers());
			})
			.catch((error) => console.log(error));
	};
};

export const getSingleUser = (id) => {
	return function (dispatch) {
		axios
			.get(`${process.env.REACT_APP_API}${id}`)
			.then((res) => {
				console.log(res);
				dispatch(getUser(res.data));
			})
			.catch((error) => console.log(error));
	};
};
