export const aboutSkills = ["Frontend Developer.", "Web designer.", "3D Artist."];

export const headerLinks = [
	{ label: "About", target: "about" },
	{ label: "Education", target: "education" },
	{ label: "Projects", target: "projects" },
	{ label: "Experience", target: "experience" },
	{ label: "Contact", target: "contact" },
];

export const about = {
	photo: "/img/ismail.jpg",
	title: "Hello! I'm Ismail.",
	body1: "Based in Rotterdam, the Netherlands.",
	body2: "I have a real passion for creating projects that are not only functional but also visually attractive. My skill set is diverse, covering everything from frontend development to designing.",
	body3: "When I'm not working on projects, I'm likely to be found either at the gym or working on my car. Bodybuilding is more than just exercise for me; it's a way to stay fit and focused. And there's a certain enjoyment I find in tinkering with my car — it's my own way of relaxing and enjoying some quiet time.",
};

export const education = [
	{
		id: 1,
		year: "2010 - 2014",
		title: "VMBO-Kader",
		school: "Lentiz Floracollege",
		description: "VMBO",
	},
	{
		id: 2,
		year: "2014 - 2015",
		title: "Automotive Engineering",
		school: "ROC Mondriaan",
		description: "MBO 2",
	},
	{
		id: 3,
		year: "2015 - 2018",
		title: "Software Engineering",
		school: "ROC Mondriaan",
		description: "MBO 4",
	},
	{
		id: 4,
		year: "2018 - 2024",
		title: "Creative Media & Game Technologies",
		school: "Rotterdam University of Applied Sciences",
		description: "HBO",
	},
];

