// eslint-disable-next-line no-unused-vars
import React from "react";
import "./navbar.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { routes } from "../../data/pagesData";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-links">
				<div className="navbar-links_logo">
					<img src={Logo} alt="logo" />
				</div>
				<div className="navbar-links_pages">
					{routes.map((route) => (
						<Link to={route.path} key={route.name}>
							{route.name}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
