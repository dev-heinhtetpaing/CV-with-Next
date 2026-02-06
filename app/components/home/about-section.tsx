"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
// import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
const AboutSection = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!sectionRef) return;
    const start = "top top"
    const end = "bottom+=200"
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: start,
        end: end,
        scrub: true,
        markers: true,
        pin: true
      },
      ease: "power1.inOut"
    })
    scrollTimeline.to(".mask-image", {
      duration: 1,
      maskSize: "250%",
      maskPosition: "center",
      ease: "power1.inOut",

    }).to(".mask-image",{
      maskImage:"none",
    })
    .to(".mask-container", {
      // width: "100%",
      // height: "100%",
      display:"flex",
      gap:10,
      ease: "power1.inOut",
      duration: 1,
    })
    .to(".mask-content", {
      opacity: 1,
    })
  }, { scope: sectionRef })
  return (
    <div ref={sectionRef} id="about-section" className="relative min-h-screen w-full" >
      <div className="w-full h-screen min-h-screen relative container mx-auto  ">
        <div className="mask-container  ">
          <div className="mask-image  w-1/2 mx-auto items-center px-10 h-[512px] aspect-square relative">
            <Image className="rounded-lg " src="/hein-bg.png" alt="About" fill />
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