import {BrowserRouter, Routes, Route} from "react-router-dom";
import PreLogin from "./pages/PreLogin";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<PreLogin />} />
					<Route path='/login' element={<Login/>} />
					<Route path='/signup' element={<Signup />} />
					<Route path='*' element={<ErrorPage />} /> 
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
