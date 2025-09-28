import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import profile from "/assets/profile.png";
import A from "/assets/scroll/A.jpg";
import B from "/assets/scroll/B.png";
import C from "/assets/scroll/C.jpg";
import D from "/assets/scroll/D.jpg";
import E from "/assets/scroll/E.jpg";
import F from "/assets/scroll/F.jpg";
import G from "/assets/scroll/G.png";
import H from "/assets/scroll/H.png";
import I from "/assets/scroll/I.png";

const CertificateData = [
   {
    title: "30-Days Power BI Micro Course",
    issuer: "Skill Course",
    date: "Feb 2025",
    link: "30-Days Power Bi Micro Course.pdf",
  },
  {
    title: "Data Analysis using Python Certification",
    issuer: "DataFlair",
    date: "Dec 2024",
    link: "https://data-flair.training/verify/7EE1F0365E-7EE1F0365C-758B8E312A/",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft 365 Partner",
    date: "Jul 2024",
    link: "https://www.linkedin.com/learning/certificates/8b85fefc0effa93841b57f0e08662f745601944f77f2e7bb8e3fd5c3152f17c9",
  },
  {
    title: "What Is Generative AI?",
    issuer: "LinkedIn",
    date: "Mar 2024",
    link: "https://www.linkedin.com/learning/certificates/12fa05a463b7619f3d2b9987d0fcf237b3903d80333927ebb2e46f3e9ca99313", 
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "Nov 2023",
    link: "https://www.credly.com/badges/09ba162a-d2d1-48b5-8da6-e78b55890c7b/linked_in?t=s4rlg6",
  },
];
// Replace with your real images
const galleryImages = [profile, A, B, C, D, E, F, G, H, I];

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 px-6 bg-black text-white">
        
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        <span className="inline-block">
        <span className="gradient-text">Certification</span>
          {/* Accent line */}
          <span className="block w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"></span>
        </span>
      </h2>      

      {/* <h2 className="text-2xl font-bold mb-6 text-white">
        <span className="gradient-text">Certification </span>
        {/* Accent line */}
        
        {/* <span className="block w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"></span>
      </h2> */} 
      {/* Make left smaller, right bigger */}
      {/* GRID LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
        {/* LEFT COLUMN - Certificates Timeline (scroll clipped) */}
        <div className="h-[600px] overflow-hidden">
          {" "}
          {/* 👈 wrapper fixes the clip */}
          <motion.div
            className="w-full"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 50, // adjust speed here
              ease: "linear",
            }}
          >
            {/* Duplicate experiences for seamless loop */}
            {[...CertificateData, ...CertificateData].map((exp, index) => (
              <div
                key={index}
                className="mb-8 relative group pl-8 border-l border-gray-700"
              >
                {/* Timeline Dot */}
                <span
                  className="absolute left-0 top-5 -translate-x-1/2 w-4 h-4 
                     bg-gray-700 rounded-full border-2 border-gray-900 
                     group-hover:border-green-400 transition"
                ></span>

                {/* Card */}
                <Card className="bg-gradient-to-r from-[#111] to-gray-900 border border-gray-800 shadow-md flex transition group-hover:border-green-400">
                  <CardContent className="p-4 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.issuer}</p>
                    <p className="text-sm text-gray-500">{exp.date}</p>
                    <p className="text-sm text-gray-500">
                        {exp.link && (
                            <a href={exp.link} target="_blank" className="text-green-400 underline">
                                View Credential
                            </a>
                        )}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Infinite Vertical Galleries */}
        <div className="grid grid-cols-3 gap-4 overflow-hidden rounded-2xl h-[600px]">
          {[0, 1, 2].map((col) => (
            <motion.div
              key={col}
              className="flex flex-col gap-4"
              animate={{
                y: col === 1 ? ["-50%", "0%"] : ["0%", "-50%"], // middle column downward, others upward
              }}
              transition={{
                repeat: Infinity,
                duration: col % 2 === 0 ? 25 : 35, // alternate speeds
                ease: "linear",
              }}
            >
              {[...galleryImages, ...galleryImages].map((src, i) => {
                let imgHeight;
                if (col === 0) imgHeight = i % 2 === 0 ? "h-80" : "h-56";
                else if (col === 1) imgHeight = i % 2 === 0 ? "h-72" : "h-60";
                else imgHeight = i % 2 === 0 ? "h-48" : "h-64";

                return (
                  <img
                    key={`${col}-${i}`}
                    src={src}
                    alt={`gallery-${col}-${i}`}
                    className={`w-full object-cover rounded-xl ${imgHeight}`}
                  />
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
