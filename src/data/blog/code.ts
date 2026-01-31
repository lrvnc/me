import { CodeProject } from './types';

export const codeData: CodeProject[] = [
    {
        id: 1,
        title: "Personal Website",
        description: "Source code for this website.",
        tags: ["React", "Webdev"],
        githubUrl: "https://github.com/lrvnc/lrvnc.github.io",
        demoUrl: "https://lrvnc.github.io",
        date: "2026-02-01"
    },
    {
        id: 2,
        title: "Anki Project",
        description: "A small web scrapping project to create anki cards.",
        tags: ["Python", "Web Scrapping"],
        githubUrl: "https://github.com/lrvnc/anki-project",
        demoUrl: "",
        date: "2021-05-02"
    },
    {
        id: 3,
        title: "VSS Soccer Robot Simulator",
        description: "Simulating the control system of two wheeled robots for the VSS (Very Small Size) RoboCup competition. Run aside with CoppeliaSim.",
        tags: ["CoppeliaSim", "Python", "Robotics"],
        githubUrl: "https://github.com/lrvnc/project-SSim",
        demoUrl: "",
        date: "2021-11-03"
    },
    {
        id: 4,
        title: "Backprop Tutorial",
        description: "Coding backpropagation from scratch using only numpy.",
        tags: ["Python", "NumPy", "Machine Learning"],
        githubUrl: "https://github.com/lrvnc/backprop-tutorial",
        demoUrl: "",
        date: "2025-07-05"
    }
];
