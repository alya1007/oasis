// eslint-disable-next-line no-unused-vars
import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { routes } from "../../data/pagesData";
import { CiSearch } from "react-icons/ci";
import IconButton from "../iconButton/IconButton";

const Navbar = () => {
	return (
		<div className="container">
			<nav className="navbar">
				<div className="navbar-links">
					<div className="navbar-links_logo">
						<h2 className="navbar-links_logo-title">oasis.</h2>
					</div>
					<div className="navbar-links_pages">
						{routes.map((route) => (
							<Link
								to={route.path}
								key={route.name}
								className="navbar-links_pages-link"
							>
								{route.name}
							</Link>
						))}
					</div>
				</div>
				<div className="navbar-menu">
					<IconButton icon={<CiSearch />} />
					<button className="navbar-menu_button navbar-menu_title">
						<div className="navbar-menu_button-title">menu</div>
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
