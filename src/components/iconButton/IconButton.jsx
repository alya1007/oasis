// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import "./iconButton.css";

const IconButton = ({ icon, className, href }) => {
	return (
		<a className={`icon__button ${className}`} href={href}>
			<span className="icon__button-inner">{icon}</span>
		</a>
	);
};

export default IconButton;

IconButton.propTypes = {
	icon: PropTypes.element.isRequired,
	className: PropTypes.string,
	href: PropTypes.string,
};
