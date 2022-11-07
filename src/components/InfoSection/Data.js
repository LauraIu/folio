// https://www.freeformatter.com/json-escape.html#before-output
// https://www.knowledgehut.com/blog/web-development/react-dangerouslysetinnerhtml

// To do - Json-escape or Json stringify or dangerouslysetinnerhtml!!!?

export const About = {
  id: "about",
  lightBg: false,
  lightText: true,
  // lightTextDescription: true,
  topLine: "Hi there!",
  headLine: "I'm Laura Iuga",
  description:
    'It was more than a year ago when I decided to change my workpath and achieve specific knowledge in web development to make things that I really like. I have an MA degree in Media Art and before I worked in marketing, archive digitization, data handling and researching, made freelance web and graphic designs, organized NGO projects, and so on. Like I\'m enthusiastic about "making things work" and have the desire to create amazing things from scratch, choosing the Front-End was more than evident for me. So I made my big step. After quitting my job I attended ',
  urlLink: "https://codecool.com",
  linkText: "Codecool",
  description2:
    "'s Junior Front-End course. I have learned that building beautiful visual experiences and turning them interactive is a very complex workflow, but I've decided to make the magic happen. So here I am searching for opportunities to become an efficient part of your team where I can start my developer career! Please feel free to take a look at my CV to find out more about me.",
  
  // I love bringing life and functionality to designs, building handsome visual experiences and turning them interactive.
  buttonLabel1: "Read my CV",
  buttonLabel2: "Contact me!",
  dark: true,
  primary: true,
  darkText: false,

  imgStart: false,
  img: require("../../images/Iuga_Laura_portrait_04.png"),
  alt: "IuLa_profil.png",
  projectUrl1: new URL("https://github.com/LauraIu/"),
  projectUrl2: new URL("mailto:iuga.laura.katalin@gmail.com"),
};

export const PortfolioPage = {
  id: "projects",
  lightBg: true,
  lightText: false,
  lightTextDescription: false,
  topLine: "My Portfolio Page",
  headLine: "Landing portfolio page made from scratch",
  description:
    "This is my first portfolio made with ReactJs like a Frontend developer (I have made others before, with pure HTML & CSS ages ago). So it was fun to design it, embarrassing to have issues with router and a bit with responsive layout, but finally I found it pretty cool ;-)",

  buttonLabel1: "View Github repo",
  buttonLabel2: "Plese, look around!",
  dark: false,
  primary: false,
  darkText: true,

  imgStart: true,
  img: require("../../images/portfolio_iula.svg").default,
  alt: "Portfolio IuLa",
  projectUrl1: new URL("https://github.com/LauraIu/portfolio"),
  projectUrl2: new URL("https://lauraiu.github.io/portfolio/"),
};

export const BookTable = {
  id: "projects2",
  lightBg: false,
  lightText: true,
  lightTextDescription: true,
  topLine: "Book a Table",
  headLine: "A Pizzeria's site with booking calendar",
  description:
    "This landing page buildt from scratch, it has a booking form where you can choose date and time to make your reservation. Besides designing it, it was a good practice to make the layout responsive with styled components. Also it was a challenge to handle the booking events, the DatePicker and the scrollings.",

  buttonLabel1: "View Github repo",
  buttonLabel2: "View online",
  dark: true,
  primary: true,
  darkText: false,

  imgStart: false,
  img: require("../../images/Book_a_Table.svg").default,
  alt: "Book a Table",
  projectUrl1: new URL("https://github.com/LauraIu/book-a-table"),
  projectUrl2: new URL("https://lauraiu.github.io/book-a-table/"),
};

export const SocialMediaDashboard = {
  id: "projects",
  lightBg: true,
  lightText: false,
  lightTextDescription: false,
  topLine: "Social Media Dashboard",
  headLine: "Theme switcher coding challenge after design",
  description:
    "For this newbie project I used HTML, CSS and a bit of JavaScript to code the optimal layout for diverse screens and the color theme change. The challenge was to build from the given design a responsive theme changing page.",

  buttonLabel1: "View Github repo",
  buttonLabel2: "View online",
  dark: false,
  primary: false,
  darkText: true,

  imgStart: true,
  img: require("../../images/Social_Media_Dashboard_desktop1440w_dark_theme.png"),
  alt: "Social_Media_Dashboard",
  projectUrl1: new URL("https://github.com/LauraIu/social-media-dashboard"),
  projectUrl2: new URL("https://lauraiu.github.io/social-media-dashboard/"),
};

export const InteractiveRatingComponent = {
  id: "projects2",
  lightBg: false,
  lightText: true,
  lightTextDescription: true,
  topLine: "Interactive Rating Component",
  headLine: "Tiny responsive component build after design",
  description:
    'This codeing challenge was a good exersise to "remake" the visual and handle the states.',

  buttonLabel1: "View Github repo",
  buttonLabel2: "View online",
  dark: true,
  primary: true,
  darkText: false,

  imgStart: false,
  img: require("../../images/interactive_rating_component.png"),
  alt: "Interactive Rating Component",
  projectUrl1: new URL(
    "https://github.com/LauraIu/interactive-rating-component"
  ),
  projectUrl2: new URL(
    "https://lauraiu.github.io/interactive-rating-component/"
  ),
};

export const Skills = {
  id: "skills",
  lightBg: true,
  lightText: false,
  lightTextDescription: false,
  topLine: "What i can do?",
  headLine: "I'm new in the field, but hope enough old to handle...",
  description:
    "My levels of experience and knowledge in programming aren't the clear for me neather, so maybe is better to figure out together ;-)",

  buttonLabel1: "Send me an email",
  buttonLabel2: "Find me on LinkedIn",
  dark: false,
  primary: false,
  darkText: true,

  imgStart: false,
  img: require("../../images/skills.png"),
  alt: "Skills",
  // projectUrl1: new URL("https://github.com/LauraIu/osc-html-sctructure"),
  // projectUrl2: new URL("https://github.com/LauraIu/osc-html-sctructure"),
};

// export const Contact = {
//   id: "contact",
//   lightBg: true,
//   lightText: false,
//   lightTextDescription: false,
//   topLine: "Let's connect!",
//   headLine: "Werry goo rddg gjfhjm, hgfg ffht kkrat!",
//   description:
//     "Jdghjd f ghf jffgd s rghkifér dgngj kr hrke ghtzzu de trakkr fessd ffjjkj ghjk naa!",

//   buttonLabel1: "Send me an email",
//   buttonLabel2: "Find me on LinkedIn",
//   dark: false,
//   primary: false,
//   darkText: true,

//   imgStart: false,
//   img: require("../../images/rajzok.svg").default,
//   alt: "Opens project url in a new tab",
//   projectUrl1: new URL("mailto:iuga.laura.katalin@gmail.com"),
//   projectUrl2: new URL("https://www.linkedin.com/in/laura-iuga-2a53b919/"),
// };
