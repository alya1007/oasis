// eslint-disable-next-line no-unused-vars
import React from "react";
import InfoImage from "../../../assets/images/info.jpg";
import "./info.css";
import { InfoCard } from "../../../components";
import { infoCardsData } from "../../../data/infoCardsData";

const Info = () => {
	return (
		<section className="info__section section__padding">
			<div className="container">
				<div className="info">
					<div className="info__image">
						<img src={InfoImage} alt="infoImage" />
					</div>
					<div className="info__content">
						<h2 className="info__title section__title">About Us</h2>
						<p className="info__text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
							quidem, voluptatibus, quod, quos voluptatem voluptatum quae
							asperiores quibusdam doloribus voluptates quia. Quisquam quidem,
						</p>
						<button className="info__button button-light">read more</button>
					</div>
				</div>
				<div className="info__cards">
					{infoCardsData.map((infoCardData) => (
						<InfoCard key={infoCardData.number} {...infoCardData} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Info;
