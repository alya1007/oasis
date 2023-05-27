import PropTypes from "prop-types";
const DateBox = ({ date, className }) => {
	return <h4 className={`article__date ${className}`}>{date}</h4>;
};

export default DateBox;

DateBox.propTypes = {
	date: PropTypes.string.isRequired,
	className: PropTypes.string,
};
