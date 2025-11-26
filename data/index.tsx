import { AiOutlineApi, AiOutlineGlobal } from "react-icons/ai";
import { FaJsSquare, FaMobileAlt, FaSearch, FaJava, FaPhp, FaPython, FaAws, FaDocker } from "react-icons/fa";
import {
  FaCss3,
  FaFacebook,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
  FaWhatsapp,
  FaNodeJs,
} from "react-icons/fa6";
import { MdOutlineSpeed, MdOutlineSecurity } from "react-icons/md";
import {
  SiAxios,
  SiBootstrap,
  SiFramer,
  SiGraphql,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiSocketdotio,
  SiCplusplus,
  SiGithubactions,
  SiNginx
} from "react-icons/si";
import { z } from "zod";

export const cvUrl =
  "https://drive.google.com/file/d/1qQCpg2psoVk6XQm3rRDh5KgcsHFtsFDg/view?usp=drive_link";


  export const projects = [
    {
      id: 1,
      title: "TapTalk 💬",
      des: "A production-grade real-time chat application with AI-powered conversations, multimedia sharing, and enterprise-grade security. Built with React, Node.js, Express, Socket.IO, and MongoDB for seamless communication.",
      img: "/TapTalk.jpg",
      iconsList: ["/react.svg", "/nodejs.svg", "/mongodb.svg", "/Socket.Io.svg", "/ai.svg"],
      link: "https://tap-talk-app-v2.vercel.app/",
      sourceCode: "https://github.com/Mohamed-shamel1/TapTalk_app_V2",
    },
    {
      id: 2,
      title: "FASCO 🛍️",
      des: "A modern E-Commerce platform for clothing built with React. Features include dynamic product pages, shopping cart, user authentication, and a smooth multi-step checkout flow, all with a fully responsive design.",
      img: "/Fasco.jpg",
      iconsList: ["/react.svg", "/css.svg" , "/js.svg"],
      link: "https://e-commrce-iti-project-react.vercel.app/",
      sourceCode: "https://github.com/Mohamed-shamel1/FASCO",
    },
    {
      id: 3,
      title: "Grid Masterclass 📱",
      des: "A hands-on CSS Grid project inspired by Apple’s product pages. Demonstrates responsive layouts, nested Grid and Flexbox combinations, fluid typography, and eye-catching visual elements for a clean product showcase.",
      img: "/newPhone.jpg",
      iconsList: ["/html.svg", "/css.svg"],
      link: "https://mohamed-shamel1.github.io/New.phone/",
      sourceCode: "https://github.com/Mohamed-shamel1/New.phone",
    },
    {
      id: 4,
      title: "IEEE HSB Platform 🌐",
      des: "A comprehensive web platform for IEEE HSB operations, including user management, tasks, projects, quizzes, events, gamification, and notifications. Built with React frontend and Node.js backend with RESTful APIs and JWT authentication.",
      img: "/IEEE.jpg",
      iconsList: ["/react.svg", "/nodejs.svg", "/mongodb.svg", "/next.svg"],
      link: "https://ieee-hsb-frontend-bedk.vercel.app/",
      sourceCode: "https://github.com/IEEE-HSB/IEEE-HSB-Backend",
    },
  ];
  

const date = new Date();
const yearsOfExperience = date.getFullYear() - 2023;
const projectsCompleted = 15;
const clients = 5;

export const aboutData = [
  {
    number: yearsOfExperience,
    text: "Years of Experience",
  },
  {
    number: projectsCompleted,
    text: "Project Completed",
  },
  {
    number: clients,
    text: "Clients",
  },
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const skills = [
  { id: 1, icon: <SiNextdotjs />, text: "Next.js" },
  { id: 2, icon: <SiTypescript />, text: "TypeScript" },
  { id: 3, icon: <FaReact />, text: "React.js" },
  { id: 4, icon: <FaJsSquare />, text: "JavaScript" },
  { id: 5, icon: <FaHtml5 />, text: "HTML" },
  { id: 6, icon: <FaCss3 />, text: "CSS" },
  { id: 7, icon: <SiSass />, text: "Sass" },
  { id: 8, icon: <SiTailwindcss />, text: "Tailwind CSS" },
  { id: 9, icon: <SiBootstrap />, text: "Bootstrap" },
  { id: 10, icon: <SiStyledcomponents />, text: "Styled Components" },
  { id: 11, icon: <SiFramer />, text: "Framer Motion" },
  { id: 12, icon: <SiRedux />, text: "Redux Toolkit" },
  { id: 13, icon: <SiAxios />, text: "Axios" },
  { id: 14, icon: <FaGitAlt />, text: "Git & Github" },
  { id: 15, icon: <AiOutlineApi />, text: "REST APIs" },
  { id: 16, icon: <SiGraphql />, text: "GraphQL" },
  { id: 17, icon: <FaSearch />, text: "SEO Best Practices" },
  { id: 18, icon: <MdOutlineSpeed />, text: "Web Performance Optimization" },
  { id: 19, icon: <FaMobileAlt />, text: "Responsive Design" },
  { id: 20, icon: <AiOutlineGlobal />, text: "Cross-Browser Compatibility" },
  { id: 21, icon: <FaNodeJs />, text: "Node.js" },
  { id: 22, icon: <SiExpress />, text: "Express.js" },
  { id: 23, icon: <SiMongodb />, text: "MongoDB & Mongoose" },
  { id: 24, icon: <SiMysql />, text: "SQL & MySQL" },
  { id: 25, icon: <FaAws />, text: "AWS Services" },
  { id: 26, icon: <SiGithubactions />, text: "CI/CD Pipelines" },
  { id: 27, icon: <FaDocker />, text: "Docker" },
  { id: 28, icon: <SiNginx />, text: "Nginx Web Server" },
  { id: 29, icon: <SiCplusplus />, text: "C++ (OOP & DS)" },
  { id: 30, icon: <FaJava />, text: "Java" },
  { id: 31, icon: <FaPython />, text: "Python" },
  { id: 32, icon: <FaPhp />, text: "PHP" },
  { id: 33, icon: <SiSocketdotio />, text: "Socket.io (Real-time)" },
  { id: 34, icon: <MdOutlineSecurity />, text: "Auth (JWT/OAuth)" },
  { id: 35, icon: <SiPostman />, text: "Postman API Testing" },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/Mohamed-shamel1",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/mohammed-shamel-0454a431a/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    link: "https://www.facebook.com/mohammed.shamel.35",
    icon: <FaFacebook />,
  },
  {
    id: 4,
    link: "https://wa.me/+201118083054",
    icon: <FaWhatsapp />,
  },
];

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(255, { message: "First name is too long" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .min(4, { message: "Phone number is too short" })
    .regex(
      /^\+\d{1,3}\d{4,14}$/,
      "Phone Number Format: +[country code][number] (e.g., +1234567890)"
    ),
  subject: z.string(),
  message: z.string().min(1, { message: "Message is required" }),
});
