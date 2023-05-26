import "./titleLink.css";
import PropTypes from "prop-types";
import { BsArrowRightShort } from "react-icons/bs";
const TitleLink = ({ text, link, fontSize }) => {
	return (
		<a href={link} className="title__link" style={{ fontSize }}>
			{text}
			<BsArrowRightShort className="title__link-icon" />
		</a>
	);
};

export default TitleLink;

TitleLink.propTypes = {
	text: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	fontSize: PropTypes.string,
};
