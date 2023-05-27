import TypeBox from "../../article/typeBox/TypeBox";
import IconButton from "../../iconButton/IconButton";
import "./carouselCard.css";
import { FiArrowUpRight } from "react-icons/fi";
import PropTypes from "prop-types";
import DateBox from "../../article/dateBox/DateBox";

const CarouselCard = ({ type, date, link, backgroundImageUrl, height }) => {
	const style = {
		backgroundImage: `url(${backgroundImageUrl})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		height: height ? height : "400px",
	};
	return (
		<div className="carousel-card" style={style}>
			<IconButton
				icon={<FiArrowUpRight />}
				href={link}
				className="carousel-card__icon-button"
			/>
			<div className="carousel-card__bottom">
				<TypeBox type={type} />
				<DateBox date={date} className="carousel-card__bottom-date" />
			</div>
		</div>
	);
};

export default CarouselCard;

CarouselCard.propTypes = {
	type: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	backgroundImageUrl: PropTypes.string.isRequired,
	height: PropTypes.string,
};
