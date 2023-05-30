// eslint-disable-next-line no-unused-vars
import React from "react";
import "./newPosts.css";
import { TitleLink, Carousel } from "../../../components";
import { carouselCardsData } from "../../../data/carouselCardsData";

const NewPosts = () => {
	return (
		<section className="section__padding new-posts__section">
			<div className="container">
				<div className="new-posts__title section__title">
					<h1>
						New Posts
						<span>
							<TitleLink text="See all posts" link="#" />
						</span>
					</h1>
					<a href="#" className="text-link__lowercase">
						view more
					</a>
				</div>
				<div className="new-posts__carousel">
					<Carousel
						cards={carouselCardsData}
						nrRowItems={4}
						newSection={true}
					/>
				</div>
			</div>
		</section>
	);
};

export default NewPosts;
