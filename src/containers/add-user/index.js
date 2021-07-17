import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";

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

	const history = useHistory();
	const dispatch = useDispatch();

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
		console.log(values);
		if (!id || !name || !email || !contact || !address) {
			setError("Please fill up all input fields");
			return;
		} else {
			dispatch(addUser(values));
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

	return (
		<div>
			<Button variant="contained" color="secondary" onClick={() => history.push("/")}>
				Back
			</Button>
			<form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					id="standard-basic"
					label="ID"
					value={id}
					name="id"
					onChange={handleInputChange}
					// onChange={handleInputChange("id")}
					type="text"
					helperText={error}
				/>
				<br />
				<TextField
					id="standard-basic"
					label="Name"
					name="name"
					value={name}
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
					value={email}
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
					value={contact}
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
					value={address}
					onChange={handleInputChange}
					// onChange={handleInputChange("address")}
					helperText={error}
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
