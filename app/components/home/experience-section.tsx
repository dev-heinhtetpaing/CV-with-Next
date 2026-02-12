"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = ({ ref: _ref }: { ref: React.RefObject<HTMLDivElement | null> }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

    useGSAP(() => {
        if (!sectionRef.current) return;
        gsap.registerPlugin(ScrollTrigger);

        // Set initial state for all experience items
        gsap.set(".experience-item", {
            opacity: 0,
            x: isMobile ? 0 : -100,
            y: 30
        });
        gsap.set(".experience-tech", {
            opacity: 0,
            scale: 0.8
        });

        const start = "top top";
        // Calculate end based on number of experiences - each experience gets scroll space
        const experienceCount = experience.length;
        // Use viewport height multiplier for better scroll control
        const end = `bottom+=50`; // More scroll distance for longer content

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: start,
                end: end,
                scrub: 1, // Smooth scrubbing
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
            ease: "power1.inOut"
        });

        // Animate title first
        scrollTimeline.from(".experience-title", {
            opacity: 0,
            y: -50,
            duration: 0.2,
            ease: "power2.out"
        });

        // Animate each experience item sequentially
        // Each item gets a portion of the total timeline
        const totalDuration = 1; // Total timeline duration
        const itemDuration = totalDuration / (experienceCount + 1); // Divide by count + 1 for spacing

        experience.forEach((exp, index) => {
            const itemSelector = `.experience-item-${exp.id}`;
            const techSelector = `.experience-item-${exp.id} .experience-tech`;

            // Calculate start position: after title + previous items
            const itemStart = 0.2 + (index * itemDuration * 1.2);

            scrollTimeline.to(itemSelector, {
                opacity: 1,
                x: 0,
                y: 0,
                duration: itemDuration * 0.6,
                ease: "power2.out"
            }, itemStart)
                .to(techSelector, {
                    opacity: 1,
                    scale: 1,
                    duration: itemDuration * 0.4,
                    stagger: 0.03,
                    ease: "back.out(1.7)"
                }, `+=${itemDuration * 0.2}`);
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars?.trigger === sectionRef.current) {
                    trigger.kill();
                }
            });
        };
    }, { scope: sectionRef, dependencies: [isMobile, experience.length] });

    return (
        <div ref={sectionRef} id="experience-section" className="relative layer w-full radial-gradient">
            <div className="h-full container mx-auto px-4 sm:px-8 py-20 overflow-hidden">
                <h1 className="experience-title text-3xl sm:text-5xl font-bold bg-linear-to-t from-primary to-slate-500 text-transparent bg-clip-text text-center sm:text-left mb-12">
                    Experience
                </h1>

                <div className="space-y-8 sm:space-y-12">
                    {experience.map((exp) => (
                        <div
                            key={exp.id}
                            className={`experience-item experience-item-${exp.id} relative pl-8 sm:pl-12 border-l-2 border-primary/30`}
                        >
                            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary border-2 border-slate-800"></div>

                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold mb-1 text-primary">
                                        {exp.title}
                                    </h2>
                                    <h3 className="text-lg sm:text-xl text-primary mb-1">
                                        {exp.company}
                                        {exp.location && (
                                            <span className="text-base text-muted-foreground font-normal"> • {exp.location}</span>
                                        )}
                                    </h3>
                                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                                        {exp.period}
                                    </p>
                                </div>

                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            className="experience-tech bg-primary/20 text-primary border-primary/30"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;

