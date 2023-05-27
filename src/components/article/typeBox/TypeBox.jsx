import PropTypes from "prop-types";
const TypeBox = ({ type, className }) => {
	return <h4 className={`article__type ${className}`}>• {type}</h4>;
};

export default TypeBox;

TypeBox.propTypes = {
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
};
