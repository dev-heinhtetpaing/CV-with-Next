const objectives =
"Results-driven full-stack web developer experienced in delivering production-grade, SEO-optimized applications from concept to deployment. Adept at modernizing legacy systems, designing scalable APIs, and operating cloud/VPS environments using Docker, Nginx, and CI/CD pipelines. Focused on performance, maintainable architecture, and building solutions that directly support business growth.";

const shortObjectives =
"Full-stack web developer specializing in React and Next.js, with strong experience building scalable web interfaces and reliable backend services using Node.js and TypeScript.";

const cta=[{
    label:"ViewProjects",
    href:"#projects"
},
{
    label:"Get in Touch",
    href:"#contact"
}
]

export const personalInfo={
    name:"Hein Htet Paing",
    objectives:objectives,
    shortObjectives:shortObjectives,
    cta:cta
}

export const experience = [
    {
        id: 1,
        title: "Full-Stack Developer",
        company: "House and Hedges",
        location: "Dubai, UAE",
        period: "September 2025 – Present",
        description: "Architected and launched a custom real estate platform replacing a legacy WordPress system. Designed full-stack architecture using React, TypeScript, Node.js, and PostgreSQL. Executed complete data migration including structured property data, blog content, and media assets. Optimized performance via code refactoring, caching strategies, and server-level tuning. Implemented technical SEO including structured data, sitemap automation, and metadata optimization. Containerized applications using Docker and configured Nginx reverse proxy for production deployment. Built CI/CD pipelines using GitHub Actions for automated builds and deployments. Managed Linux VPS infrastructure including DNS records, SSL certificates, and release cycles.",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Nginx", "GitHub Actions", "Linux", "CI/CD"]
    },
    {
        id: 2,
        title: "Full-Stack Developer",
        company: "Independent Projects",
        location: "Remote",
        period: "January 2025 – September 2025",
        description: "Developed full-stack applications including a social media platform and restaurant management system. Implemented authentication, role-based access control, and secure API layers. Built real-time features using WebSocket communication. Designed relational and NoSQL database schemas aligned with business logic. Deployed containerized applications to VPS environments.",
        technologies: ["React", "Node.js", "WebSocket", "MongoDB", "PostgreSQL", "Docker", "Express"]
    },
    {
        id: 3,
        title: "Junior Web Developer",
        company: "PROMES MM",
        location: "Myanmar",
        period: "May 2023 – November 2023",
        description: "Built responsive dashboards using React.js and Tailwind CSS. Collaborated in agile sprint cycles and code reviews. Implemented reusable UI components based on design specifications.",
        technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"]
    }
];

export const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React", level: 90, icon: "/icon-react.svg" },
            { name: "Next.js", level: 80, icon: "/icon-nextjs.svg" },
            { name: "TypeScript", level: 85, icon: "/icon-nextjs.svg" },
            { name: "JavaScript", level: 90, icon: "/icon-react.svg" },
            { name: "HTML/CSS", level: 95, icon: "/icon-react.svg" },
            { name: "Tailwind CSS", level: 85, icon: "/icon-react.svg" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", level: 85, icon: "/icon-nodejs.svg" },
            { name: "Express", level: 80, icon: "/icon-nodejs.svg" },
            { name: "REST APIs", level: 85, icon: "/icon-nodejs.svg" },
            { name: "MongoDB", level: 75, icon: "/icon-react.svg" },
            { name: "PostgreSQL", level: 75, icon: "/icon-react.svg" }
        ]
    },
    {
        category: "Tools & Others",
        items: [
            { name: "Git", level: 85, icon: "/icon-react.svg" },
            { name: "Docker", level: 75, icon: "/icon-react.svg" },
            { name: "AWS", level: 70, icon: "/icon-react.svg" },
            { name: "CI/CD", level: 70, icon: "/icon-react.svg" },
            { name: "Nginx", level: 70, icon: "/icon-react.svg" },
            { name: "Linux", level: 85, icon: "/icon-react.svg" },
        ]
    }
];

export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard. Built with Next.js, Node.js, and MongoDB.",
        image: "/hein-bg.png",
        technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com",
        live: "https://example.com",
        featured: true
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "/hein-bg.png",
        technologies: ["React", "Firebase", "Material-UI"],
        github: "https://github.com",
        live: "https://example.com",
        featured: true
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A modern, animated portfolio website showcasing projects and skills with smooth GSAP animations and responsive design.",
        image: "/hein-bg.png",
        technologies: ["Next.js", "GSAP", "Tailwind CSS"],
        github: "https://github.com",
        live: "https://example.com",
        featured: false
    },
    {
        id: 4,
        title: "Weather Dashboard",
        description: "A weather dashboard application with location-based forecasts, interactive maps, and detailed weather analytics.",
        image: "/hein-bg.png",
        technologies: ["React", "OpenWeather API", "Chart.js"],
        github: "https://github.com",
        live: "https://example.com",
        featured: false
    }
];

export const contact = {
    email: "heinhtetpaing@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    social: [
        { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
        { name: "GitHub", url: "https://github.com", icon: "github" },
        { name: "Twitter", url: "https://twitter.com", icon: "twitter" }
    ]
};