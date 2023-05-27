// eslint-disable-next-line no-unused-vars
import React from "react";
import "./newPosts.css";
import { TitleLink, CarouselCard } from "../../../components";
import new1 from "../../../assets/images/new1.jpg";

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
					<CarouselCard
						type="Music"
						date="Dec 24, 2023"
						backgroundImageUrl={new1}
						link="#"
						height={"400px"}
					/>
				</div>
			</div>
		</section>
	);
};

export default NewPosts;
