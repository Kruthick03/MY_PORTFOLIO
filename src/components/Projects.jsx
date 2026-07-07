import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ChevronDown, ChevronUp, Cpu, Server, Database, CheckSquare, Search } from 'lucide-react';

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      title: "Attendance Management System",
      desc: "Developed a full-stack attendance management system for students and faculty featuring dynamic REST controllers and tracking indices.",
      problem: "Traditional classroom check-ins are prone to verification delays, database desynchronizations, and loss of physical records.",
      features: [
        "Multi-role dashboards for students and faculty.",
        "REST APIs built with Java & Spring Boot.",
        "Relational entity management using PostgreSQL."
      ],
      architecture: "Java Spring Boot serves REST API endpoints, writing and updating attendance indices in a PostgreSQL database accessed via Spring Data JPA.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
      github: "https://github.com/kruthick-m",
      thumbnail: (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-gradient-to-tr from-slate-900 via-[#131b2e] to-blue-950/40">
          <rect x="20" y="20" width="360" height="180" rx="10" fill="none" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="1" />
          <rect x="35" y="35" width="330" height="20" rx="4" fill="rgba(37, 99, 235, 0.1)" />
          <circle cx="50" cy="45" r="5" fill="#2563eb" />
          <circle cx="65" cy="45" r="5" fill="#7c3aed" />
          <circle cx="80" cy="45" r="5" fill="#555" />
          <path d="M 50 150 L 120 110 L 190 130 L 260 80 L 330 100" fill="none" stroke="url(#blue-grad)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="120" cy="110" r="4" fill="#2563eb" />
          <circle cx="260" cy="80" r="4" fill="#7c3aed" />
          <foreignObject x="45" y="145" width="150" height="40">
            <div className="flex items-center space-x-1.5 text-blue-400 font-mono text-[10px]">
              <CheckSquare size={12} />
              <span>Attendance Track System</span>
            </div>
          </foreignObject>
          <defs>
            <linearGradient id="blue-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: "Medifind – Medicine Availability Finder",
      desc: "A search platform that helps users instantly check stock levels and find medicine availabilities in neighboring health hubs.",
      problem: "During medical emergencies, users lose precious time visiting physical pharmacies to check for critical prescription drugs.",
      features: [
        "Fast index search queries on medicine names.",
        "PostgreSQL schema optimized for stock records.",
        "React frontend for real-time responsiveness."
      ],
      architecture: "React interface makes API calls to Spring Boot controllers that query and retrieve active inventory from a PostgreSQL instance.",
      tech: ["Spring Boot", "React", "PostgreSQL"],
      github: "https://github.com/kruthick-m",
      thumbnail: (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-gradient-to-tr from-slate-900 via-[#131b2e] to-purple-950/40">
          <circle cx="200" cy="110" r="60" fill="rgba(124, 92, 237, 0.03)" stroke="rgba(124, 58, 237, 0.15)" strokeWidth="1" />
          <circle cx="200" cy="110" r="35" fill="rgba(124, 92, 237, 0.03)" stroke="rgba(124, 58, 237, 0.15)" strokeWidth="1" strokeDasharray="3" />
          <line x1="120" y1="110" x2="280" y2="110" stroke="rgba(124, 58, 237, 0.1)" />
          <line x1="200" y1="30" x2="200" y2="190" stroke="rgba(124, 58, 237, 0.1)" />
          <foreignObject x="188" y="98" width="24" height="24" className="text-blue-400">
            <Search size={18} />
          </foreignObject>
          <rect x="180" y="150" width="40" height="16" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="1" />
          <line x1="200" y1="150" x2="200" y2="166" stroke="rgba(124, 58, 237, 0.3)" />
          <circle cx="190" cy="158" r="3" fill="#7c3aed" />
          <foreignObject x="270" y="145" width="100" height="40">
            <div className="flex items-center space-x-1 text-purple-400 font-mono text-[10px]">
              <span>MediFind App</span>
            </div>
          </foreignObject>
        </svg>
      )
    }
  ];

  const handleToggle = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Academic & Personal <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* 2-Column Projects Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card flex flex-col h-full rounded-2xl overflow-hidden group hover:shadow-2xl hover:border-blue-500/20 transition-all duration-300 border border-slate-200/50 dark:border-slate-800 text-left"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-video overflow-hidden border-b border-slate-200/50 dark:border-slate-800">
                  {project.thumbnail}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content block */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold font-display text-slate-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm font-light text-slate-500 dark:text-zinc-400 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-500/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Expandable trigger sheet */}
                    <div className="space-y-4 pt-2">
                      <button
                        onClick={() => handleToggle(idx)}
                        className="flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp size={14} />
                            <span>Hide Details</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown size={14} />
                            <span>View Architecture & Details</span>
                          </>
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden space-y-3.5 border-t border-slate-200/50 dark:border-slate-800 pt-3 text-xs font-light text-slate-500 dark:text-zinc-400 leading-relaxed"
                          >
                            <div>
                              <span className="flex items-center space-x-1.5 font-semibold text-slate-800 dark:text-slate-200 mb-1">
                                <Cpu size={12} className="text-blue-500" />
                                <span>Problem Solved</span>
                              </span>
                              <p>{project.problem}</p>
                            </div>

                            <div>
                              <span className="flex items-center space-x-1.5 font-semibold text-slate-800 dark:text-slate-200 mb-1">
                                <Server size={12} className="text-purple-500" />
                                <span>Key Features</span>
                              </span>
                              <ul className="list-disc pl-4 space-y-0.5">
                                {project.features.map((feat, fIdx) => (
                                  <li key={fIdx}>{feat}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <span className="flex items-center space-x-1.5 font-semibold text-slate-800 dark:text-slate-200 mb-1">
                                <Database size={12} className="text-purple-500" />
                                <span>Architecture Summary</span>
                              </span>
                              <p>{project.architecture}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex items-center space-x-3 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-750"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
