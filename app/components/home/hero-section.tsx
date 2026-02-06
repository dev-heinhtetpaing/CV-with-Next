"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/lib/data";

const HeroSection = () => {
  const scrollToView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // const badgeContainer=document.querySelector(".badges-container");
  const mobileWidth = useMediaQuery({ query: "(max-width: 460px)" });
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgesContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const start = "top top"
    const end = "bottom+=200"
    const containerSize = {
      width: badgesContainerRef?.current?.offsetWidth || 0,
      height: badgesContainerRef?.current?.offsetHeight || 0
    }
    console.log(containerSize);
    const b1Size = { width: document.querySelector(".b1")?.getBoundingClientRect().width || 0, height: document.querySelector(".b1")?.getBoundingClientRect().height || 0 };
    const endPoint = mobileWidth ? { x: 0, y: -containerSize.width + b1Size.width/2 || 0 } : { x: -((containerSize.width - b1Size.width || 0) / 1.5 || 0), y: -(containerSize.height + b1Size.height / 4) || 0 };
    const midPoint = mobileWidth ? { x: 0, y: -containerSize.width/2 - b1Size.width/2 || 0 } : { x: -((containerSize.width + b1Size.width || 0) / 5 || 0), y: -(containerSize.height / 2 + b1Size.height * 2) || 0 };
    const startPoint = mobileWidth ? { x: 0, y: -b1Size.height*1.5 || 0 } : { x: -(b1Size.width || 0), y: -(2 * b1Size.height || 0) };
    const initialPoint = { x: 0, y: 0 };


    const MasterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: start,
        end: end,
        pin: true,
        scrub: true,
        // markers: true,
      }
    })


    MasterTimeline.to(".b1", {
      motionPath: {
        path: [
          initialPoint,
          // startPoint,
          midPoint,
          endPoint
        ],
        curviness: 1.5
      },
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    }).to(".b2", {
      motionPath: {
        path: [
          initialPoint,
          // startPoint,
          midPoint,
        ],
        curviness: 1.5
      },
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    },).to(".b3", {
      motionPath: {
        path: [
          initialPoint,
          startPoint,
        ],
        curviness: 1.5
      },
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    },) // overlap
  }, { scope: sectionRef });
  return (
    <div  ref={sectionRef} id="hero-section" className="w-full  min-h-screen relative sm:py-20 py-10 snap-start">
      <main className="sm:w-1/2 w-full sm:ml-auto  ">
        <div className="mx-5 sm:mx-15 space-y-5">
          <h1 className="text-2xl sm:text-5xl font-bold bg-linear-to-t from-primary to-slate-500 text-transparent bg-clip-text text-center pt-10 sm:text-left container mx-auto ">Hein Htet Paing</h1>
          <section className="container mx-auto space-y-5">
            <p className="text-sm sm:text-base text-center  leading-loose tracking-normal sm:leading-loose sm:tracking-wide sm:text-left container text-muted-foreground mx-auto ">{personalInfo.objectives}</p>
            <div className="container mx-auto flex gap-2 justify-center items-center sm:justify-start">
              {personalInfo.cta.map(cta => <Badge key={cta.label} onClick={() => scrollToView(cta.href)} className="cursor-pointer ">{cta.label}</Badge>)}
            </div>
          </section>
        </div>
      </main>

      <div className="absolute bottom-0 h-[70vh] w-full sm:h-[80vh]
     ">
        <div className="relative h-full w-full sm:w-1/2 mr-auto">
          <Image src="/hein.png" alt="Hein's Image" className=" object-cover " fill={true} />
        </div>
      </div>
      <div className="absolute bottom-0  left-0 md:left-15 sm:left-10 xl:left-25 sm:w-1/2 w-full  xl:w-1/2 h-2/3 ">
        <div className="relative w-full h-full " ref={badgesContainerRef}>
          {/* <div className="absolute bottom-0 right-0 "> */}
          <div className="absolute badge bottom-0 opacity-0 right-0 b1 w-18 h-18 shadow-lg rounded-full border-2 border-gray-200">
            <Image src="/icon-nextjs.svg" alt="Next.js" fill className="p-2" />
            {/* <link rel="icon" href="/icon?next.svg" type="image/svg" /> */}

          </div>
          <div className="absolute badge bottom-0 opacity-0 right-0 b2 w-18 h-18 shadow-lg rounded-full border-2 border-gray-200">
            <Image src="/icon-react.svg" alt="React" fill className="p-2" />
          </div>
          <div className="absolute badge bottom-0 opacity-0 right-0 b3 w-18 h-18 shadow-lg rounded-full border-2 border-gray-200">
            <Image src="/icon-nodejs.svg" alt="Node.js" fill className="p-2" />
            {/* </div> */}
          </div>


        </div>
      </div>



    </div>
  );
};

export default HeroSection; 