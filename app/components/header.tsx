import { Button } from "@/components/ui/button";
import {  Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";


const Header = () => {
 
  return (
    <header className="fixed top-5 sm:left-1/2 left-0 transform sm:-translate-x-1/2 translate-x-0  h-16   z-50 sm:w-2/3 w-screen mx-auto ">
      <nav className="flex items-center sm:justify-between justify-around h-full ">
        <nav className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold cursor-pointer text-secondary">Hein <span className="text-primary">Htet</span></Link>
        </nav>
        <nav className="flex items-center gap-2 justify-between">
          <Button className="rounded-full border-2 cursor-pointer border-gray-200">
            <Github/>
          </Button>
          <Button className="rounded-full border-2 cursor-pointer border-gray-200">
            <Linkedin/>
          </Button>
          <Button className="rounded-full border-2 cursor-pointer border-gray-200">
            <Mail/>
          </Button>
        </nav>
      </nav>
    </header>
  );
};

export default Header;