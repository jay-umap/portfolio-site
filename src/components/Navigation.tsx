import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// import { User, Monitor, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
// import ResumeDownload from "./ResumeDownload";

const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);
  // const [showStars, setShowStars] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
    );
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      // If not on homepage, navigate first then scroll
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300); // delay so DOM loads
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:px-0"
      ref={navRef}
    >
      <div className="flex items-center justify-center gap-3 sm:gap-4 bg-neutral-900/70 backdrop-blur-3xl rounded-full px-4 sm:px-6 py-2 border border-white/10 shadow-lg max-w-fit mx-auto">
        
        {/* Hero/About */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("hero")}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 transition text-white text-lg"
        >
          👤
        </motion.button>

        {/* Projects */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("projectSection")}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 transition text-white text-lg"
        >
          💻
        </motion.button>

        {/* Experience */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("experience")}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 transition text-white text-lg"
        >
          📂
        </motion.button>

        {/* Contact */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("contact")}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black shadow-md hover:bg-gray-200 transition text-lg"
        >
          📩
        </motion.button>
      </div>

    </div>
  );
};

export default Navigation;