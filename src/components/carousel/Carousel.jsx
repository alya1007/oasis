import { useState } from "react";
// import { carouselCardsData as cards } from "../../data/carouselCardsData";
import CarouselCard from "./carouselCard/CarouselCard";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./carousel.css";
import PropTypes from "prop-types";
import ServiceCard from "../services/ServiceCard";
import InfoCard from "../infoCard/InfoCard";

const Carousel = ({
	cards,
	nrRowItems,
	newSection = false,
	servicesSection = false,
	infoSection = false,
}) => {
	const screenWidth = window.innerWidth;
	if (newSection == true && screenWidth <= 950) {
		nrRowItems = 3;
	}
	if (newSection == true && screenWidth <= 600) {
		nrRowItems = 1;
	}
	if (servicesSection == true) {
		nrRowItems = screenWidth <= 600 ? 1 : 2;
	}

	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? cards.length - 1 : prevIndex - 1
		);
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === cards.length - 1 ? 0 : prevIndex + 1
		);
	};

	const visibleItems = [];
	for (let i = 0; i < nrRowItems; i++) {
		const itemIndex = (currentIndex + i) % cards.length;
		const isActive = i === 0; // Check if it's the active card
		visibleItems.push({ ...cards[itemIndex], isActive });
	}

	return (
		<div className="carousel">
			<button onClick={handlePrevClick} className="carousel__button">
				<FiArrowLeft />
			</button>
			{newSection && (
				<div className="carousel__items">
					{visibleItems.map((item) => (
						<CarouselCard
							className="carousel__item"
							isActiveClass={item.isActive ? "active-card" : ""}
							key={item.id}
							{...item}
						/>
					))}
				</div>
			)}
			{servicesSection && (
				<div className="carousel__items carousel__items-services">
					{visibleItems.map((item) => (
						<ServiceCard key={item.id} {...item} />
					))}
				</div>
			)}
			{infoSection && (
				<div className="carousel__items carousel__items-info">
					{visibleItems.map((item) => (
						<InfoCard key={item.id} {...item} />
					))}
				</div>
			)}
			<button onClick={handleNextClick} className="carousel__button">
				<FiArrowRight />
			</button>
		</div>
	);
};

export default Carousel;

Carousel.propTypes = {
	cards: PropTypes.array.isRequired,
	nrRowItems: PropTypes.number.isRequired,
	newSection: PropTypes.bool,
	servicesSection: PropTypes.bool,
	infoSection: PropTypes.bool,
};
