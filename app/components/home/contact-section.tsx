"use client";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { contact } from "@/lib/data";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ContactSection = ({ ref: _ref }: { ref: React.RefObject<HTMLDivElement | null> }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const start = "top top";
    const end = "bottom+=50";

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: start,
        end: end,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
      ease: "power1.inOut"
    });

    scrollTimeline
      .from(".contact-title", {
        opacity: 0,
        y: -50,
        duration: 0.6,
        ease: "power2.out"
      })
      .from(".contact-info-item", {
        opacity: 0,
        x: -50,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=0.4")
      .from(".contact-form", {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      .from(".contact-social", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.4");

    return () => {
      if (scrollTimeline) {
        scrollTimeline.kill();
      }
    };
  }, { scope: sectionRef, dependencies: [isMobile] });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "linkedin":
        return <Linkedin className="w-5 h-5  text-primary" />;
      case "github":
        return <Github className="w-5 h-5 text-primary" />;
      case "twitter":
        return <Twitter className="w-5 h-5 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div ref={sectionRef} id="contact-section" className="relative layer w-full radial-gradient">
      <div className="h-full container mx-auto px-4 sm:px-8 py-20 overflow-hidden">
        <h1 className="contact-title text-3xl sm:text-5xl font-bold bg-linear-to-t from-primary to-slate-500 text-transparent bg-clip-text text-center sm:text-left mb-12">
          Get In Touch
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="contact-info-item flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-base sm:text-lg text-primary hover:text-primary/80 transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              
              <div className="contact-info-item flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-base sm:text-lg text-primary hover:text-primary/80 transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="contact-info-item flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-base sm:text-lg text-primary">
                    {contact.location}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Follow me</p>
              <div className="flex gap-4 ">
                {contact.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social w-12 h-12 rounded-full bg-slate-700/50 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary transition-all duration-300 "
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

