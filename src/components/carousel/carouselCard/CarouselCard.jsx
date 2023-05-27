import TypeBox from "../../article/typeBox/TypeBox";
import IconButton from "../../iconButton/IconButton";
import "./carouselCard.css";
import { FiArrowUpRight } from "react-icons/fi";
import PropTypes from "prop-types";
import DateBox from "../../article/dateBox/DateBox";

const CarouselCard = ({
	className,
	isActiveClass,
	type,
	date,
	link,
	backgroundImageUrl,
	secondType,
	description,
}) => {
	const style = {
		backgroundImage: `url(${backgroundImageUrl})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	};
	return (
		<div className={`carousel-card ${className}`}>
			<div
				className={`carousel-card__image-content ${isActiveClass}`}
				style={style}
			>
				<IconButton
					icon={<FiArrowUpRight />}
					href={link}
					className="carousel-card__icon-button"
				/>
				<div className="carousel-card__bottom">
					{isActiveClass && (
						<TypeBox
							type={type}
							className="carousel-card__bottom-type__upper"
						/>
					)}
					{isActiveClass && (
						<DateBox date={date} className="carousel-card__bottom-date" />
					)}{" "}
				</div>
			</div>
			<div className="carousel-card__under-image__content">
				<TypeBox type={secondType} />
				<h2 className="carousel-card__description">{description}</h2>
			</div>
		</div>
	);
};

export default CarouselCard;

CarouselCard.propTypes = {
	className: PropTypes.string,
	isActiveClass: PropTypes.string,
	type: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	backgroundImageUrl: PropTypes.string.isRequired,
	secondType: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
