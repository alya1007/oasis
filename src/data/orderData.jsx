import {
	VscSymbolConstant,
	VscSymbolEnumMember,
	VscSymbolEnum,
	VscSymbolString,
} from "react-icons/vsc";

import { order1, order2, order3, order4 } from "../assets";

export const orderData = [
	{
		id: 1,
		image: order1,
		icon: <VscSymbolConstant />,
	},
	{
		id: 2,
		image: order2,
		icon: <VscSymbolEnumMember />,
	},
	{
		id: 3,
		image: order3,
		icon: <VscSymbolEnum />,
	},
	{
		id: 4,
		image: order4,
		icon: <VscSymbolString />,
	},
];
