"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { personalInfo } from "@/lib/data";


const AboutSection = () => {
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  useGSAP(() => {
    if (!sectionRef.current) return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const start = "top top";
    const end =  "bottom+=50";

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: start,
        end: end,
        scrub: 1, // Smooth scrubbing with slight delay for better performance
        pin: true,
        anticipatePin: 1, // Smooth pinning transitions
        markers: false, // Disabled for production
        invalidateOnRefresh: true, // Recalculate on resize
        refreshPriority: 0, // Standard refresh priority
       
      },
      
      ease: "power1.inOut"
    })
    scrollTimeline
    .from(".mask-image", {
      duration: 0.8,
      rotate: 180,
      opacity: 1,
      zIndex: 11,
      backgroundColor: "#61dbfb",
      maskSize: "20%",
      ease: "power1.inOut",
    },).to(".mask-image", {
      maskImage: "none",
      ease: "power1.inOut",
      duration: 0.1,
    },)
    .from(".mask-image-container", {
      backgroundImage: "none",
      duration: 0.1,
      y:isMobile ? "50%" : "0%",
      backgroundColor: "blue",
      ease: "power1.inOut",
    },"<")
      .from(".mask-image-container", {
        duration: 0.5,
        x: isMobile ? "0%" : "50%",
        translateX: isMobile ? "0%" : "-50%",
        ease: "power1.inOut",
      },)
      .from(".mask-content", {
        opacity: 0,
        duration: 0.4,
        x: 100,
        ease: "power2.out",
      }, );

    
    return () => {
      if (scrollTimeline) {
        scrollTimeline.kill();
      }
    };
  }, { scope: sectionRef, dependencies: [] })
  return (
    <div ref={sectionRef} id="about-section" className="relative layer w-full  radial-gradient snap-start " >
      <div className=" h-full ">
        <div className="mask-container  ">
          <div className="mask-image-container">
          <div className="mask-image">
          </div>
          </div>
          <div className=" mask-content ">
          <div className=" space-y-5">
          <h1 className="text-2xl sm:text-5xl font-bold bg-linear-to-t from-primary to-slate-500 text-transparent bg-clip-text text-center pt-10 sm:text-left container mx-auto ">{personalInfo.name}</h1>
          <section className="container mx-auto space-y-5">
            <p className="text-sm sm:text-base text-center  leading-loose tracking-normal sm:leading-loose sm:tracking-wide sm:text-left container text-muted-foreground mx-auto ">{personalInfo.objectives}</p>
            <div className="container mx-auto flex gap-2 justify-center items-center sm:justify-start">
            </div>
          </section>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutSection;