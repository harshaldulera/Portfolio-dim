import { link } from "fs";

const onButtonClick = () => {
  const pdfUrl = "/Aarya_Tiwari.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Aarya_Tiwari_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const navbar = {
  logo: "/logo.svg",
  title: "Aarya",
  links: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Skills",
      link: "skills",
    },
    {
      name: "Experience",
      link: "experience",
    },
    {
      name: "Contact Me",
      link: "contact",
    },
  ],
  name: "@Aarriiiii",
};

export const home = {
  title: "Aarya",
  description: "I am a Full Stack Developer",
};

export const skills = [
  {
    name: "C++",
    image: "/Logos/cpp.svg",
    link: "https://www.cplusplus.com/",
    type: "programming",
  },
  {
    name: "Python",
    image: "/Logos/python.svg",
    link: "https://www.python.org/",
    type: "programming",
  },
  {
    name: "JavaScript",
    image: "/Logos/javascript.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "programming",
  },
  {
    name: "React",
    image: "/Logos/react.svg",
    link: "https://reactjs.org/",
    type: "frontend",
  },
  {
    name: "Next JS",
    image: "/Logos/nextjs.svg",
    link: "https://nextjs.org/",
    type: "frontend",
  },
  {
    name: "Node",
    image: "/Logos/node.svg",
    link: "https://nodejs.org/en/",
    type: "backend",
  },
  {
    name: "MongoDB",
    image: "/Logos/mongodb.svg",
    link: "https://www.mongodb.com/",
    type: "database",
  },
  {
    name: "PostgreSQL",
    image: "/Logos/postgres.svg",
    link: "https://www.postgresql.org/",
    type: "database",
  },
  {
    name: "Tailwind",
    image: "/Logos/tailwind.svg",
    link: "https://tailwindcss.com/",
    type: "frontend",
  },
  {
    name: "Material-UI",
    image: "/Logos/materialui.svg",
    link: "https://material-ui.com/",
    type: "frontend",
  },
  {
    name: "Git",
    image: "/Logos/git.svg",
    link: "https://git-scm.com/",
    type: "tools",
  },
  {
    name: "GitHub",
    image: "/Logos/github.svg",
    link: "https://github.com/",
    type: "tools",
  },
  {
    name: "Figma",
    image: "/Logos/figma.svg",
    link: "https://www.figma.com/",
    type: "tools",
  },
  {
    name: "Firebase",
    image: "/Logos/firebase.svg",
    link: "https://firebase.google.com/",
    type: "backend",
  },
  {
    name: "Docker",
    image: "/Logos/docker.svg",
    link: "https://www.docker.com/",
    type: "tools",
  },
  {
    name: "Django / Django REST",
    image: "/Logos/django.svg",
    link: "https://www.djangoproject.com/",
    type: "backend",
  },
  {
    name: "Flask",
    image: "/Logos/flask.svg",
    link: "https://flask.palletsprojects.com/en/2.0.x/",
    type: "backend",
  },
  {
    name: "Redis",
    image: "/Logos/redis.svg",
    link: "https://redis.io/",
    type: "database",
  },
  {
    name: "HTML 5",
    image: "/Logos/html5.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    type: "frontend",
  },
  {
    name: "CSS 3",
    image: "/Logos/css3.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "frontend",
  },
  {
    name: "TypeScript",
    image: "/Logos/typescript.svg",
    link: "https://www.typescriptlang.org/",
    type: "programming",
  },
];
export const projects = [
  {
    name: "Sahyog - A Refined Healthcare Associate",
    image: "/sahyog.png",
    github: "https://github.com/AaryaTiwari1211/Sahyog_Healthcare",
    hosted_link: "https://sahyog-healthcare.vercel.app",
    description:
      "SAHYOG is a decentralized healthcare ecosystem in India, offering a unique health identity card, AI-driven consultations, task management, emergency SOS, and blockchain security for user data protection.",
  },
  {
    name: "FileTask-AI : A Powerful Document Chat Bot",
    image: "/filetask-ai.png",
    github: "https://github.com/AaryaTiwari1211/filetask-ai",
    hosted_link: "https://filetask-ai.vercel.app/",
    description:
      "FileTask AI allows interaction with PDFs, Word documents, and PowerPoint presentations through an AI-powered chat interface.",
  },
  {
    name: "File Nest : The Next Gen File Manager",
    image: "/filenest.png",
    github: "https://github.com/AaryaTiwari1211/file-nest",
    hosted_link: "https://file-next-five.vercel.app",
    description:
      "File-Nest offers a comprehensive solution for file management, including file sharing within organizations, secure storage, and access control for various file types like PDFs, DOCX, images, and CSVs.",
  },
  {
    name: "My Portfolio",
    image: "/portfolio.png",
    github: "https://github.com/AaryaTiwari1211/Portfolio",
    hosted_link: "https://aarya-tiwari1211.vercel.app",
    description:
      "This is my personal portfolio website, showcasing my projects, skills, and experiences as a Software and Full-Stack Developer.",
  },
  {
    name: "Interactive Quiz Hub - Quizio",
    image: "/quizio.png",
    github: "https://github.com/AaryaTiwari1211/Quiz-App-React",
    hosted_link: "https://quizio-aari.vercel.app",
    description:
      "Quizio is an interactive quiz platform built with React, offering users a dynamic and engaging quiz experience.",
  },
  {
    name: "Electra Enterprises - Website",
    image: "/electra.png",
    github: "https://github.com/AaryaTiwari1211/Electra_Website",
    hosted_link: "https://electra-main.netlify.app",
    description:
      "This is the official website for Electra Enterprises, featuring information about their products and services in the electronics industry.",
  },
  {
    name: "Paatshala - The Online Help Platform for Teachers",
    image: "/paathshala.jpeg",
    github: "https://github.com/kartikm7/team-ventures-devopia",
    description:
      "Paatshala is an online platform designed to assist teachers with various resources, tools, and support to enhance their teaching experience and manage their classes more effectively.",
  }
];


