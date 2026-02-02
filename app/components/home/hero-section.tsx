"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
const HeroSection = () => {
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);
  const sectionRef = useRef<HTMLDivElement>(null);

  // console.log(sectionRef)


  useGSAP(() => {
    const start="top top"
    const end="bottom+=200"
    const MasterTimeline=gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: start,
        end: end,
        pin:true,
        scrub: true,
        markers: true,
      }
    })
    // MasterTimeline.from(".badge", {
    //   opacity: 0,
    //   y: 20,
    //   stagger: 0.2
    // })
  
    .from(".b1", {
      motionPath: {
        path: [
          { x: "100%", y: "100%" },
          { x: "100%", y: "100%" },
          { x: "100%", y: "100%" }
        ],
        curviness: 1.5
      },
      duration: 1,
      ease: "power2.inOut"
    })
  
    .from(".b2", {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: -60, y: -40 },
          { x: -120, y: -120 }
        ],
        curviness: 1.5
      }
    }, "<") // overlap
  
    .from(".b3", {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: -80, y: -60 },
          { x: -160, y: -160 }
        ],
        curviness: 1.5
      }
    }, "<") // overlap

    const badges=document.querySelector(".badges-container");
    if(!badges){
      return;
    }
    const onLoad=()=> {
      MasterTimeline.to(".badge", {
        y: "-=100",
        duration: 1,
        stagger: 0.1,
        ease: "power2.inOut"
      });
     }
     
    // sectionRef.current?.addEventListener("scroll", ()=>{console.log("scroll")});
   
    
  },{scope:sectionRef});
  return (
    <div ref={sectionRef} className="w-full  h-full min-h-[calc(100vh-64px)] relative ">
      <h1 className="text-2xl sm:text-5xl font-bold bg-linear-to-t from-primary to-slate-500 text-transparent bg-clip-text text-center pt-10 sm:text-left container mx-auto sm:px-10 md:px-10">Hein Htet Paing</h1>
      <section className="container mx-auto">
        <p className="text-sm sm:text-base text-center  leading-relaxed tracking-normal sm:leading-loose sm:tracking-wide sm:text-left container text-muted-foreground mx-auto sm:px-10 md:px-10">Full-stack web developer with hands-on experience building, deploying, and maintaining production-grade,
SEO-optimized web applications using React, Next.js, Node.js, and TypeScript. Proven ability to migrate
legacy systems to modern architectures, design scalable APIs, and manage cloud/VPS deployments using
Docker, Nginx, and CI/CD pipelines. Strong focus on performance, clean architecture, and real-world
business impact.</p>
      </section>
      
      <div className="absolute bottom-0  left-[-22] md:left-15 sm:left-10 lg:left-25">
<Image src="/hein.png" alt="hero-section" className=" h-[85vh] w-full object-cover mx-auto object-bottom" width={1000} height={1000} />
</div>
<div className="absolute bottom-0  left-0 md:left-15 sm:left-10 xl:left-25 sm:w-4/5 w-full  xl:w-1/2 h-2/3 ">
  <div className="relative w-full h-full  bg-red-300">
  {/* <div className="absolute bottom-0 right-0 "> */}
  <div className="badge b1 w-1/4 h-1/4 bg-blue-500">
    <p>React</p>
  </div>
  <div className="badge b2 w-1/4 h-1/4 bg-green-500">
    <p>Next.js</p>
  </div>
  <div className="badge b3 w-1/4 h-1/4 bg-yellow-500">
    <p>Node.js</p>
  {/* </div> */}
  </div>
  </div>

</div>

{/* <div className="absolute bottom-0  left-0 md:left-15 sm:left-10 xl:left-25 sm:w-4/5 w-full  xl:w-1/2 h-2/3 ">
  <div className="w-full h-full relative">
  <div className="bg-blue-500 w-1/4 h-1/4 absolute  top-1/2  right-0 -translate-y-1/2 sm:top-0 sm:right-1/3 sm:translate-x-1/3">
    <p>React</p>
  </div>
  <div className="bg-green-500 w-1/4 h-1/4 absolute bottom-1/2 translate-y-1/2  right-0 ">
    <p>Next.js</p>
  </div>
  <div className="bg-yellow-500 w-1/4 h-1/4 absolute  right-0 bottom-1/2 translate-y-1/2 sm:translate-y-0 sm:bottom-0 sm:right-0">
    <p>Node.js</p>
  </div>
  </div>
</div> */}

  </div>
  );
};

export default HeroSection; 