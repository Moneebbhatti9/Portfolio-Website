import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  react,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  bootstrap,
  tripguide,
  Fidsor,
  Eziline,
  jevistroom,
  accounting,
  spacejobwebsite,
  Natour,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Figma To React",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: react,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Eziline Software House",
    icon: Eziline,
    iconBg: "#383E56",
    date: "July 2021 - October 2023",
    points: [
      "I have Explored the Front-end Development of web application",
      "I have learnt HTML, CSS, JavaScript Also work with Bootstrap and Sass, React.js",
      "Followed SDLC best practices.Use regulatory and compliance standards for user interface designs",
      "Researched emerging web technologies and trends for possible incorporation into sites like Bootstrap Sass React.js Coded using HTML, CSS, and JavaScript to develop features for both mobile and desktop platforms",
      "Transformed native applications into mobile-friendly products. Produced websites compatible with multiple browsers",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Fidsor Pvt ltd",
    icon: Fidsor,
    iconBg: "#383E56",
    date: "July 2023 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "As a React.js Developer on an Enterprise-Level Accounting Application, I played a key role in developing and enhancing core functionalities with a strong focus on user authentication, security, and user experience and maintain its databases along with authentication with SQL",
      "Learn State Management Tool Redux-Thunk",
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
    name: "JeviStroom",
    description:
      "EV Platform software, which is developed to manage the EV charging station system and can be used with EV station operators without having to pay software development fees",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Emotion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jevistroom,
    source_code_link: "https://jevistroom.com/",
  },
  {
    name: "Accounting Application",
    description:
      "Web application that enable the user to maintain it whole company accounts, their schedules , expenses, income, Empolyee management etc",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "purple-text-gradient",
      },
      {
        name: "MUI",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "pink-text-gradient",
      },
    ],
    image: accounting,
    source_code_link:
      "https://github.com/Moneebbhatti9/Enterprise-Accounting-FidsorProject",
  },
  {
    name: "Join The Space Website",
    description:
      "Web application that enable the job seeker to check for the availability of roles in Space Company",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "purple-text-gradient",
      },
      {
        name: "Three Js",
        color: "blue-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: spacejobwebsite,
    source_code_link: "https://www.jointhe.space/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://ranaratour.com/",
  },
  {
    name: "Natour",
    description:
      "A comprehensive travel booking platform that allows users to book Tour Plans.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Natour,
    source_code_link: "https://natour-website.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
