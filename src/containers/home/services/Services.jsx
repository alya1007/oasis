// eslint-disable-next-line no-unused-vars
import React from "react";
import "./services.css";
import ServiceCard from "../../../components/services/ServiceCard";
import { cardsData } from "../../../data/cardsData";

const Services = () => {
	return (
		<section className="services__section section__padding">
			<div className="container">
				<h1 className="services__title section__title">Our Services</h1>
				<div className="services__cards">
					{cardsData.map((card, index) => (
						<ServiceCard
							key={index}
							icon={card.icon}
							title={card.title}
							description={card.description}
							link={card.link}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
