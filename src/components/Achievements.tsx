// components/Achievements.tsx
import { Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "1st Place – Code Craft Hackathon 2025",
    detail: "🏆 Won among 50+ teams at G H Raisoni College of Engineering.",
    icon: <Trophy className="text-yellow-400 w-6 h-6" />,
  },
  {
    title: "NIC Camp 2024",
    detail:
      "Represented Maharashtra state & RTM Nagpur University at the National Integration Camp.",
    icon: <Users className="text-green-400 w-6 h-6" />,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 px-6 bg-black text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        <span className="gradient-text">Achievements</span>
        {/* Accent line */}
        <span className="block w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"></span>
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((ach, index) => (
          <Card
            key={index}
            className="bg-gradient-to-r from-[#111] to-gray-900 border border-gray-800"
          >
            <CardContent className="p-6 flex gap-4 items-start">
              {ach.icon}
              <div>
                <h3 className="text-lg font-semibold">{ach.title}</h3>
                <p className="text-sm text-gray-400">{ach.detail}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
