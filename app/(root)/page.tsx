
import HeroSection from "../components/home/hero-section";
import AboutSection from "../components/home/about-section";
import ThirdSection from "../components/home/third-section";

export default function Home() {
  
  return (
    <div className="relative w-full bg-black/80 ">
  <HeroSection />
  <AboutSection />
  <ThirdSection />
</div>
  );
}
