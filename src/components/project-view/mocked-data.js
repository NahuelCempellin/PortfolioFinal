import kmk1 from "../../assets/kmkland.jpeg";
import kmk2 from "../../assets/kmkcard.jpeg";
import kmk3 from "../../assets/kmkres.jpeg";
// import kmk4 from '../../assets/kmkweb.jpeg'

import coall1 from "../../assets/coally.jpeg";

import galu1 from "../../assets/galuhome.jpeg";
import galu2 from "../../assets/galulight.jpeg";
import galu3 from "../../assets/galulog.jpeg";
import galu4 from "../../assets/galures.jpeg";

import creditCard from "../../assets/creditcard.jpeg";

import dash1 from "../../assets/dashl.jpeg";
import dash2 from "../../assets/dashboard.jpeg";

import portfolio from "../../assets/portfolio.jpeg";
import portfolio2 from "../../assets/Portfolio2.jpeg";
import portfolio3 from "../../assets/Portfolio3.jpeg";

import Omas from "../../assets/Omas-Cards.jpeg";
import Omasdnd from "../../assets/Omas-dnd.jpeg"
import OmasDash from "../../assets/Omas-Dash.jpeg"
import OmasLogin from "../../assets/Omas-login.jpeg"

import RemitoLogin from '../../assets/Remito-login.jpeg'
import RemitoOda from '../../assets/Remito-oda.jpeg'
import Remitoacc from '../../assets/Remito-acc.jpeg'
import Remitoddt from '../../assets/Remito-ddt.jpeg'
import RemitoFattura from '../../assets/Remito-fatturazione.jpeg'

import LandingAntonucci from '../../assets/antonucci-landing.jpeg'
import HorarioAntonucci from '../../assets/antonucci-horarios.jpeg'
import CardsAntonucci from '../../assets/antonucci-cards.jpeg'
import DetailAntonucci from '../../assets/antonucci-detail.jpeg'


export const Data = [
  {
    name: "Instituto Elisabeth Antonucci",
    projectType: "Freelance",
    images: [LandingAntonucci, HorarioAntonucci, CardsAntonucci,DetailAntonucci],
    tasks:
      "Defined the aesthetic of the page, developed React based on the Figma design, and determined the routing of the application.",
    technologies: ["React", "Redux Toolkit", "TailwindCss", "Javascript"],
    date: "03/4/2023",
    link: "https://instituto-antonucci.vercel.app/",
    text: "Website designed for the Elisabeth Antonucci Dance Institute.My tasks consisted of creating a website following the institute's aesthetic. We created a landing page, a schedule page, and a section for each activity.Once the design was completed in Figma, we translated it into custom code tailored to the client's needs.",
    client: {
      clientName: "Instituto Antonucci",
      clientTestimony: "",
    },
  },
  {
    name: "Project OMAS Remitos",
    projectType: "Freelance",
    images: [RemitoLogin, RemitoOda, Remitoacc,Remitoddt, RemitoFattura],
    tasks:
      "Defined the aesthetic of the page, developed React based on the Figma design, and determined the routing of the application.",
    technologies: ["React", "Redux Toolkit", "TailwindCss", "Javascript"],
    date: "20/2/2023",
    link: "https://omas-remito.vercel.app/",
    text: "At a startup, I was tasked with creating a Figma that defined the styles of the page according to the client's requests. Then, I developed the page from scratch using React. As part of my responsibilities, I worked on developing the frontend, creating custom hooks, and componentizing to improve the application's performance.",
    client: {
      clientName: "OMAS s.p.a",
      clientTestimony: "",
    },
  },
  {
    name: "Project OMAS s.p.a",
    projectType: "Freelance",
    images: [Omas, Omasdnd, OmasDash,OmasLogin],
    tasks:
      "Defined the aesthetic of the page, developed React based on the Figma design, and determined the routing of the application.",
    technologies: ["React", "Redux Toolkit", "MUI", "Javascript"],
    date: "20/2/2023",
    link: "https://omas-alpha.vercel.app/",
    text: "At a startup, I was tasked with creating a Figma that defined the styles of the page according to the client's requests. Then, I developed the page from scratch using React. As part of my responsibilities, I worked on developing the frontend, creating custom hooks, and componentizing to improve the application's performance.",
    client: {
      clientName: "OMAS s.p.a",
      clientTestimony: "",
    },
  },
  {
    name: "Kenmukan web",
    projectType: "Freelance",
    images: [kmk1, kmk2, kmk3],
    tasks:
      "Created page layout and implemented frontend logic. Deployed the application.",
    technologies: ["Next.js", "Styled.jsx", "Javascript"],
    date: "08/20/2022",
    link: "https://kenmukan-kyokai.vercel.app",
    text: "This is an ongoing project where I am creating a website for my martial arts dojo. The objective is to attract more students to the institution and promote the art of Japanese fencing.",
    client: {
      clientName: "Kenmukan kyokai",
      clientTestimony: "",
    },
  },
  {
    name: "Collaboration in Coally",
    projectType: "As contractor",
    images: [coall1],
    tasks:
      "Implemented frontend development based on a Figma design and resolved any encountered bugs.",
    technologies: ["React", "Redux", "Css", "Material Ui", "Javascript"],
    date: "11-03-2022",
    link: "https://coally.com/home-coally",
    text: "Project in which I collaborate. My designated tasks were to develop programming logic, frontend development from a figma design, and bug fixes reported by the QA area.",
    client: {
      clientName: "Coally",
      clientTestimony: "",
    },
  },
  {
    name: "Galu pet hotel",
    projectType: "Freelance",
    images: [galu1, galu2, galu3, galu4],
    tasks:
      "Defined the aesthetic of the page, developed React based on the Figma design, and determined the routing of the application.",
    technologies: ["React", "Vite", "Tailwind-css", "Redux", "Javascript"],
    date: "12-09-2022",
    link: "",
    text: "At a startup, I was tasked with creating a Figma that defined the styles of the page according to the client's requests. Then, I developed the page from scratch using React. As part of my responsibilities, I worked on developing the frontend, creating custom hooks, and componentizing to improve the application's performance.",
    client: {
      clientName: "Galu pet hotel",
      clientTestimony: "",
    },
  },
  {
    name: "Credit card generator",
    projectType: "Practice",
    images: [creditCard],
    tasks: "Frontend development practice.",
    technologies: ["React", "Redux", "Styled-components", "Javascript"],
    date: "08-08-2022",
    link: "https://credit-card-smoky.vercel.app",
    text: "Practice of frontend mentor.",
    client: {
      clientName: "John Doe",
      clientTestimony: "",
    },
  },
  {
    name: "Admin dashboard",
    projectType: "Practice",
    images: [dash1, dash2],
    tasks: "",
    technologies: ["React", "Redux", "Styled-components", "Javascript"],
    date: "08-09-2022",
    link: "https://switchermaster.vercel.app",
    text: "Frontend mentor practice",
    client: {
      clientName: "Practice",
      clientTestimony: "",
      date: "",
    },
  },
  {
    name: "First portfolio",
    projectType: "Practice",
    images: [portfolio, portfolio2, portfolio3],
    tasks: "Frontend development",
    technologies: ["Next.js", "Styled.jsx", "Javascript"],
    date: "07-01-2022",
    link: "https://portfolio-mu-lovat-51.vercel.app",
    text: "My first portfolio developed after ending my studies",
    client: {
      clientName: "",
      clientTestimony: "",
      date: "",
    },
  },
];
