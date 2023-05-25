// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Article, Brand, CTA, Feature, Navbar } from "./../../components";
import {
	Services,
	Best,
	Contact,
	Footer,
	Header,
	Info,
	NewPosts,
	Order,
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
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
