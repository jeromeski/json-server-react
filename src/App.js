import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddUser from "./pages/add-user";
import Home from "./pages/home";

function App() {
	return (
		<Fragment>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/addUser" component={AddUser} />
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
