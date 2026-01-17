import { Button } from "@/components/ui/button";
import {  Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";


const Header = () => {
 
  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 h-16   z-50 w-1/3 mx-auto ">
      <nav className="flex items-center justify-between">
        <nav className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold cursor-pointer text-white">Hein</Link>
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