import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, getSingleUser } from "../../redux/actions";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "45ch"
		}
	}
}));

function EditContainer() {
	const classes = useStyles();

	const history = useHistory();
	const dispatch = useDispatch();
	const { id } = useParams();

	const [values, setValues] = useState({
		name: "",
		email: "",
		contact: "",
		address: ""
	});
	const [error, setError] = useState("");

	const { name, email, contact, address } = values;

	const { data } = useSelector((state) => ({ ...state }));
	const { user } = data;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !contact || !address) {
			setError("Please fill up all input fields");
			return;
		} else {
			dispatch(updateUser(id, values));
			history.push("/");
			setError("");
		}
	};

	// const handleInputChange = (name) => (e) => {
	// 	setValues({ ...values, [name]: e.target.value });
	// };

	const handleInputChange = (e) => {
		let { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	useEffect(() => {
		// id taken from params
		dispatch(getSingleUser(id));
	}, []);

	useEffect(() => {
		if (user) {
			setValues({ ...user });
		}
	}, [user]);

	return (
		<div>
			<Button variant="contained" color="secondary" onClick={() => history.push("/")}>
				Back
			</Button>
			<form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					id="standard-basic"
					type="text"
					label="Name"
					name="name"
					value={name || ""}
					// onChange={handleInputChange("name")}
					onChange={handleInputChange}
					helperText={error}
				/>
				<br />
				<TextField
					id="standard-basic"
					label="Email"
					type="email"
					name="email"
					value={email || ""}
					onChange={handleInputChange}
					// onChange={handleInputChange("email")}
					helperText={error}
				/>
				<br />
				<TextField
					id="standard-basic"
					label="Contact"
					type="text"
					name="contact"
					value={contact || ""}
					onChange={handleInputChange}
					// onChange={handleInputChange("contact")}
					helperText={error}
				/>
				<br />
				<TextField
					id="standard-basic"
					label="Address"
					type="text"
					name="address"
					value={address || ""}
					onChange={handleInputChange}
					// onChange={handleInputChange("address")}
					helperText={error}
				/>
				<br />
				<Button variant="contained" color="primary" type="submit">
					Confirm Changes
				</Button>
			</form>
		</div>
	);
}

export default EditContainer;
