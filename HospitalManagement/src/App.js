import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Navigate,
	Routes,
	Route,
} from "react-router-dom";

import { BASE_URL } from "./config/base";
import BookAppointments from "./containers/BookAppointments";
import LandingPage from "./containers/LandingPage";
import Login from "./containers/Login";
import LoginDetails from "./context/LoginContext";
import HomePage from "./components/Home";
import Signup from "./containers/Signup";

const App = () => {
	const [user, setUser] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);
	const baseURL = BASE_URL;

	useEffect(() => {
		// localStorage.clear("user")
		const savedUser = localStorage.getItem("user");
		if (!loggedIn && savedUser) {
			setUser(JSON.parse(savedUser).user);
			setLoggedIn(true);
			// window.location.href = "/appointmentpage";
		}
		// eslint-disable-next-line
	}, []);

	return (
		<LoginDetails.Provider value={{setLoggedIn, loggedIn, user, setUser, baseURL }}>
			<Router>
					<Routes>
						<Route path={"/"} element ={<HomePage />}/>
						<Route path={"/login"} element={<Login/>}/>
						<Route path={"/signup"} element={<Signup />}/>
						<Route path={"/appointments"}element={<BookAppointments />}/>
						<Route path={"/appointmentpage"} element={<LandingPage />}/>
						<Route path={"/about-us"} element={<Navigate to={"/#about-us"} />}/>
						<Route path={"/404"} element={<h1>Page not found</h1>}/>
						<Route path={"/**"} element={<Navigate to={"/404"} />}/>
					</Routes>
			</Router>
		</LoginDetails.Provider>
	);
};

export default App;