export const clients = [
  {
    name: "Client 1",
    position: "Position",
    image: "/me.png",
    comment: "Comment",
  },
  {
    name: "Client 2",
    position: "Position",
    image: "/logo.svg",
    comment: "Comment",
  },
  {
    name: "Client 3",
    position: "Position",
    image: "/logo.svg",
    comment: "Comment",
  },
  {
    name: "Client 4",
    position: "Position",
    image: "/logo.svg",
    comment: "Comment",
  },
];

export const about = [
  {
    heading: "About Me and My College Life",
    desc: "My college life at KJ Somaiya College of Engineering has been a transformative journey. From day one, I immersed myself in various coding clubs and tech communities, which have significantly shaped my path. Being part of hackathons and coding competitions, I've not only honed my technical skills but also learned the importance of teamwork and perseverance. The vibrant campus life, coupled with the relentless pursuit of knowledge, has equipped me with a well-rounded perspective on both academic and real-world challenges.",
    image: "/about1.jpg",
  },
  {
    heading: "My Love for Coding and Development",
    desc: "My fascination with coding began in high school when I created a simple game as a class project. This initial spark ignited a passion for solving complex problems and bringing ideas to life through code. Over the years, I've honed my skills in languages like Python, JavaScript, and C++. I'm particularly drawn to full-stack development, where I can integrate both front-end creativity and back-end logic to build comprehensive applications. The ability to continuously learn and innovate keeps me excited about my coding journey. In addition to development, solving Leetcode problems and making projects have become integral parts of my growth as a developer.",
    image: "/about1.jpg",
  },
  {
    heading: "My Interests and Hobbies",
    desc: "Beyond the world of code, I find myself captivated by watching anime, playing chess, playing badminton, listening to music, photography, and hiking. These pursuits allow me to explore creative outlets, capture moments, and connect with nature, maintaining a healthy work-life balance. In some ways, my hobbies even influence my coding journey by fostering problem-solving skills and inspiring creative projects. For instance, my interest in photography has led me to develop image processing applications, blending my passion with my technical skills.",
    image: "/about1.jpg",
  },

  {
    heading: "My Future Ambitions",
    desc: "Looking ahead, I aspire to become a leading software engineer, contributing to innovative projects that make a difference. I aim to specialize in artificial intelligence and machine learning, areas that I believe hold the potential to revolutionize industries and improve lives. My ultimate goal is to create technologies that not only solve problems but also inspire and empower others. Additionally, I plan to continue my education, possibly pursuing a Master's degree, to deepen my knowledge and expertise in these cutting-edge fields.",
    image: "/about1.jpg",
  },
  {
    heading: "Life Outside the Code",
    desc: "When I'm not immersed in coding challenges, you might find me spending time with loved ones, volunteering for environmental causes, or exploring new cuisines. These experiences allow me to recharge, learn new things, and connect with others, enriching my life beyond the technical realm.",
    image: "/about1.jpg",
  },
];


