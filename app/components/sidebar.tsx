"use client";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { Mail, Network, Pickaxe, User, Waypoints } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
const Sidebar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  useGSAP(()=>{
    gsap.to(".Button",{
      hover:{
        scale:1.1,
        duration:5,
        ease:"power2.inOut"
      }
    })
  },{scope:sidebarRef})
  const scrollToView=(id:string)=>{
    const element=document.getElementById(id);
    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }
  }
  return (
    <nav ref={sidebarRef} className="fixed top-1/2 -translate-y-1/2 z-99 right-5 max-h-screen h-2/3 w-32 bg-transparent  dark:bg-black flex flex-col items-center justify-center">
      {/* <h1>Sidebar</h1> */}
      <div className="absolute right-0">
        <div className=" flex-col items-end justify-end transition-all duration-300 gap-8 hidden md:flex">
        <Button
  className="group hover:shadow-2xl transition-all duration-300 shadow-lg py-5 w-auto"
  asChild
>
  <Button
    onClick={() => scrollToView("hero-section")}
    className="flex items-center justify-end gap-2"
  >
    <span
      className="
        opacity-0
        scale-95
        max-w-0
        overflow-hidden
        whitespace-nowrap

        transition-all
        duration-300
        ease-out

        group-hover:opacity-100
        group-hover:scale-100
        group-hover:max-w-[100px]
      "
    >
      Profile
    </span>

    <User className="w-6 h-6 m-1" />
  </Button>
</Button>


          <Button
            className="w-auto group hover:shadow-2xl transition-all duration-300 shadow-lg py-5"
            asChild
          >
            <div className="flex items-center justify-end gap-2 ">
              <Link
                href="/skills"
                className="hidden group-hover:inline group-hover:duration-500 group-hover:animate-pulse duration-900 font-bold"
              >
                Skills
              </Link>
              <Pickaxe className="w-6 h-6 m-1" />
            </div>
          </Button>
          <Button
            className="w-auto group hover:shadow-2xl transition-all duration-300 shadow-lg py-5"
            asChild
          >
            <div className="flex items-center justify-end gap-2">
              <Link
                href="/projects"
                className="hidden group-hover:inline group-hover:duration-500 group-hover:animate-pulse duration-900 font-bold"
              >
                Projects
              </Link>
              <Network className="w-6 h-6 m-1" />
            </div>
          </Button>
          <Button
            className="w-auto group hover:shadow-2xl transition-all duration-300 shadow-lg py-5"
            asChild
          >
            <div className="flex items-center justify-end gap-2">
              <Link
                href="/experience"
                className="hidden group-hover:inline group-hover:duration-500 group-hover:animate-pulse duration-900 font-bold"
              >
                Experience
              </Link>
              <Waypoints className="w-6 h-6 m-1" />
            </div>
          </Button>
          <Button
            className="w-auto group hover:shadow-2xl transition-all duration-300 shadow-lg py-5"
            asChild
          >
            <div className="flex items-center justify-end gap-2">
              <Link
                href="/contact"
                className="hidden group-hover:inline group-hover:duration-500 group-hover:animate-pulse duration-900 font-bold"
              >
                Contact
              </Link>
              <Mail className="w-6 h-6 m-1" />
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
