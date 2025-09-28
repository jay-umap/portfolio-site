// components/Experience.tsx
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Python Development Intern",
    date: "Jul – Sept 2024",
    role: "AmpleMind, Nagpur",
    project:
      "Built Tkinter-based GUI apps, data visualizations, and Arduino automation scripts",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-black text-white">
      <h2 className="text-5xl font-bold mb-10 text-center">
        <span className="gradient-text">Experience</span>
        {/* Accent line */}
        <span className="block w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"></span>
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="bg-gradient-to-r from-[#111] to-gray-900 border border-gray-800"
          >
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p className="text-sm text-gray-500">{exp.role}</p>
              <p className="text-sm text-gray-500 mt-2">{exp.project}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
