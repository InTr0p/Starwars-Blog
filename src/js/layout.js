import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


 import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { Charactersdetails } from "./views/Charactersdetails";

import { Planetsdetails} from "./views/Planetsdetails";
import injectContext from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";


const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<>
			<BrowserRouter basename={basename}>
				<Navbar />
				<ScrollToTop>
					<Switch>
						 <Route exact path="/">
							<Home />
						</Route> 
						<Route exact path="/Charactersdetails/:id">
							<Charactersdetails />
						</Route>
						<Route exact path="/Planetsdetails/:id">
							<Planetsdetails />
						</Route>
						<Route>
							<h1>Not found! c:</h1>
						</Route>
					</Switch>
					<Footer />
					</ScrollToTop>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
