import { Button } from "@/components/ui/button";
import {  Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";


const Header = () => {
 
  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 h-16   z-50 sm:w-2/3 w-full  mx-auto ">
      <nav className="flex items-center sm:justify-between justify-around h-full ">
        <nav className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold cursor-pointer text-primary">Hein</Link>
        </nav>
        <nav className="flex items-center gap-2">
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