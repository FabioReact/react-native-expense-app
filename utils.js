export const categories = [
	{id: 1, name: "Food & Drinks", icon: require("./assets/food.png")},
	{id: 2, name: "Electronics", icon: require("./assets/smartphone.png")},
	{id: 3, name: "Clothing & Shoes", icon: require("./assets/clothes.png")},
	{id: 4, name: "Furnitures & Decoration", icon: require("./assets/furniture.png")},
	{id: 5, name: "Transport", icon: require("./assets/car.png")},
	{id: 6, name: "Sport & Hobbies", icon: require("./assets/sport.png")},
	{id: 7, name: "Health", icon: require("./assets/heart.png")},
	{id: 8, name: "Beauty", icon: require("./assets/beauty.png")},
	{id: 9, name: "Others", icon: require("./assets/more.png")},
]

export const transactions = [
	{
		date: "Today",
		data: [
			{title: "Nike Store", price: 59, categoryId: 3},
			{title: "Uber", price: 9.41, categoryId: 5},
		],
	},
	{
		date: "08 August",
		data: [
			{title: "Apple Store", price: 1299, categoryId: 2},
			{title: "Mark & Spencer", price: 64.79, categoryId: 1},
		],
	},
	{
		date: "03 August",
		data: [{title: "Lush", price: 7.99, categoryId: 8}],
	},
	{
		date: "25 July",
		data: [
			{title: "Dentist", price: 155, categoryId: 7},
			{title: "Ikea", price: 42.35, categoryId: 4},
			{title: "Soccer practice", price: 3, categoryId: 6},
		],
	},
]
