import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// FontAwesome (fa) icons
import { 
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaFileExcel,
  FaChartBar,
  FaDatabase,
} from "react-icons/fa";

// SimpleIcons (si) icons
import { 
  SiPython,
  SiTailwindcss,
  SiFigma,
  SiMongodb,
  SiScikitlearn,
  SiC,
  SiCplusplus,
  SiTableau,
  SiMysql,
} from "react-icons/si";



gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

const skills = [
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "SQL (MySQL)", icon: SiMysql, color: "text-blue-500" },
  { name: "Power BI", icon: FaChartBar, color: "text-yellow-400" },
  { name: "Tableau", icon: SiTableau, color: "text-orange-500" },
  { name: "Excel", icon: FaFileExcel, color: "text-green-500" },
  { name: "Machine Learning", icon: SiScikitlearn, color: "text-orange-400" },

  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
  { name: "C", icon: SiC, color: "text-blue-400" },
];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, filter: "blur(10px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Image animation
      // gsap.fromTo(
      //   imageRef.current,
      //   { x: -100, opacity: 0 },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     duration: 1.2,
      //     ease: "power2.out",
      //     scrollTrigger: {
      //       trigger: imageRef.current,
      //       start: "top 80%",
      //     },
      //   }
      // );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );

      // Skills stagger animation
      gsap.fromTo(
        ".skill-icon",
        { y: 30, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* Content */} 
            <div ref={contentRef} className="space-y-8" >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I’m <strong>Jay R Umap</strong>, a BCA Graduate and aspiring Data Scientist with a passion for turning raw data into actionable insights.  
                Skilled in <strong>Python, SQL, Power BI, and Excel</strong>, I specialize in data analysis, visualization, and building practical solutions that solve real-world challenges.  
                My experiences—from developing analytics projects to winning hackathons—have strengthened my problem-solving mindset, teamwork, and adaptability.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy exploring emerging technologies, contributing to projects, and engaging with the developer community.  
                My vision is to leverage <strong>AI and Machine Learning</strong> to create solutions that drive meaningful impact.
              </p>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">
                Skills & Expertise
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="skill-icon flex flex-col items-center text-center group cursor-pointer"
                    >
                      <IconComponent
                        size={40}
                        className={`${skill.color} mb-3 group-hover:scale-125 transition-transform duration-300`}
                      />
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
