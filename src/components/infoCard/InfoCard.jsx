import "./infoCard.css";
import PropTypes from "prop-types";

const InfoCard = ({ number, text, backgroundColor, color }) => {
	const style = {
		backgroundColor: backgroundColor,
		color: color ? color : "var(--color-second-pallet__quaternary)",
	};
	return (
		<div className="info-card" style={style}>
			<h1 className="info-card__number">{number}</h1>
			<p className="info-card__text">{text}</p>
		</div>
	);
};

export default InfoCard;

InfoCard.propTypes = {
	number: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	color: PropTypes.string,
};
