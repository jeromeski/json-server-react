import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, ButtonGroup } from "@material-ui/core";

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

export default function TableComponent({ users, history, handleDelete }) {
	const classes = useStyles();
	const btnStyles = useBtnStyles();

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
												<Button
													onClick={() => history.push(`/editUser/${user.id}`)}
													color="primary">
													Edit
												</Button>
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
