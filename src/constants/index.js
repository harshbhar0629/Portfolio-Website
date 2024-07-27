/** @format */

import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	Airbnb,
	shoppingCart,
	blogContext,
	carrent,
	jobit,
	leetcode,
	gfg,
	coding_ninjas,
	tripguide,
	threejs,
	snakeGame,
	razorpayClone,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Profiles",
	},
	{
		id: "project",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Data Structures and Algorithms",
		icon: creator,
	},
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Frontend Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},

	{
		name: "git",
		icon: git,
	},
];

const experiences = [
	{
		title: "harshbhar_0629",
		company_name: "Leetcode",
		icon: leetcode,
		iconBg: "#383E56",
		date: "900+ Questions",
		points: [
			" Achieved a contest rating of 1900+ and secured the Knight badge on LeetCode, ranking in the top 4.49% globally.",
			"During problem-solving on Leetcode, I'm understand the crux of complex problems and how to approach Data Structures and Algorithms questions effectively. ",
		],
		link: "https://leetcode.com/u/harshbhar_0629/",
	},
	{
		title: "harshbhogui",
		company_name: "GeeksforGeeks",
		icon: gfg,
		iconBg: "#383E56",
		date: "200+ Questions",
		points: [
			" Achieved a contest rating of 1800+ and secured the 4⭐ on GFG, overall rank 846.",
			"During problem-solving on GeeksforGeeks, I'm understand the crux of complex problems and how to approach Data Structures and Algorithms questions effectively. ",
		],
		link: "https://www.geeksforgeeks.org/user/harshbhogui/",
	},
	{
		title: "Harsh Bhardwaj",
		company_name: "Code360 by Coding Ninjas",
		icon: coding_ninjas,
		iconBg: "#383E56",
		date: "100+ Questions",
		points: [
			" Achieved a contest rating of 2500+ and secured the Master badge, ranking in the top 8% globally.",
			"During problem-solving on Coding ninjas, I'm understand the crux of complex problems and how to approach Data Structures and Algorithms questions effectively.",
		],
		link: "https://www.naukri.com/code360/profile/4e6dc998-0250-4542-806e-41a267198e57",
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Airbnb",
		description:
			"Developed a full-stack project with the MVC framework for managing property listings and bookings. Incorporated user authentication, database relationships, and RESTful APIs. Designed a UI similar to Airbnb’s, boosting user engagement by 30% through improved navigation and interactivity. Achieved a 40% reduction in code duplication with a modular and scalable architecture. Enhanced maintainability for future upgrades.",
		tags: [
			{
				name: "Nodejs",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "blue-text-gradient",
			},

			{
				name: "bootstrap",
				color: "pink-text-gradient",
			},
		],
		image: Airbnb,
		source_code_link:
			"https://github.com/harshbhar0629/Major-project/tree/main/major-project01",
	},
	{
		name: "Shopping-Cart",
		description:
			"Implemented React.js, Redux Toolkit, and React Router for smooth navigation and state management, improving responsiveness by 40%. Enhanced the homepage with real-time product images and descriptions, boosting user engagement by 25%. Enabled instant feedback on add/remove actions, reducing error rates by 30%. Added a cart feature allowing users to add and remove items, further enhancing the user experience.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "redux-toolkit",
				color: "green-text-gradient",
			},
			{
				name: "tailwindCSS",
				color: "pink-text-gradient",
			},
		],
		image: shoppingCart,
		source_code_link:
			"https://github.com/harshbhar0629/ReactJs/tree/main/React_Advance/shopping_cart",
	},
	{
		name: "Blog-Context",
		description:
			"I've developed a dynamic blog application using React.js and the React Context API. It features interactive cards with details like title, author, date, description, and hashtags. Key features include clickable hashtags for related information, title-based search for posts, and efficient data management through centralized API fetching. This approach enhances performance and simplifies state management, making the app more scalable and maintainable.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "ApiContext",
				color: "green-text-gradient",
			},
			{
				name: "tailwindCSS",
				color: "pink-text-gradient",
			},
		],
		image: blogContext,
		source_code_link:
			"https://github.com/harshbhar0629/ReactJs/tree/main/React_Advance/blog-context",
	},
	{
		name: "Snake Game",
		description:
			"I’ve completed a modern version of the classic Snake game using JavaScript. The game features a defined boundary, dynamic gameplay with randomly appearing food, and increasing speed with each meal. Smooth controls handle snake movement, collision detection, and scoring. Technologies used include JavaScript for game logic and HTML/CSS for interface design. This project was a great way to enhance my JavaScript skills and put a fresh spin on a childhood favorite.",
		tags: [
			{
				name: "Javascript",
				color: "blue-text-gradient",
			},
			{
				name: "HTML",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: snakeGame,
		source_code_link:
			"https://github.com/harshbhar0629/JavaScript/tree/main/js/Snake_game",
	},
	{
		name: "RazorPay-Clone",
		description:
			"I have completed a Razorpay UI clone project, enhancing my expertise in Tailwind CSS and CSS fundamentals. Tailwind CSS uses pre-defined utility classes for styling, allowing for quick and efficient design directly in HTML. This method is flexible, customizable, and ideal for creating responsive designs. The project presented challenges that deepened my understanding and refined my frontend development skills.",
		tags: [
			{
				name: "HTML",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
			{
				name: "tailwindCSS",
				color: "blue-text-gradient",
			},
		],
		image: razorpayClone,
		source_code_link:
			"https://github.com/harshbhar0629/TailwindCss/tree/main/Tailwind/razor_pay_clone",
	},
];

export { services, technologies, experiences, testimonials, projects };