export const projects = [
	{
		id: 1,
		title: "YAMOTION",
		description: [
			{
				body1: "YAMOTION is my freelance web development business, specializing in Framer websites and Shopify webshops with a focus on design, performance, and user experience. I create modern, interactive, and high-quality web solutions tailored to clients' needs.",			},
		],
		image: "/projects/yamotion.png",
		links: [
			{
				label: "Visit website",
				url: "https://yamotion.com/",
			},
		],
		tools: [
			{
				label: "Framer",
				image: "https://img.icons8.com/color/48/000000/a-frame.png",
			},
			{
				label: "React",
				image: "https://img.icons8.com/color/48/000000/8th-wall.png",
			},
		],
	},
	{
		id: 2,
		title: "Global Power Services",
		description: [
			{
				body1: "This client specializes in providing generators and expertise in maintenance and repair services. Their goal is to ensure reliable power solutions for every customer.",
				body2: "This website was created to showcase their wide range of products and services, as well as their commitment to delivering in the generator industry. With a user-friendly design and detailed content, the platform ensures customers can easily find the right solutions for their power needs.",
			},
		],
		image: "/projects/global-pow.png",
		links: [
			{
				label: "Visit website",
				url: "https://global-pow.com/",
			},
		],
		tools: [
			{
				label: "Framer",
				image: "https://img.icons8.com/color/48/000000/a-frame.png",
			},
			{
				label: "React",
				image: "https://img.icons8.com/color/48/000000/8th-wall.png",
			},
		],
	},
	{
		id: 3,
		title: "CP-AR",
		description: [
			{
				body1: "CP-AR is a web-AR experience to make sure you know the basics of first aid actions for a heart attack emergency.",
				body2: "CP-AR was my thesis project that I had the opportunity to develop for my studies in Creative Media & Game Technologies. Extensive research was done on the areas where improvements could be made within heart attack emergencies in the Netherlands.",
			},
		],
		image: "/projects/cp-ar.png",
		links: [
			{
				label: "Visit website (recommended for mobile)",
				url: "https://cp-ar.vercel.app/",
				code: `<a data-8code="39qav"></a><script src="//cdn.8thwall.com/web/share/embed8.js"></script>`,
			},
		],
		tools: [
			{
				label: "A-Frame",
				image: "https://img.icons8.com/color/48/000000/a-frame.png",
			},
			{
				label: "8th Wall",
				image: "https://img.icons8.com/color/48/000000/8th-wall.png",
			},
			{
				label: "Blender",
				image: "https://img.icons8.com/color/48/000000/blender-3d.png",
			},
		],
	},
	{
		id: 4,
		title: "Achromira",
		description: [
			{
				body1: "Achromira is a story rich platformer where Mira, the character you play as, has to search for all the crystal shards in order to restore colour to her own world and that of others. Follow her on her journey to rescue three unique worlds, Achrome City, Rutate and Gryd.",
				body2: "This was the second project with the game development minor. As an artist within the team, I've worked mainly on the first level of the game. Almost all the assets in this level are done by me. Next to that I've also worked on various assets in other levels.",
			},
		],
		image: "/projects/achromira.png",
		links: [
			{
				label: "Play game",
				url: "https://store.steampowered.com/app/1809760/Achromira/",
			},
		],
		tools: [
			{
				label: "Unity",
				image: "https://img.icons8.com/ios-filled/50/000000/unity.png",
			},
			{
				label: "Blender",
				image: "https://img.icons8.com/color/48/000000/blender-3d.png",
			},
			{
				label: "Illustrator",
				image: "https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png",
			},
		],
	},
	// {
	//     id: 3,
	//     title: "Waar Bekken Ik?",
	//     description: [
	//         {
	//             body1: "This was another schoolproject where I and my team had to solve a problem that medical students at the Erasmus University were facing. The pelvis is one of the few parts of the human body that is very difficult for students to understand only from books. We made a 3D visualization that makes the pelvis clear to students by showing it from different perspectives.",
	//             body2: "This was a long project that lasted six months. During that time, we worked with the scrum and agile principles. In addition, the special thing about this project is that it is a long-term project. Hopefully next year's CMGT students will continue with it.",
	//         },
	//     ],
	//     image: "/projects/waarbekkenik.png",
	//     links: [
	//         {
	//             label: "Read more",
	//             url: "https://cmgt.hr.nl/projecten/waar-bekken-ik",
	//         },
	//     ],
	//     tools: [
	//         {
	//             label: "Unity",
	//             image: "https://img.icons8.com/color/48/000000/react-native.png",
	//         },
	//         {
	//             label: "React",
	//             image: "https://img.icons8.com/color/48/000000/react-native.png",
	//         },
	//     ],
	// },
	// {
	//     id: 1,
	//     title: "Porta Da Vida",
	//     description: [
	//         {
	//             body1: "Porta Da Vida is a nursing home located in Holtum - the Netherlands. They provide two services: daytime activities for seniors and an atelier for young dementia patients.",
	//             body2: "The client wanted a split-design for the homepage that would make it easy for users to find the information they need.",
	//         },
	//     ],
	//     image: "/projects/portadavida.png",
	//     links: [
	//         {
	//             label: "Visit website",
	//             url: "https:/portadavida.nl/",
	//         },
	//     ],
	//     tools: [
	//         {
	//             label: "Framer",
	//             image: "https://img.icons8.com/color/48/000000/framer.png",
	//         },

	//     ],
	// },
	// {
	//     id: 2,
	//     title: "Fashioncheque - Shopfinder",
	//     description: [
	//         {
	//             body1: "This client wanted a integration in their website that would make it easy for users to find the nearest store that accepts Fashioncheque. ",
	//             body2: "Their previous solution was outdated and did not meet the requirements of the current time. ",
	//         },
	//     ],
	//     image: "/projects/shopfinder.png",
	//     links: [
	//         {
	//             label: "Visit website",
	//             url: "https://www.fashioncheque.com/nl-nl/shopfinder",
	//         },
	//     ],
	//     tools: [
	//         {
	//             label: "React",
	//             image: "https://img.icons8.com/color/48/000000/a-frame.png",
	//         },
	//         {
	//             label: "Typescript",
	//             image: "https://img.icons8.com/color/48/000000/8th-wall.png",
	//         },
	//         {
	//             label: "Storybook",
	//             image: "https://img.icons8.com/color/48/000000/blender-3d.png",
	//         },
	//         {
	//             label: "Tailwind",
	//             image: "https://img.icons8.com/color/48/000000/blender-3d.png",
	//         },
	//     ],
	// },
	// {
	//     id: 3,
	//     title: "CP-AR",
	//     description: [
	//         {
	//             body1: "CP-AR is a web-AR experience to make sure you know the basics of first aid actions for a heart attack emergency.",
	//             body2: "CP-AR was my thesis project that I had the opportunity to develop for my studies in Creative Media & Game Technologies. Extensive research was done on the areas where improvements could be made within heart attack emergencies in the Netherlands.",
	//         },
	//     ],
	//     image: "/projects/cp-ar.png",
	//     links: [
	//         {
	//             label: "Visit website (recommended for mobile)",
	//             url: "https://cp-ar.vercel.app/",
	//             code: `<a data-8code="39qav"></a><script src="//cdn.8thwall.com/web/share/embed8.js"></script>`,
	//         },
	//     ],
	//     tools: [
	//         {
	//             label: "A-Frame",
	//             image: "https://img.icons8.com/color/48/000000/a-frame.png",
	//         },
	//         {
	//             label: "8th Wall",
	//             image: "https://img.icons8.com/color/48/000000/8th-wall.png",
	//         },
	//         {
	//             label: "Blender",
	//             image: "https://img.icons8.com/color/48/000000/blender-3d.png",
	//         },
	//     ],
	// },
	// {
	//     id: 4,
	//     title: "Achromira",
	//     description: [
	//         {
	//             body1: "Achromira is a story rich platformer where Mira, the character you play as, has to search for all the crystal shards in order to restore colour to her own world and that of others. Follow her on her journey to rescue three unique worlds, Achrome City, Rutate and Gryd.",
	//             body2: "This was the second project with the game development minor. As an artist within the team, I've worked mainly on the first level of the game. Almost all the assets in this level are done by me. Next to that I've also worked on various assets in other levels.",
	//         },
	//     ],
	//     image: "/projects/achromira.png",
	//     links: [
	//         {
	//             label: "Visit website",
	//             url: "https://store.steampowered.com/app/1809760/Achromira/",
	//         },
	//     ],
	//     tools: [
	//         {
	//             label: "Unity",
	//             image: "https://img.icons8.com/ios-filled/50/000000/unity.png",
	//         },
	//         {
	//             label: "Blender",
	//             image: "https://img.icons8.com/color/48/000000/blender-3d.png",
	//         },
	//         {
	//             label: "Illustrator",
	//             image: "https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png",
	//         },
	//     ],
	// },
	// {
	//     id: 5,
	//     title: "Waar Bekken Ik?",
	//     description: [
	//         {
	//             body1: "This was another schoolproject where I and my team had to solve a problem that medical students at the Erasmus University were facing. The pelvis is one of the few parts of the human body that is very difficult for students to understand only from books. We made a 3D visualization that makes the pelvis clear to students by showing it from different perspectives.",
	//             body2: "This was a long project that lasted six months. During that time, we worked with the scrum and agile principles. In addition, the special thing about this project is that it is a long-term project. Hopefully next year's CMGT students will continue with it.",
	//         },
	//     ],
	//     image: "/projects/waarbekkenik.png",
	//     links: [
	//         {
	//             label: "Read more",
	//             url: "https://cmgt.hr.nl/projecten/waar-bekken-ik",
	//         },
	//     ],
	//     tools: [
	//         {
	//             label: "Unity",
	//             image: "https://img.icons8.com/color/48/000000/react-native.png",
	//         },
	//         {
	//             label: "React",
	//             image: "https://img.icons8.com/color/48/000000/react-native.png",
	//         },
	//     ],
	// },
	// {
	//     id: 6,
	//     title: "VIUW makelaars",
	//     description: [
	//         {
	//             body1:"This client wanted a sleek and modern website that would make it easy for users to find the information they need. I've created this website that is easy to navigate and has a clean design. The website is fully responsive and works on all devices.",
	//             body2: "They specialze in taxations, sales and purchases of homes in the Netherlands.",
	//         },
	//     ],
	//     image: "/projects/viuw.png",
	//     links: [
	//         {
	//             label: "Visit website",
	//             url: "hhttps://www.viuwmakelaars.nl/",
	//         },
	//     ],
	//     tools: [
	//         {
	//             label: "Framer",
	//             image: "https://img.icons8.com/color/48/000000/react-native.png",
	//         }
	//     ],
	// },
	// {
	//     id: 7,
	//     title: "Raamdesign Discounter ",
	//     description: [
	//         {
	//             body1: "This client specializes in custom pleated curtains. They wanted a shopify webshop with a modern, easy to navigate and has a clean design with an epmhasis on a yellow/gold and black/gray design. ",
	//         },
	//     ],
	//     image: "/projects/raamdesign.png",
	//     links: [
	//         {
	//             label: "Visit webshop",
	//             url: "https://raamdesigndiscounter.nl/",
	//         },
	//     ],
	//     tools: [
	//         {
	//             label: "Shopify",
	//             image: "https://img.icons8.com/color/48/000000/react-native.png",
	//         },
	//     ],
	// },
];

