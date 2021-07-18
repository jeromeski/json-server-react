import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TableComponent from "../../components/table";
import { deleteUser, loadUsers } from "../../redux/actions";

function TableContainer() {
	const dispatch = useDispatch();
	const { users } = useSelector((state) => state.data);
	const history = useHistory();

	useEffect(() => {
		if (users) {
			dispatch(loadUsers());
		}
	}, []);

	const handleDelete = (id) => {
		if (window.confirm("Are you sure you want to delete this user?")) {
			dispatch(deleteUser(id));
		}
	};

	console.log(users);

	return (
		<div>
			<TableComponent history={history} handleDelete={handleDelete} users={users} />
		</div>
	);
}

export default TableContainer;
