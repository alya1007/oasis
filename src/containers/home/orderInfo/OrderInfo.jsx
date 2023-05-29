import { useState } from "react";
import "./orderInfo.css";
import { orderInfoData } from "../../../data/orderInfoData";
import { TitleLink } from "../../../components";

const OrderInfo = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleClick = (e) => {
		const index = parseInt(e.target.textContent) - 1;
		setActiveIndex(index);
	};

	return (
		<section className="order-info__section section__padding">
			<div className="container">
				<div className="order-info__section-content">
					<h3 className="order-info__section-title">How Does It Work?</h3>
					<div className="order-info__section-buttons">
						{orderInfoData.map((item, index) => {
							return (
								<button
									key={index}
									className={`order-info__section-button ${
										index === 1 ? "middle-button" : ""
									} ${index === 0 ? "first-button" : ""} ${
										index === 2 ? "last-button" : ""
									} ${index === activeIndex ? "active-button" : ""}`}
									onClick={handleClick}
								>
									{item.title}
								</button>
							);
						})}
					</div>
					<h4 className="order-info__section-description">
						{orderInfoData[activeIndex].description}
					</h4>
					<h5 className="order-info__section-subdescription">
						{orderInfoData[activeIndex].subDescription}
					</h5>
					<TitleLink
						text="Order Now"
						link="#"
						fontSize={"1.3rem"}
						className={"order-info__section-link"}
					/>
				</div>
			</div>
		</section>
	);
};

export default OrderInfo;
