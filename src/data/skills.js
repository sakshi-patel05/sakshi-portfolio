import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaNodeJs,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostman,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
export const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "JavaScript", icon: FaJs },
            { name: "React", icon: FaReact },
            { name: "VS Code", icon: VscCode },],
    },

    {
        title: "Backend (Learning)",
        skills: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
        ],
    },

    {
        title: "Database (Learning)",
        skills: [
            { name: "MongoDB", icon: SiMongodb },
        ],
    },

    {
        title: "Tools",
        skills: [
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "VS Code", icon: VscCode },
            { name: "Postman", icon: SiPostman },
        ],
    },
];