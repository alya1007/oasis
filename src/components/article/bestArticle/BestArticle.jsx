// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import "./bestArticle.css";
import "../../../App.css";

const BestArticle = ({ date, type, title, description, icon, className }) => {
	return (
		<div className={`best__article ${className}`}>
			<div className="best__article-info">
				<div className="best__article-info_left">
					<h4 className="best__article-info_left-date article__date">{date}</h4>
					<h4 className="best__article-info_left-type article__type">
						• {type}
					</h4>
				</div>
				<div className="best__article-info_right">
					<div className="best__article-info_right-upper">
						<h4 className="best__article-info_right-title article__info-text">
							• {title}
						</h4>
						<p className="best__article-info_right-description article__info-text">
							{description}
						</p>
					</div>
					<button className="best__article-info_right-button">{icon}</button>
				</div>
			</div>
		</div>
	);
};

export default BestArticle;

BestArticle.propTypes = {
	date: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
	className: PropTypes.string,
};
