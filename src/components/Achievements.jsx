import React from 'react';
import { motion } from 'framer-motion';
import { Award, Brain, Code, Rocket, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Solved 100+ LeetCode Problems",
      subtitle: "Data Structures & Algorithms",
      desc: "Demonstrated strong logic and problem-solving skills by solving over 100 challenges in Java and C++ on LeetCode.",
      icon: <Code className="text-blue-500" size={18} />,
      badge: "Problem Solving"
    },
    {
      title: "Top 10 Team in Internal Hackathon",
      subtitle: "Karpagam Institute of Technology",
      desc: "Collaborated in a team of 4 to design and implement a prototype within a 24-hour hackathon sprint, securing a top-10 rank.",
      icon: <Users className="text-purple-500" size={18} />,
      badge: "Hackathon"
    },
    {
      title: "Double Internship Experience",
      subtitle: "Web Development & UI/UX Design",
      desc: "Gained valuable real-world experience during internship terms focusing on user interface creation, frontend responsiveness, and database querying.",
      icon: <Award className="text-cyan-500" size={18} />,
      badge: "Industry Experience"
    },
    {
      title: "Active AI Learning & Specialization",
      subtitle: "Large Language Models & AI Agents",
      desc: "Built a solid foundation in prompt engineering, integration of OpenAI APIs, LLM architectures, and building autonomous agent networks.",
      icon: <Brain className="text-indigo-500" size={18} />,
      badge: "AI Specialization"
    },
    {
      title: "Full Stack Development Projects",
      subtitle: "Attendance App & MediFind",
      desc: "Designed, integrated, and verified high-quality database solutions utilizing Spring Boot backends, React interfaces, and SQL/PostgreSQL databases.",
      icon: <Rocket className="text-emerald-500" size={18} />,
      badge: "Portfolio Projects"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Key <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 pl-8 space-y-12 text-left">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Node Dot */}
              <div className="absolute -left-[41px] top-1 bg-white dark:bg-[#0a0f1d] border-2 border-slate-200 dark:border-slate-800 rounded-full p-2 z-10 text-slate-500 group-hover:text-blue-500 group-hover:border-blue-500 transition-colors shadow-sm">
                {ach.icon}
              </div>

              {/* Achievements Block */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <h3 className="text-lg font-bold font-display text-slate-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {ach.title}
                  </h3>
                  <span className="inline-flex self-start sm:self-auto items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50">
                    {ach.badge}
                  </span>
                </div>

                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {ach.subtitle}
                </p>

                <p className="text-sm font-light text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
