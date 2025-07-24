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
  title: "Harshal",
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
  title: "Harshal",
  description: "I am a FX Trader & Full Stack Developer",
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
    name: "Sraj - Indian Traditional Fashion & Jewellery Store",
    image: "/sraj.png",
    hosted_link: "https://sraj.vercel.app/",
    github: "https://github.com/AaryaTiwari1211/SRAJ",
    description:
      "Sraj is an eCommerce platform dedicated to offering a curated selection of Indian traditional attire and jewellery. Browse through a diverse range of Sarees, Kurtis, Lehengas, Nightwear, Jewellery, and Bedsheets, designed to bring elegance and cultural charm to your wardrobe.",
  },
  {
    name: "Paatshala - The Online Help Platform for Teachers",
    image: "/paathshala.jpeg",
    github: "https://github.com/kartikm7/team-ventures-devopia",
    description:
      "Paatshala is an online platform designed to assist teachers with various resources, tools, and support to enhance their teaching experience and manage their classes more effectively.",
  },
  {
    name: "Fitera - The Only Motivation for Fitness",
    image: "/fitera.png",
    github: "https://github.com/AaryaTiwari1211/Fitera_The_Fitness_Guide",
    hosted_link: "https://fitera-the-fitness-guide.vercel.app/",
    description:
      "Fitera is a fitness platform that offers personalized workout plans, diet recommendations, and motivational content to help users achieve their fitness goals.",
  },
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
    heading: "My College Life at KJ Somaiya",
    desc: "College has been more than just lectures and exams for me — it's where I explored what I really enjoy. From coding clubs and CTFs to late-night project grinds and hackathons, I've picked up skills, met like-minded people, and figured out what drives me. While I started off leaning into software development, over time I found myself more drawn to markets, systems thinking, and building things on my own terms.",
    image: "/about1.jpg",
  },
  {
    heading: "How I Got into Tech",
    desc: "My entry into tech was pretty organic — I started with basic C++ and ended up building full-stack apps and tools for hackathons. I've worked with React, Next.js, Flask, Hasura, and more, but what really stuck with me was how fast you can build and ship things that matter. Coding gave me confidence and problem-solving muscle, which later translated really well into how I approach trading and systems now.",
    image: "/about1.jpg",
  },
  {
    heading: "Trading: The Path I'm Carving",
    desc: "Over time, I realized I was more interested in how markets move, why price reacts a certain way, and how systems behave under pressure. I started trading Forex, studied ICT, built journals and models, and got into prop firm challenges. What started as curiosity became a serious pursuit — and now, I see trading not just as a skill, but as a career I want to build long-term. I'm not after quick wins, but consistency and control.",
    image: "/about1.jpg",
  },
  {
    heading: "Outside the Charts and Code",
    desc: "Outside of screens and keyboards, I enjoy watching anime, photography, hiking, and occasionally crushing a game of chess or badminton. I like things that either calm the mind or challenge it. I've also tried to keep myself open to new ideas — whether it's vlogging, design, or just documenting life. I believe in staying curious and exploring more than one identity.",
    image: "/about1.jpg",
  },
  {
    heading: "Where I'm Headed",
    desc: "I'm working towards becoming a consistently profitable trader — ideally working with or building a prop firm of my own someday. I also want to explore global opportunities to deepen my knowledge of finance, possibly through a Master's in the EU or UK. I don't see myself sticking to just one path. Whether it's trading, tech, or entrepreneurship — I want to keep building, learning, and growing on my own terms.",
    image: "/about1.jpg",
  },
];

export const aboutLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harshaldulera/",
    image: "/socials/linkedin.svg",
    click: () => {},
  },
  {
    name: "GitHub",
    link: "https://github.com/harshaldulera",
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
    link: "mailto:harshal.dulera@somaiya.edu",
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
