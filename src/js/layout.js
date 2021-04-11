import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import { Home } from "./views/home";
import Characters from "./component/characters";
import Planets from "./component/planets";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { NavbarMenu } from "./component/navbar";
import { Footer } from "./component/footer";
import ScrollToTop from "./component/scrollToTop";
import PeopleDetails from "./views/peopleDetails";
import PlanetDetails from "./views/planetDetails";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarMenu />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/planets" component={Planets} />
						<Route exact path="/characters" component={Characters} />

						<Route exact path="/peopleDetails/:id" component={PeopleDetails} />
						<Route exact path="/planetDetails/:id" component={PlanetDetails} />

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
