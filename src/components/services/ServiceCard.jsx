// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import "./serviceCard.css";

function ServiceCard({ icon, title, description, link }) {
	return (
		<div className="service__card">
			<div className="service__card__icon">{icon}</div>
			<h1 className="service__card__title">{title}</h1>
			<p className="service__card__description">{description}</p>
			<a href={link} className="service__card__link">
				more
			</a>
		</div>
	);
}
ServiceCard.propTypes = {
	icon: PropTypes.element.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};
export default ServiceCard;
