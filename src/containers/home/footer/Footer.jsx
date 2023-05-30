// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<>
			<h1 className="footer__section-title section__title">
				Become A Part Of Our Broadcast
			</h1>
			<section className="section__padding footer__section">
				<div className="container">
					<div className="footer__section-content">
						<h3 className="footer__section-subtitle">Join Now</h3>
						<div className="footer__section-join__fields">
							<input
								type="text"
								placeholder="your name"
								className="footer__section-join__input"
							/>
							<input
								type="text"
								placeholder="your email"
								className="footer__section-join__input"
							/>
							<button className="button-light footer__section-button footer__section-button__submit">
								Submit
							</button>
						</div>
						<div className="footer__section-contact">
							<h5 className="footer__section-contact__description">
								We Wish to Make You a Good Experience
							</h5>
							<div className="footer__section-contact__details">
								<button className="button-contact footer__section-button__contact">
									got any questions?
								</button>
								<button className="button-contact footer__section-button__contact">
									contact us
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
