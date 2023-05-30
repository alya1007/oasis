import { useState } from "react";
import "./servicesCarousel.css";
import { cardsData as cards } from "../../data/cardsData";
import PropTypes from "prop-types";

const ServicesCarousel = ({ nrRowItems }) => {
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
	return <div>Carousel</div>;
};

export default ServicesCarousel;

ServicesCarousel.propTypes = {
	nrRowItems: PropTypes.number.isRequired,
};
