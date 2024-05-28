import {BrowserRouter, Routes, Route} from "react-router-dom";
import PreLogin from "./pages/PreLogin";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import React, {useState, useEffect} from "react";

const App = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<PreLogin theme={theme} handleThemeSwitch={handleThemeSwitch} />}
					/>
					<Route path='/login' element={<Login theme={theme} />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
