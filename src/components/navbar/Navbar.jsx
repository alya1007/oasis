// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { routes } from "../../data/pagesData";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import IconButton from "../iconButton/IconButton";
import { GiOasis } from "react-icons/gi";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="container">
			<nav className="navbar">
				<div className="navbar-links">
					<div className="navbar-links_logo">
						<GiOasis className="navbar-links_logo-icon" />
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
				</div>
				<div className="navbar-menu__toggle">
					{toggleMenu ? (
						<CiMenuBurger
							className="navbar-menu__toggle-icon"
							onClick={() => {
								setToggleMenu(false);
							}}
						/>
					) : (
						<CiMenuBurger
							className="navbar-menu__toggle-icon"
							onClick={() => {
								setToggleMenu(true);
							}}
						/>
					)}
					<div
						className={`navbar-menu__toggle-menu ${toggleMenu ? "active" : ""}`}
					>
						<div className="navbar-menu__toggle-menu__inner">
							{routes.map((route) => (
								<Link
									to={route.path}
									key={route.name}
									className="navbar-menu__toggle-menu-link navbar-links_pages-link"
								>
									{route.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
