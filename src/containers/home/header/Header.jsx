// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../../App.css";
import HeaderImage from "../../../assets/images/header-image.jpg";
import "./Header.css";
import { TitleLink } from "../../../components";

const Header = () => {
	return (
		<section className="section__padding">
			<div className="header__content container">
				<img src={HeaderImage} alt="HeaderImage" className="header__image" />
				<div className="header__text">
					<h1 className="header__text-title section__title">
						Oasis Articles
						<span>
							<TitleLink
								text="See all posts"
								link="#"
								className={"header__text-title__link"}
							/>
						</span>
					</h1>
					<p className="header__text-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						quidem, voluptatum, quod, voluptatem voluptas quae quia aspernatur,
					</p>
					<button className="header__text-button button-light">
						read more
					</button>
				</div>
			</div>
		</section>
	);
};

export default Header;
