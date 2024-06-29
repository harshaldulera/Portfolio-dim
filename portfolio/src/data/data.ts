import { link } from "fs"


export const navbar = {
    logo: "/logo.svg",
    title: "Aarya",
    links: [
        {
            name: "Home",
            link: "home"
        },
        {
            name: "About",
            link: "about"
        },
        {
            name: "Projects",
            link: "projects"
        },
        {
            name: "Skills",
            link: "skills"
        },
        {
            name: "Experience",
            link: "projects"
        },
        {
            name: "Contact Me",
            link: "contact"
        }
    ],
    name: "@Aarriiiii",
}

export const home = {
    title: "Aarya",
    description: "I am a Full Stack Developer",
}

export const skills = [
    {
        name: "C++",
        image: "/Logos/cpp.svg",
        link : "https://www.cplusplus.com/",
        type: "programming"
    },
    {
        name: "Python",
        image: "/Logos/python.svg",
        link : "https://www.python.org/",
        type: "programming"
    },
    {
        name: "JavaScript",
        image: "/Logos/javascript.svg",
        link : "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        type: "programming"
    },
    {
        name: "React",
        image: "/Logos/react.svg",
        link : "https://reactjs.org/",
        type: "frontend"

    },
    {
        name: "Next JS",
        image: "/Logos/nextjs.svg",
        link: "https://nextjs.org/",
        type: "frontend"
    },
    {
        name: "Node",
        image: "/Logos/node.svg",
        link: "https://nodejs.org/en/",
        type: "backend"
    },
    {
        name: "MongoDB",
        image: "/Logos/mongodb.svg",
        link: "https://www.mongodb.com/",
        type: "database"
    },
    {
        name: "PostgreSQL",
        image: "/Logos/postgres.svg",
        link: "https://www.postgresql.org/",
        type: "database"
    },
    {
        name: "Tailwind",
        image: "/Logos/tailwind.svg",
        link: "https://tailwindcss.com/",
        type: "frontend"
    },
    {
        name: "Material-UI",
        image: "/Logos/materialui.svg",
        link: "https://material-ui.com/",
        type: "frontend"
    },
    {
        name: "Git",
        image: "/Logos/git.svg",
        link: "https://git-scm.com/",
        type: "tools"
    },
    {
        name: "GitHub",
        image: "/Logos/github.svg",
        link: "https://github.com/",
        type: "tools"
    },
    {
        name: "Figma",
        image: "/Logos/figma.svg",
        link: "https://www.figma.com/",
        type: "tools"
    },
    {
        name: "Firebase",
        image: "/Logos/firebase.svg",
        link: "https://firebase.google.com/",
        type: "backend"
    },
    {
        name: "Docker",
        image: "/Logos/docker.svg",
        link: "https://www.docker.com/",
        type: "tools"
    },
    {
        name: "Django / Django REST",
        image: "/Logos/django.svg",
        link: "https://www.djangoproject.com/",
        type: "backend"
    },
    {
        name: "Flask",
        image: "/Logos/flask.svg",
        link: "https://flask.palletsprojects.com/en/2.0.x/",
        type: "backend"
    },
    {
        name: "Redis",
        image: "/Logos/redis.svg",
        link: "https://redis.io/",
        type: "database"
    },
    {
        name: "HTML 5",
        image: "/Logos/html5.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        type: "frontend"
    },
    {
        name: "CSS 3",
        image: "/Logos/css3.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        type: "frontend"
    },
    {
        name: "TypeScript",
        image: "/Logos/typescript.svg",
        link: "https://www.typescriptlang.org/",
        type: "programming"
    }
]

export const projects = [
    {
        name: "Project 1",
        image: "/hero1.jpg",
        github: "https://github.com",
        hosted_link: "https://github.com",
        description: "This is a project"
    },
    {
        name: "Project 2",
        image: "/hero1.jpg",
        github: "https://github.com",
        hosted_link: "https://github.com",
        description: "This is a project"
    },
    {
        name: "Project 3",
        image: "/hero1.jpg",
        github: "https://github.com",
        hosted_link: "https://github.com",
        description: "This is a project"
    },
    {
        name: "Project 4",
        image: "/hero1.jpg",
        github: "https://github.com",
        hosted_link: "https://github.com",
        description: "This is a project"
    },
    {
        name: "Project 5",
        image: "/hero1.jpg",
        github: "https://github.com",
        hosted_link: "https://github.com",
        description: "This is a project"
    },
    {
        name: "Project 6",
        image: "/hero1.jpg",
        github: "https://github.com",
        hosted_link: "https://github.com",
        description: "This is a project"
    },
]

export const clients = [
    {
        name: "Client 1",
        position: "Position",
        image: "/me.png",
        comment: "Comment"
    },
    {
        name: "Client 2",
        position: "Position",
        image: "/logo.svg",
        comment: "Comment"
    },
    {
        name: "Client 3",
        position: "Position",
        image: "/logo.svg",
        comment: "Comment"
    },
    {
        name: "Client 4",
        position: "Position",
        image: "/logo.svg",
        comment: "Comment"
    },
]