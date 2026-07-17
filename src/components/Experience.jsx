import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Crescent Info Tech",
      duration: "Aug 2024",
      location: "Coimbatore, India",
      desc: [
        "Developed responsive web applications using HTML, SQL and MongoDB.",
        "Optimized backend workflows.",
        "Improved database performance.",
        "Designed efficient SQL queries."
      ],
      tech: ["HTML", "SQL", "MongoDB", "JavaScript"]
    },
    {
      role: "UI/UX Design Intern",
      company: "Crescent Info Tech",
      duration: "May 2025 – Jun 2025",
      location: "Coimbatore, India",
      desc: [
        "Designed responsive wireframes.",
        "Conducted usability testing.",
        "Collaborated with developers."
      ],
      tech: ["Figma", "Wireframing", "User Experience", "Collaborative Design"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Professional <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-200/50 dark:border-slate-800 ml-4 pl-8 space-y-12 text-left font-sans">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[41px] top-1 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-full p-2 z-10 text-slate-400 group-hover:text-blue-500 group-hover:border-blue-500 shadow-sm transition-colors duration-300">
                <Briefcase size={14} />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800 hover:shadow-xl hover:border-blue-500/20 transition-all duration-355">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-450 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-purple-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center space-x-1.5">
                      <Calendar size={12} />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-1.5 mb-5">
                  <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
                    {exp.desc.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                {/* Role Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 border border-purple-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
