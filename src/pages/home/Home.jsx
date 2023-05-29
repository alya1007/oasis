// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Article, Brand, CTA, Feature, Navbar } from "./../../components";
import {
	Services,
	Best,
	Footer,
	Header,
	Info,
	NewPosts,
	Order,
	OrderInfo,
} from "./../../containers";
const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Services />
			<Best />
			<Info />
			<NewPosts />
			<Order />
			<OrderInfo />
			<Footer />
		</div>
	);
};

export default Home;