export const aboutLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aarya-tiwari-142a01224/",
    image: "/socials/linkedin.svg",
    click: () => {},
  },
  {
    name: "GitHub",
    link: "https://github.com/AaryaTiwari1211",
    image: "/socials/github.svg",
    click: () => {},
  },
  {
    name: "Resume",
    link: "/about",
    image: "/socials/resume.svg",
    click: onButtonClick,
  },
  {
    name: "Email",
    link: "mailto:aarya.tiwari@somaiya.edu",
    image: "/socials/mail.svg",
    click: () => {},
  },
];

export const experience = [
  {
    title: "Roni Analytics - Remote Mumbai",
    cardTitle: "Full Stack Development Intern",
    cardSubtitle:
      "Worked with real-time data involving Cryptocurrency and developing SQL Queries for fetching related data. Implemented Technologies like PostGresSQL, React TypeScript, Docker, AWS, and more...",
    cardDetailedText:
      "During my internship at Roni Analytics, I was responsible for building and optimizing applications that processed real-time cryptocurrency data. I collaborated with the backend team to design efficient SQL queries and leveraged technologies like React TypeScript, Docker, and AWS to deliver scalable solutions.",
  },
  {
    title: "Electra Enterprises",
    cardTitle: "Frontend Developer",
    cardSubtitle:
      "Worked on the frontend of the company's website and implemented new features. Implemented Technologies like React, Tailwind CSS, and more...",
    cardDetailedText:
      "At Electra Enterprises, I focused on enhancing the user interface of the company's website. I developed and integrated new features using React and Tailwind CSS, ensuring a seamless user experience. My contributions helped in improving site performance and user engagement.",
  },
  {
    title: "KJ Somaiya College of Engineering",
    cardTitle: "Full Stack Developer",
    cardSubtitle:
      "Developed a Full Stack Application that extracts keywords from a given document, text, or PDF. Implemented Technologies like Django, Django Templates",
    cardDetailedText:
      "In this project, I developed a full-stack application for keyword extraction from documents and PDFs. Using Django, I built a robust backend, and Django Templates were used for rendering the frontend. The tool efficiently processed documents and delivered accurate keyword results.",
  },
  {
    title: "RIIDL (Research Innovation Incubation Design Lab)",
    cardTitle: "Maker Relations Executive",
    cardSubtitle:
      "My Role as a Maker Relations Executive included managing the makerspace and helping students with their projects. I also conducted workshops and events for the students. I also invited 35+ makers into the event Maker Mela 2022",
    cardDetailedText:
      "As a Maker Relations Executive at RIIDL, I managed the makerspace, provided guidance to students on their projects, and organized workshops to foster innovation. Additionally, I played a key role in coordinating Maker Mela 2022, inviting over 35 makers to showcase their creations.",
  },
  {
    title: "KJ Somaiya College of Engineering",
    cardTitle: "Student",
    cardSubtitle:
      "Studied Core Subjects like Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and more. Maintain a CGPA of 9.5",
    cardDetailedText:
      "As a student at KJ Somaiya College of Engineering, I maintained a CGPA of 9.5 while excelling in core subjects like Data Structures, Algorithms, and Operating Systems. My academic journey involved rigorous coursework, project-based learning, and active participation in technical events.",
  },
  {
    title: "Rao Junior College of Science (HSC)",
    cardTitle: "Student",
    cardSubtitle:
      "Studied Core Subjects like Physics, Chemistry, Mathematics, and Computer Science. Maintain a Percentage of 95.17%",
    cardDetailedText:
      "At Rao Junior College of Science, I achieved a percentage of 95.17% by excelling in core subjects such as Physics, Chemistry, Mathematics, and Computer Science. My academic dedication was reflected in my consistent performance and participation in various science competitions.",
  },
  {
    title: "Podar International School (CBSE), Seawoods Navi Mumbai",
    cardTitle: "Student",
    cardSubtitle:
      "Studied Core Subjects like English, Mathematics, Science, Social Studies, and Computer Science. Maintained a Percentage of 90%",
    cardDetailedText:
      "During my time at Podar International School, I maintained a percentage of 90%, excelling in subjects such as English, Mathematics, Science, and Social Studies. My well-rounded education laid a strong foundation for my future academic and professional endeavors.",
  },
];

