// eslint-disable-next-line no-unused-vars
import React from "react";
import "./best.css";
// import ArticleLeft from "../../../assets/images/article_left.jpg";
import { BestArticle } from "../../../components";
import { BsArrowUpRight } from "react-icons/bs";

const Best = () => {
	return (
		<section className="section__padding">
			<div className="container">
				<div className="best">
					<div className="best__container-left">
						<div className="best__container-left_title section__title">
							Best of the week
						</div>
						<div>
							<BestArticle
								className="best__container-left_article"
								date="May 12, 2020"
								type="Design"
								title="Create a design system"
								description="A design system is a collection of reusable components, guided by clear standards."
								icon={<BsArrowUpRight />}
							/>
						</div>
					</div>
					<div className="best__container-right">
						<div className="best__container-right_title">right article 1</div>
						<div className="best__container-right_article">right article 2</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Best;
