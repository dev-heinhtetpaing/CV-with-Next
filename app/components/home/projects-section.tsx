"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { projects } from "@/lib/data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = ({ ref: _ref }: { ref: React.RefObject<HTMLDivElement | null> }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

    useGSAP(() => {
        if (!sectionRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const start = "top top";
        const end = "bottom+=50";

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: start,
                end: end,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
            ease: "power1.inOut"
        });

        scrollTimeline
            .from(".projects-title", {
                opacity: 0,
                y: -50,
                duration: 0.6,
                ease: "power2.out"
            })
            .from(".project-card", {
                opacity: 0,
                y: 100,
                scale: 0.9,
                rotation: isMobile ? 0 : 5,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.4")
            .from(".project-image", {
                opacity: 0,
                scale: 1.2,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.6")
            .from(".project-tech", {
                opacity: 0,
                scale: 0.8,
                duration: 0.4,
                stagger: 0.05,
                ease: "back.out(1.7)"
            }, "-=0.4");

        return () => {
            if (scrollTimeline) {
                scrollTimeline.kill();
            }
        };
    }, { scope: sectionRef, dependencies: [isMobile] });

    return (
        <div ref={sectionRef} id="projects-section" className="relative layer w-full radial-gradient">
            <div className="h-full container mx-auto px-4 sm:px-8 py-20 overflow-hidden">
                <h1 className="projects-title text-3xl sm:text-5xl font-bold bg-linear-to-t from-primary to-slate-500 text-transparent bg-clip-text text-center sm:text-left mb-12">
                    Projects
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card group relative bg-slate-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50 hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="relative h-48 sm:h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="project-image object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                                {project.featured && (
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-primary text-primary-foreground">
                                            Featured
                                        </Badge>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 space-y-4">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            className="project-tech bg-primary/20 text-primary border-primary/30"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-2">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span className="text-sm">Code</span>
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        <span className="text-sm">Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;

