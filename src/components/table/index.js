import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { deleteUser, loadUsers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
	table: {
		marginTop: 100,
		minWidth: 900
	}
});

const useBtnStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		"& > *": {
			margin: theme.spacing(1)
		}
	}
}));

export default function TableComponent() {
	const dispatch = useDispatch();
	const { users } = useSelector((state) => state.data);
	const history = useHistory();

	console.log(users);
	useEffect(() => {
		dispatch(loadUsers());
	}, []);

	const classes = useStyles();
	const btnStyles = useBtnStyles();

	const handleDelete = (id) => {
		if (window.confirm("Are you sure you want to delete this user?")) {
			dispatch(deleteUser(id));
		}
	};

	return (
		<Fragment>
			<Button
				aria-label="contained primary button"
				color="primary"
				onClick={() => history.push("/addUser")}
				variant="contained">
				Add User
			</Button>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="center">Email</TableCell>
							<TableCell align="center">Contact</TableCell>
							<TableCell align="center">Address</TableCell>
							<TableCell align="center">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users &&
							users.map((user) => (
								<TableRow key={user.id}>
									<TableCell component="th" scope="row">
										{user.name}
									</TableCell>
									<TableCell align="center">{user.email}</TableCell>
									<TableCell align="center">{user.contact}</TableCell>
									<TableCell align="center">{user.address}</TableCell>
									<TableCell align="center">
										<div className={btnStyles.root}>
											<ButtonGroup variant="contained" aria-label="contained primary button group">
												<Button
													style={{ marginRight: "5px" }}
													color="secondary"
													onClick={() => handleDelete(user.id)}>
													Delete
												</Button>
												<Button color="primary">Edit</Button>
											</ButtonGroup>
										</div>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</Fragment>
	);
}
