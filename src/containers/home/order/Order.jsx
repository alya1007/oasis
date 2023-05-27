// eslint-disable-next-line no-unused-vars
import React from "react";
import { orderData } from "../../../data/orderData";
import { OrderImage } from "../../../components";
import "./order.css";

const Order = () => {
	return (
		<section className="order__section section__padding">
			<div className="container">
				<div className="order__section-content">
					<h1 className="section__title order__section-title">
						Order An Article Now
					</h1>
					<div className="order__section-images">
						{orderData.map((item) => (
							<OrderImage
								key={item.id}
								backgroundImage={item.image}
								icon={item.icon}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Order;
