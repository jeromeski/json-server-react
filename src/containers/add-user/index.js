import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "45ch"
		}
	}
}));

function FormContainer() {
	const classes = useStyles();

	const [values, setValues] = useState({
		id: "",
		name: "",
		email: "",
		contact: "",
		address: ""
	});
	const [error, setError] = useState("");

	const { id, name, email, contact, address } = values;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!id || !email || !contact || address) {
			setError("Please fill up all input fields");
		}
	};

	const handleInputChange = (name) => (e) => {
		setValues({ ...values, [name]: e.target.value });
	};

	console.log(values);

	return (
		<div>
			<form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					id="standard-basic"
					label="ID"
					value={id}
					onChange={handleInputChange("id")}
					type="text"
				/>
				<br />
				<TextField
					id="standard-basic"
					label="Name"
					value={name}
					onChange={handleInputChange("name")}
				/>
				<br />
				<TextField
					id="standard-basic"
					label="Email"
					type="email"
					value={email}
					onChange={handleInputChange("email")}
				/>
				<br />
				<TextField
					id="standard-basic"
					label="Contact"
					type="text"
					value={contact}
					onChange={handleInputChange("contact")}
				/>
				<br />
				<TextField
					id="standard-basic"
					label="Address"
					type="text"
					value={address}
					onChange={handleInputChange("address")}
				/>
				<br />
				<Button variant="contained" color="primary" type="submit">
					Add User
				</Button>
			</form>
		</div>
	);
}

export default FormContainer;
