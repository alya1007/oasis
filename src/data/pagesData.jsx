import { Home, Articles, Podcasts, Radio, Writer } from "../pages";

export const routes = [
	{
		name: "Home",
		path: "/",
		component: <Home />,
	},
	{
		name: "Articles",
		path: "/articles",
		component: <Articles />,
	},
	{
		name: "Radio",
		path: "/radio",
		component: <Radio />,
	},
	{
		name: "Podcasts",
		path: "/podcasts",
		component: <Podcasts />,
	},
	{
		name: "Writer",
		path: "/writer",
		component: <Writer />,
	},
];