export const experiences = {
	experience: [
		{
			id: 5,
			label: "React",
			image: "/icons/react.svg",
		},
		{
			id: 4,
			label: "TypeScript",
			image: "/icons/typescript.svg",
		},
		{
			id: 9,
			label: "Tailwind",
			image: "/icons/tailwind.svg",
		},
		{
			id: 13,
			label: "NextJS",
			image: "/icons/next.svg",
		},
		{
			id: 1,
			label: "Adobe CC",
			image: "/icons/cc.svg",
		},
		{
			id: 2,
			label: "Figma",
			image: "/icons/figma.svg",
		},
		{
			id: 1,
			label: "GitHub",
			image: "/icons/github.svg",
		},
		{
			id: 3,
			label: "Jira",
			image: "/icons/jira.svg",
		},
		{
			id: 4,
			label: "Claude AI",
			image: "/icons/claudeai.svg",
		},
		{
			id: 4,
			label: "ChatGPT",
			image: "/icons/chatgpt.svg",
		},
		{
			id: 5,
			label: "Blender",
			image: "/icons/blender.svg",
		},
		{
			id: 8,
			label: "Framer",
			image: "/icons/framer.svg",
		},
	],
};

export const socials = [
	{
		id: 1,
		label: "Github",
		link: "https://github.com/IsmailYaman",
		image: "/icons/github.svg",
	},
	{
		id: 2,
		label: "LinkedIn",
		link: "https://www.linkedin.com/in/ismail-kayadelen-56a0b6133/",
		image: "/icons/linkedin.svg",
	},
];
