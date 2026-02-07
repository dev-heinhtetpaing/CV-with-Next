"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
// import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

const AboutSection = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 460px)" });
  useGSAP(() => {
    if (!sectionRef.current) return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const start = isMobile ? "top 50%" : "top top";
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
      .from(".mask-image-container", {
        duration: 1,
        maskSize: "25%",
        x: isMobile ? "0%" : "50%",
        translateX: isMobile ? "0%" : "-50%",
        maskPosition: "center",
        ease: "power1.inOut",
      })
      .from([".mask-image",".image"], {
        duration: 2,
        rotate: 180,
        maskSize: "20%",
        ease: "power1.inOut",
        
      }, )
      // .to(".image", {
      //   opacity: 1,
      //   duration: 0.5,
      //   ease: "power1.inOut",
      // }, "<0.3")
      .to(".mask-image", {
        maskImage: "none",
        duration: 1,
        ease: "power1.inOut",
      },)
      .to(".mask-container", {
        gap: 10,
        ease: "power1.inOut",
        duration: 0.6,
      }, )
      .from(".mask-content", {
        opacity: 0,
        duration: 0.8,
        x: 100,
        ease: "power2.out",
      }, );

    // Cleanup function - useGSAP handles most cleanup, but we ensure ScrollTrigger is properly cleaned up
    return () => {
      if (scrollTimeline) {
        scrollTimeline.kill();
      }
    };
  }, { scope: sectionRef, dependencies: [] })
  return (
    <div ref={sectionRef} id="about-section" className="relative min-h-screen w-full" >
      <div className="w-full h-screen min-h-screen relative container mx-auto  ">
        <div className="mask-container  ">
          <div className="mask-image-container  w-1/2 mx-auto items-center px-10 h-[512px] aspect-square relative">

            <Image className="rounded-lg mask-image image" src="/hein-bg.png" alt="About" fill />
            
          </div>

          <div className=" mask-content ">
            <p><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem consequatur quo nemo, praesentium labore vero laudantium iure optio debitis. Error quis sequi consequatur cum, optio odit facere accusamus. Reprehenderit, commodi.</span><span>Provident amet distinctio rerum adipisci repudiandae voluptatum temporibus nihil, tempora laboriosam facilis aspernatur corrupti rem maxime iusto itaque dolorem sequi maiores, quaerat facere? Quaerat dolorum similique eos dignissimos tenetur porro.</span></p>
          </div>
        </div>
        {/* <div className="layer ">
        <h1>
         layer 2
        </h1>
      </div>
      <div className="layer ">
        <h1>
         layer 3
        </h1>
      </div> */}
      </div>
    </div>
  );
};

export default AboutSection;