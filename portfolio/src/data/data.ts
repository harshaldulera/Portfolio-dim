import { link } from "fs";

export const navbar = {
  logo: "/logo.svg",
  title: "Aarya",
  links: [
    {
      name: "Home",
      link: "home",
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
      link: "projects",
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
    name: "Project 1",
    image: "/hero1.jpg",
    github: "https://github.com",
    hosted_link: "https://github.com",
    description: "This is a project",
  },
  {
    name: "Project 2",
    image: "/hero1.jpg",
    github: "https://github.com",
    hosted_link: "https://github.com",
    description: "This is a project",
  },
  {
    name: "Project 3",
    image: "/hero1.jpg",
    github: "https://github.com",
    hosted_link: "https://github.com",
    description: "This is a project",
  },
  {
    name: "Project 4",
    image: "/hero1.jpg",
    github: "https://github.com",
    hosted_link: "https://github.com",
    description: "This is a project",
  },
  {
    name: "Project 5",
    image: "/hero1.jpg",
    github: "https://github.com",
    hosted_link: "https://github.com",
    description: "This is a project",
  },
  {
    name: "Project 6",
    image: "/hero1.jpg",
    github: "https://github.com",
    hosted_link: "https://github.com",
    description: "This is a project",
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
    heading: "About Me and My College Life",
    desc: "My college life at KJ Somaiya College of Engineering has been a transformative journey. From day one, I immersed myself in various coding clubs and tech communities, which have significantly shaped my path. Being part of hackathons and coding competitions, I've not only honed my technical skills but also learned the importance of teamwork and perseverance. The vibrant campus life, coupled with the relentless pursuit of knowledge, has equipped me with a well-rounded perspective on both academic and real-world challenges.",
    image: "/about1.jpg",
  },
  {
    heading: "My Love for Coding and Development",
    desc: "My fascination with coding began in high school when I created a simple game as a class project. This initial spark ignited a passion for solving complex problems and bringing ideas to life through code. Over the years, I've honed my skills in languages like Python, JavaScript, and C++. I'm particularly drawn to full-stack development, where I can integrate both front-end creativity and back-end logic to build comprehensive applications. The ability to continuously learn and innovate keeps me excited about my coding journey.",
    image: "/about1.jpg",
  },
  {
    heading: "My Interests and Hobbies",
    desc: "Beyond the world of code, I find myself captivated by photography, music, and hiking. These pursuits allow me to explore creative outlets, capture moments, and connect with nature, maintaining a healthy work-life balance. In some ways, my hobbies even influence my coding journey by fostering problem-solving skills and inspiring creative projects. For instance, my interest in photography has led me to develop image processing applications, blending my passion with my technical skills.",
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
        link: "https://www.linkedin.com/in/aarya-tiwari-2b4b1b1b0/",
        image: "/socials/linkedin.svg",
    },
    {
        name: "GitHub",
        link:  "https://github.com/AaryaTiwari1211",
        image: "/socials/github.svg",
    },
    {
        name: "Resume",
        link: "/",
        image: "/socials/resume.svg",
    },
    {
        name: "Email",
        link: "mailto:aarya.tiwari@somaiya.edu",
        image: "/socials/mail.svg",
    },
]
