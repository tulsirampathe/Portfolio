import {
  backend,
  c,
  codenest,
  cpp,
  creator,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkdInClone,
  meta,
  mobile,
  mongodb,
  nodejs,
  npm,
  postman,
  reactjs,
  redux,
  shopify,
  sistec_sih,
  snakeGame,
  sql,
  starbucks,
  tailwind,
  tesla,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Data Structures & Algorithms Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const frontendTechnologies = [
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
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "SQL",
  //   icon: sql,
  // },
];

const backendTechnologies = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const toolsTechnologies = [
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "NPM",
    icon: npm,
  },
];

const programmingLanguages = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
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
    name: "CodeNest",
    description:
      "Designed a coding platform for teachers to create contests and students to practice coding in a competitive environment. Developed a user-friendly interface with a code editor and Google OAuth.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "purple-text-gradient",
      },
    ],
    image: codenest,
    source_code_link: "https://github.com/tulsirampathe/codenest-client",
    live_demo_link: "https://codenest-arww.onrender.com",
  },
  {
    name: "SISTec SIH",
    description:
      "Developed the official website for SISTec Innovation Hackathon 3.0—a flagship college event organized by the Department of Computer Science & Engineering at SISTec Ratibad that challenges students to create innovative solutions in domains like HealthTech, AgriTech, EduTech, and Smart City initiatives.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "purple-text-gradient",
      },
    ],
    image: sistec_sih,
    source_code_link: "",
    live_demo_link: "https://www.sistecrsih.in/",
  },
  {
    name: "TechLink",
    description:
      "Created a social networking platform with features like user registration, profile management, and post creation. Designed a responsive interface using Tailwind CSS and secured authentication with JWT.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "red-text-gradient",
      },
    ],
    image: linkdInClone,
    source_code_link: "https://github.com/tulsirampathe/LinkedIn-Clone",
  },
  {
    name: "Snake Game",
    description:
      "A classic Snake Game built using HTML5 Canvas, JavaScript, and CSS. Control the snake, eat the food, and grow as long as possible while avoiding collisions with the walls and your own body!",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: snakeGame,
    source_code_link: "https://github.com/tulsirampathe/Snake-Game",
    live_demo_link: "https://snake-game-mu-one.vercel.app",
  },
];

const socialMediaLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tulsiram-pathe-03b7b9258/",
    img: "./social_media/linkedin.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/tulsirampathe",
    img: "./social_media/github.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tulsiram_pathe_/",
    img: "./social_media/instagram.png",
  },
];
export {
  backendTechnologies,
  experiences,
  frontendTechnologies,
  programmingLanguages,
  projects,
  services,
  technologies,
  testimonials,
  toolsTechnologies,
  socialMediaLinks,
};
