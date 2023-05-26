// eslint-disable-next-line no-unused-vars
import React from "react";
import "./best.css";
// import ArticleLeft from "../../../assets/images/article_left.jpg";
import { BestArticle } from "../../../components";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import SideArticle from "../../../components/article/sideArticle/SideArticle";

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
								type="Travel"
								title="Travel"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc ut dignissim sodales."
								icon={<FiArrowUpRight />}
							/>
						</div>
					</div>
					<div className="best__container-right">
						<div className="best__container-right_article">
							<SideArticle
								className="best__container-right_article"
								type="ADS"
								icon={<FiPlus className="side__article-icon" />}
								title="Real Talk In A Corporate World"
								upperTitle="Become A BROADCAST MEMBER"
								link="#"
							/>
						</div>
						<div className="best__container-right_article best__container-right_article-bottom">
							<SideArticle showButton={true} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Best;
