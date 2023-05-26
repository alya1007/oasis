// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import "./iconButton.css";

const IconButton = ({ icon, className }) => {
	return (
		<button className={`icon__button ${className}`}>
			<span className="icon__button-inner">{icon}</span>
		</button>
	);
};

export default IconButton;

IconButton.propTypes = {
	icon: PropTypes.element.isRequired,
	className: PropTypes.string,
};
