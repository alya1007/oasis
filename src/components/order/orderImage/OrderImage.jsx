import "./orderImage.css";
import PropTypes from "prop-types";

function OrderImage({ backgroundImage, icon }) {
	const style = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	};
	return (
		<div style={style} className="order-image">
			<i className="order-icon">{icon}</i>
		</div>
	);
}

OrderImage.propTypes = {
	backgroundImage: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
};

export default OrderImage;
