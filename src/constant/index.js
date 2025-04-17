/** @format */

import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	Airbnb,
	leetcode,
	gfg,
	coding_ninjas,
	github2,
	cpp,
	phoneCall,
	linkedin,
	EdTech,
	SwarnimBharat,
	Aliste,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Experience & Profiles",
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
		title: "MERN Stack",
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
	{
		title: "Git & GitHub",
		icon: github2,
	},
];

const technologies = [
	{
		name: "C++",
		icon: cpp,
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
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},

	{
		name: "Git",
		icon: git,
	},
	{
		name: "HTML",
		icon: html,
	},
	{
		name: "CSS",
		icon: css,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
];

const experiences = [
	{
		title: "Full-Stack Intern",
		company_name: "@Aliste Technologies",
		icon: Aliste,
		iconBg: "#383E56",
		date: "Jan-2025 (4 Months)",
		points: [
			"Optimized backend APIs, improving performance by 2.4x, resolving critical bugs, and enhancing system architecture, which led to faster response times, improved stability, and a more efficient user experience.",
			"Designed and implemented a Device Tracker System to replace manual notebook tracking, resulting in a 10x improvement in operational efficiency and enhanced accountability and asset visibility across teams.",
			"Developed and deployed an Expense Tracker to automate expense reporting, eliminating the reliance on ad-hoc methods (email/WhatsApp), and improving internal workflows, leading to an 60-70% increase in efficiency for processing and tracking expenses.",
		],
		link: "",
	},
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

const socials = [
	{
		id: 1,
		name: "+91 88698 26279",
		icon: phoneCall,
		link: "/",
	},
	{
		id: "3",
		name: "Linkedin",
		icon: linkedin,
		link: "https://www.linkedin.com/in/harsh-bhardwaj-28491a249/",
	},
	{
		id: "4",
		name: "Github",
		icon: github2,
		link: "https://github.com/harshbhar0629/",
	},
];

const projects = [
	{
		name: "Ed-Tech Platform",
		description:
			"StudyNotion is a full-stack EdTech platform developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), built to support structured learning and course management for both students and instructors. It features user authentication with JWT and OTP, course creation and consumption workflows, Razorpay integration for payments, and media storage via Cloudinary. The application follows a modular REST API design and is deployed using Vercel (frontend), Railway/Render (backend), and MongoDB Atlas (database). Designed with scalability and maintainability in mind, it also lays the foundation for future capabilities like personalized learning paths, gamification, and a mobile application.",
		tags: [
			{
				name: "Nodejs",
				color: "blue-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "ExpressJs",
				color: "blue-text-gradient",
			},
			{
				name: "ReactJs",
				color: "green-text-gradient",
			},
			{
				name: "TailwindCSS",
				color: "pink-text-gradient",
			},
		],
		image: EdTech,
		source_code_link: "https://github.com/harshbhar0629/Ed-Tech-Platform",
	},
	{
		name: "Swarnim Bharat",
		description:
			"Swarnim Bharat is a React.js-based web application designed to present India’s cultural and historical heritage through structured content and interactive components. The platform includes secure login and signup functionality, managed using React Redux for predictable and scalable state management. It features image carousels (Slick Carousel) to highlight over 30 cultural landmarks, Google Map React and embedded iframes for spatial context, and React-Speech integration to support accessibility through text-to-speech. Built with React.js, Redux, NPM, Reactstrap, and Remixicon, the application follows responsive design principles and delivers consistent performance across devices.",
		tags: [
			{
				name: "Nodejs",
				color: "blue-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "ExpressJs",
				color: "blue-text-gradient",
			},
			{
				name: "ReactJs",
				color: "green-text-gradient",
			},
			{
				name: "Bootstrap",
				color: "pink-text-gradient",
			},
		],
		image: SwarnimBharat,
		source_code_link: "https://github.com/harshbhar0629/Swarnim-Bharat",
	},
];

const personalInfo = {
	MY_EMAIL: "harshbhar.0629@gmail.com",
	TEMPLATE_ID: "template_2bbruve",
	SERVICE_ID: "service_4fhjky4",
	PUBLIC_ID: "ORPIVrUB91WOaDgK-",
};

export { services, technologies, experiences, projects, socials, personalInfo };
