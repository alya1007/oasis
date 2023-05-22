/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./data/pagesData";
function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<Routes>
					{routes.map((route) => (
						<Route
							path={route.path}
							key={route.name}
							element={route.component}
						/>
					))}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
