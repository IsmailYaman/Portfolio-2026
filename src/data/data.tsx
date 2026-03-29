export const aboutSkills = ["Frontend Developer.", "Web designer.","3D Artist."];

export const about = {
    photo: "/img/ismail.jpg",
    title: "Hello! I'm Ismail.",
    description: "I have a real passion for creating projects that are not only functional but also visually attractive. My skill set is diverse, covering everything from frontend development to designing.",
};

export const education = [
    {
        id: 1,
        year: "2015 - 2018",
        title: "Software Engineering",
        school: "ROC Mondriaan",
        degree: "MBO 4",
        description: "Shifted my focus to Software Engineering, where I could explore my passion for technology and computers. Gained valuable experience in both frontend and backend development, with a strong preference for frontend work due to the immediate visual feedback and creative possibilities."
    },
    {
        id: 2,
        year: "2018 - 2024",
        title: "Creative Media & Game Technologies",
        school: "Rotterdam University of Applied Sciences",
        degree: "HBO",
        description: "Pursued a degree in Creative Media & Game Technologies with emphasis on frontend development and design. This program solidified my passion for creative frontend development, focusing on visually appealing and functional projects with user-friendly interfaces."
    },
];

// Career / Work Experience
export const career = [
    {
        id: 1,
        year: "2023 - Present",
        title: "Frontend Developer",
        company: "Notive IT Innovation Partner",
        location: "Rotterdam, Netherlands",
        description: "[ADD YOUR DESCRIPTION] - Working on innovative web solutions, building modern interfaces with React and Next.js. Contributing to client projects and internal tooling.",
        technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        type: "Full-time",
    },
    {
        id: 2,
        year: "2022 - Present",
        title: "Frontend Developer & Designer",
        company: "Ventaro",
        location: "Netherlands",
        description: "[ADD YOUR DESCRIPTION] - Designing and developing custom websites and web applications. Creating user-centered designs and implementing them with modern web technologies.",
        technologies: ["React", "Framer", "Figma", "Tailwind CSS"],
        type: "Freelance",
    },
    {
        id: 3,
        year: "2021 - Present",
        title: "Creative Developer & 3D Artist",
        company: "YAMOTION",
        location: "Netherlands",
        description: "[ADD YOUR DESCRIPTION] - Creating interactive 3D experiences and web-based animations. Combining technical development with creative 3D art and motion design.",
        technologies: ["Three.js", "Blender", "WebGL", "React"],
        type: "Freelance",
    },
];

export const projects = [
    {
        id: 1,
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
        id: 2,
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
    {
        id: 3,
        title: "Waar Bekken Ik?",
        description: [
            {
                body1: "This was another schoolproject where I and my team had to solve a problem that medical students at the Erasmus University were facing. The pelvis is one of the few parts of the human body that is very difficult for students to understand only from books. We made a 3D visualization that makes the pelvis clear to students by showing it from different perspectives.",
                body2: "This was a long project that lasted six months. During that time, we worked with the scrum and agile principles. In addition, the special thing about this project is that it is a long-term project. Hopefully next year's CMGT students will continue with it.",
            },
        ],
        image: "/projects/waarbekkenik.png",
        links: [
            {
                label: "Read more",
                url: "https://cmgt.hr.nl/projecten/waar-bekken-ik",
            },
        ],
        tools: [
            {
                label: "Unity",
                image: "https://img.icons8.com/color/48/000000/react-native.png",
            },
            {
                label: "React",
                image: "https://img.icons8.com/color/48/000000/react-native.png",
            },
        ],
    },
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
    programming: [
        {
            id: 4,
            label: "TypeScript",
            image: "/icons/typescript.svg",
        },
        {
            id: 5,
            label: "React",
            image: "/icons/react.svg",
        },
        {
            id: 6,
            label: "Node.js",
            image: "/icons/nodejs.svg",
        },
        {
            id: 7,
            label: "PHP",
            image: "/icons/php.svg",
        },
        {
            id: 8,
            label: "MySQL",
            image: "/icons/mysql.svg",
        },
        {
            id: 9,
            label: "Tailwind",
            image: "/icons/tailwind.svg",
        },
        {
            id: 10,
            label: "Bootstrap",
            image: "/icons/bootstrap.svg",
        },
        {
            id: 11,
            label: "jQuery",
            image: "/icons/jquery.svg",
        },
        {
            id: 12,
            label: "Laravel",
            image: "/icons/laravel.svg",
        },
        {
            id: 13,
            label: "NextJS",
            image: "/icons/next.svg",
        },
    ],
    design: [
        {
            id: 1,
            label: "Photoshop",
            image: "/icons/photoshop.svg",
        },
        {
            id: 2,
            label: "Illustrator",
            image: "/icons/illustrator.svg",
        },
        {
            id: 3,
            label: "XD",
            image: "/icons/xd.svg",
        },
        {
            id: 4,
            label: "After Effects",
            image: "/icons/aftereffects.svg",
        },
        {
            id: 5,
            label: "Premiere Pro",
            image: "/icons/premiere-pro.svg",
        },
        {
            id: 6,
            label: "Figma",
            image: "/icons/figma.svg",
        },
    ],
    other: [
        {
            id: 1,
            label: "Framer",
            image: "/icons/framer.svg",
        },
        {
            id: 1,
            label: "Shopify",
            image: "/icons/shopify.svg",
        },
        {
            id: 1,
            label: "GitHub",
            image: "/icons/github.svg",
        },
        {
            id: 2,
            label: "Azure DevOps",
            image: "/icons/azure.svg",
        },
        {
            id: 3,
            label: "Jira",
            image: "/icons/jira.svg",
        },
        {
            id: 4,
            label: "Wordpress",
            image: "/icons/wordpress.svg",
        },
        {
            id: 5,
            label: "Blender",
            image: "/icons/blender.svg",
        },
        {
            id: 6,
            label: "Unity",
            image: "/icons/unity.svg",
        },
        {
            id: 7,
            label: "Unreal Engine",
            image: "/icons/ue4.svg",
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
