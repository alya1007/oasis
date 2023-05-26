import PropTypes from "prop-types";
const TypeBox = ({ type }) => {
	return <h4 className="article__type">• {type}</h4>;
};

export default TypeBox;

TypeBox.propTypes = {
	type: PropTypes.string.isRequired,
};
