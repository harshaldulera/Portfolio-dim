import { link } from "fs";

const onButtonClick = () => {
  const pdfUrl = "/Harshal_resume.pdf";
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
    name: "369 Time Harmonic Model",
    image: "/369model.jpg",
    github: "", 
    hosted_link: "https://harshal0x01.notion.site/369-time-harmonic-model",
    description:
      "The 369 Time Harmonic Model is a precision-based trading system that aligns ICT concepts like AMD with Fibonacci Time Zones to predict when moves will happen—not just where. Anchored at the daily open, it helps filter fakeouts, time smart entries using CISD, iFVG, MSS, and forecast market phases based on time rather than price alone.",
  },
  {
    name: "NQ Intraday Model – Liquidity, Structure & Narrative",
    image: "/nq-intraday-model.jpg",
    github: "", 
    hosted_link: "https://harshal0x01.notion.site/intraday-model",
    description:
      "A high-probability Nasdaq (NQ) intraday trading model based purely on price action, liquidity sweeps, market structure shifts, and narrative timing. The model focuses on internal liquidity, FVGs, breaker blocks, and New York session time windows—eliminating randomness through engineered setups and clean execution zones.",
  },  
  {
    name: "AdBaba – Aapka Apna Marketing Guru",
    image: "/adbaba.jpeg",
    github: "https://github.com/Suja16/adbaba",
    hosted_link: "",
    description:
    "AdBaba is an AI-powered platform that automates personalized marketing funnels, social media content, and campaign strategy for small businesses and creators. It uses trending memes, AI avatars, and smart targeting to generate high-converting content for platforms like Instagram, Twitter, and YouTube. Built to replace traditional agencies with a cost-effective and time-efficient solution.",
  },
  {
    name: "My Portfolio",
    image: "/portfolio.png",
    github: "https://github.com/AaryaTiwari1211/Portfolio",
    hosted_link: "https://aarya-tiwari1211.vercel.app",
    description:
      "This is my personal portfolio website, showcasing my projects, skills, and experiences as a Software and Full-Stack Developer.",
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
    desc: "I got into tech through the world of cybersecurity and ethical hacking. My curiosity led me to platforms like HackTheBox, where I climbed into the top 66 globally. I also secured AIR 4 in the NCIIPC Pentathon, a national-level red teaming competition. Alongside hacking, I began exploring software development — building projects with React, Next.js, Flask, and Hasura. This dual path helped me develop both an attacker’s mindset and a builder’s intuition, shaping how I now approach problems and systems.",
    image: "/about1.jpg",
  },  
  {
    heading: "Trading: The Path I'm Carving",
    desc: "Over time, I realized I was more interested in how markets move, why price reacts a certain way, and how systems behave under pressure. I started trading Forex, studied ICT, built journals and models, and got into prop firm challenges. What started as curiosity became a serious pursuit — and now, I see trading not just as a skill, but as a career I want to build long-term. I'm not after quick wins, but consistency and control.",
    image: "/about1.jpg",
  },
  {
    heading: "Outside the Charts and Code",
    desc: "When I’m not deep in charts or buried in code, I enjoy solving cybersecurity challenges, building trading systems, and helping others learn through workshops or content. Music is a big part of my life — it keeps me focused and inspired during long hours of work. I also like exploring new ideas, whether that’s vlogging, designing funnels, or experimenting with bots and automations. For me, curiosity and creativity go hand in hand — I build not just for impact, but for the joy of learning and creating.",
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
    title: "EPT - Global Logistics (Freelance Project)",
    cardTitle: "Frontend Developer",
    cardSubtitle:
      "Designed and developed a responsive portfolio website for a global logistics company.",
    cardDetailedText:
      "Worked as a freelance frontend developer for EPT - Global Logistics, a global logistics and supply chain solutions provider. I created a modern, responsive portfolio website to showcase their global operations, service offerings, and case studies. Focused on clean UI/UX, brand alignment, and performance optimization using React. Ensured cross-device compatibility and fast loading speeds for enhanced user experience."
  },  
  {
    title: "DeepCytes",
    cardTitle: "Cybersecurity Analyst Intern",
    cardSubtitle:
      "Worked on offensive security, AI-based threat prediction, and red teaming tool optimization.",
    cardDetailedText:
      "From July 2023 to April 2024, I worked as a Cybersecurity Analyst Intern at DeepCytes, where I actively contributed to red teaming initiatives by configuring cloud-based virtual machines with penetration testing tools. I also developed a predictive API powered by a BERT model trained on dark web datasets, enhancing AI-driven threat detection capabilities. Additionally, I conducted in-depth testing and optimization of various red teaming tools to improve operational efficiency and effectiveness."
  },
  {
    title: "Home of Temptations",
    cardTitle: "Shopify Developer (Freelance)",
    cardSubtitle:
      "Developed a custom e-commerce site for a pet food brand using Shopify.",
    cardDetailedText:
      "As a freelance Shopify developer, I built a customized online store for Home of Temptations, a premium food brand. The project involved theme customization, product configuration, payment gateway setup, and mobile-first design. Focused on delivering a seamless shopping experience that aligned with the brand’s aesthetic and functionality goals."
  },
  {
    title: "KJ Somaiya College of Engineering",
    cardTitle: "Student",
    cardSubtitle:
      "Studied Core Subjects like Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and more.",
    cardDetailedText:
      "Pursuing B.Tech in Information Technology at KJ Somaiya College of Engineering. Gained hands-on experience through projects, hackathons, and coursework in subjects such as Object-Oriented Programming, Operating Systems, DBMS, and Computer Networks. Actively involved in tech clubs and team projects that emphasize real-world problem solving and innovation.",
  },
];
