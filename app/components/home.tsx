"use client";
import { useRef } from "react";
import HeroSection from "./home/hero-section";
import AboutSection from "./home/about-section";
import ExperienceSection from "./home/experience-section";
import SkillsSection from "./home/skills-section";
import ProjectsSection from "./home/projects-section";
import ContactSection from "./home/contact-section";

const Home = () => {
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const experienceSectionRef = useRef<HTMLDivElement | null>(null);
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative w-full bg-slate-800">
      <HeroSection ref={heroSectionRef} />
      <AboutSection ref={aboutSectionRef} />
      <SkillsSection ref={skillsSectionRef} />
      <ExperienceSection ref={experienceSectionRef} />
     
      <ProjectsSection ref={projectsSectionRef} />
      <ContactSection ref={contactSectionRef} />
    </div>
  );
};

export default Home;