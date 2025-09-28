import { useState } from "react";
import emailjs from "@emailjs/browser";

const ResumeDownload = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [resumeType, setResumeType] = useState("data-analyst");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ru6zvkf", // ✅ Your EmailJS service ID
        "template_5lzbzy7", // ✅ Your EmailJS template ID
        {
          user_email: email, // recipient
          resume_choice: resumeType === "data-analyst" ? "Data Analyst" : "AI / ML",
          resume_link:
            resumeType === "data-analyst"
              ? "https://drive.google.com/uc?export=download&id=1lJ_OCzZ2O0LNyIezgLxZDaNcVANhHmej"
              : "https://drive.google.com/uc?export=download&id=1-q6juMQYoe-BqR1ZRIfpHSMgvR894ICT",
          owner_email: "umapjayr@gmail.com", // ✅ your Gmail to notify
        },
        "yt3N4sC68-DpbXvBs" // ✅ your EmailJS public key
      )
      .then(() => {
        alert("✅ Resume sent successfully!");
        setShowForm(false);
        setEmail("");
      })
      .catch(() => {
        alert("❌ Failed to send resume. Please try again.");
      });
  };

  return (
    <div>
      {/* Button to open form */}
      <button
        onClick={() => setShowForm(true)}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90 transition"
      >
        Download Resume
      </button>

      {/* Dark Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-neutral-900 text-white p-6 rounded-2xl shadow-lg w-96 border border-white/10">
            <h2 className="text-xl font-bold mb-4 text-center">
              Get My Resume
            </h2>

            <form onSubmit={sendEmail} className="space-y-4">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Resume Type Dropdown */}
              <select
                value={resumeType}
                onChange={(e) => setResumeType(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="data-analyst">📊 Data Analyst Resume</option>
                <option value="ai-ml">🤖 AI / ML Resume</option>
              </select>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium shadow hover:opacity-90 transition"
              >
                Send Resume
              </button>

              {/* Cancel Button */}
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="w-full py-2 bg-neutral-800 text-gray-300 rounded-lg hover:bg-neutral-700 transition"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeDownload;
