import PropTypes from "prop-types";
import TypeBox from "../typeBox/TypeBox";
import IconButton from "../../iconButton/IconButton";
import { BsArrowRightShort } from "react-icons/bs";
import "./sideArticle.css";
const SideArticle = ({
	type,
	icon,
	title,
	upperTitle,
	link,
	showButton,
	className,
}) => {
	return (
		<div className={`side__article ${className}`}>
			{type && (
				<div className="side__article-info">
					<TypeBox type={type} />
					{icon && <IconButton icon={icon} />}
				</div>
			)}
			{upperTitle && (
				<h4 className="side__article-info-upperTitle text-padding">
					{upperTitle}
				</h4>
			)}
			{title && (
				<h4 className="side__article-info-title text-padding">{title}</h4>
			)}
			{link && (
				<a href={link} className="text-link side__article-info-link">
					Learn More
				</a>
			)}
			{showButton && (
				<button className="side__article-info-button">
					See all picks
					<span>
						<BsArrowRightShort />
					</span>
				</button>
			)}
		</div>
	);
};

export default SideArticle;

SideArticle.propTypes = {
	type: PropTypes.string,
	icon: PropTypes.element,
	title: PropTypes.string,
	upperTitle: PropTypes.string,
	link: PropTypes.string,
	showButton: PropTypes.bool,
	className: PropTypes.string,
};
