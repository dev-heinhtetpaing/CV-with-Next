"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { skills } from "@/lib/data";
import Image from "next/image";

const SkillsSection = ({ ref: _ref }: { ref: React.RefObject<HTMLDivElement | null> }) => {
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
            .from(".skills-title", {
                opacity: 0,
                y: -50,
                duration: 0.6,
                ease: "power2.out"
            })
            .from(".skill-category", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.3,
                ease: "power2.out"
            }, "-=0.4")
            .from(".skill-item", {
                opacity: 0,
                scale: 0.8,
                x: -30,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.6")
            .from(".skill-bar-fill", {
                width: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.4");

        return () => {
            if (scrollTimeline) {
                scrollTimeline.kill();
            }
        };
    }, { scope: sectionRef, dependencies: [isMobile] });

    return (
        <div ref={sectionRef} id="skills-section" className="relative layer w-full radial-gradient">
            <div className="h-full container mx-auto px-4 sm:px-8 py-20 overflow-hidden">
                <h1 className="skills-title text-3xl sm:text-5xl font-bold bg-linear-to-t from-primary to-slate-500 text-transparent bg-clip-text text-center sm:text-left mb-12">
                    Skills
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                    {skills.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="skill-category">
                            <h2 className="text-xl sm:text-2xl font-bold  mb-6 text-center sm:text-left text-primary">
                                {category.category}
                            </h2>

                            <div className="space-y-6">
                                {category.items.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                {skill.icon && (
                                                    <div className="w-6 h-6 relative ">
                                                        <Image
                                                   
                                                            src={skill.icon}
                                                            alt={skill.name}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                )}
                                                <span className="text-sm sm:text-base font-medium text-muted-foreground">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                                            <div
                                                className="skill-bar-fill h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;

