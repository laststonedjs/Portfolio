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
  tailwind,
  nodejs,
  firebase,
  git,
  figma,
  nada_logo,
  elimpark,
  feedback,
  bookNDrive,
  moonwatch,
  bob,
  fox,
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
    title: "React & React Native Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    icon: reactjs,
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
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js and React Native Developer",
    company_name: "Nada.ba",
    icon: nada_logo,
    iconBg: "#383E56",
    date: "October 2021 - November 2022",
    points: [
      "Developing and maintaining web applications using React.js, React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "Nada.ba",
    icon: nada_logo,
    iconBg: "#383E56",
    date: "October 2021 - November 2022",
    points: [
      "Understanding the nature of asynchronous programming and its quirks and workarounds.",
      "Integration of user-facing elements developed by front-end developers with server side logic.",
      "Implementation of security and data protection.",
      "Integration of data storage solutions. Google Firebase was used for the database, so I wrote firebase functions on Node.js.",
    ],
  },
];

const projects = [
  {
    name: "Elimiwait Parking",
    description:
      "Elimiwait Parking is software company that owns a suit of applications for parking lot companies in the USA that aim at improving revenue and user experience, automating the process of parking. I was hired to contribute to the technical development of the product and implement new features to get an optimal end product. I also was a member of the team responsible for front-end parts, as well as the upgrade of fundamental dependencies and the restructuration of the vue.js software to React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
    ],
    image: elimpark,
    source_code_link: "https://elimiwaitparking.com/",
  },
  {
    name: "Feedback.Exchange",
    description:
      "Feedback.Exchange is a b2b an Enterprise software with a complicated from scratch built front-end and backend. On this project I served as a junior developer responsible for day to day operations and impementation of the new features, among other things. The Feedback.exchange front-end is built using very little dependencies and all in a custom code to support the modern UI. The entire backend is built in a microservice architecture with a serverless implementation. The front end is built using React, the backend using Node.js and Firebase and the database is Firestore.",
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
        name: "google firebase",
        color: "pink-text-gradient",
      },
    ],
    image: feedback,
    source_code_link: "https://feedback.exchange/",
  },
  {
    name: "BookNDrive",
    description:
      "BookNDrive is an Enterprise web and mobile app that is used for car sharing. The business is centered in Germany and has 10,000 daily active users. I worked as a junior developer on this enterprise project to help improve the product's everyday functionality. I was in charge of eliminating all bugs and enhancing products quality. The project has a ci/cd set up for two environments qa and production.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
    ],
    image: bookNDrive,
    source_code_link: "https://www.book-n-drive.de/",
  },
  {
    name: "Moon Watch",
    description:
      "Implemented the ability to switch between themes (Dark & Light). Ability to search for Movies and TV Shows fetched data from the 'TheMovieDB' website. Configured endpoints on the server side for displaying movies and shows by category (popular, top rated, favorites). Made auth options for 'SignIn' and 'SignUp', the Logged-in User has the option of adding content(movies & shows) to his favorites so that he can remember and watch it maybe later.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
    ],
    image: moonwatch,
    source_code_link: "https://github.com/laststonedjs/MoonWatch_FullStack_Movie_App",
  },
  {
    name: "Bob The SheepO",
    description:
      "Bob the SheepO represents the NFT collection. Two creative experts create it to expand their art and brand expertise into the world of NFT’s by creating a more intimate relationship between Bob the Sheepo’s art, fans, and art collectors, and new-age enthusiasts. I helped to solved the idea and helped with website development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "website",
        color: "green-text-gradient",
      },
    ],
    image: bob,
    source_code_link: "https://bobthesheepo.com/",
  },
  {
    name: "Arctic Foxes",
    description:
      "React Native and Expo CLI application for displaying, adding, editing and updating cute arctic foxes and their detailed display and description. Go deeper and get to know my pets from the far north of the planet, this application also offers you the possibility of inserting, deleting and changing existing foxes from the list.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo-cli",
        color: "green-text-gradient",
      },
    ],
    image: fox,
    source_code_link: "https://github.com/laststonedjs/arctic_foxes_react_native",
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

export { services, technologies, experiences, testimonials, projects };