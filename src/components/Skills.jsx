import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      name: "Programming Languages",
      skills: [
        {
          name: "Java",
          categoryLabel: "Language",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <path d="M30 65 c10 5, 30 5, 40 0 c5 -2, 5 -10, 0 -12 c-15 -5, -25 -2, -40 1 c-5 1, -5 9, 0 11 Z" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M40 50 c10 -15, 5 -25, 15 -35" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M50 50 c10 -15, 5 -25, 15 -35" fill="none" stroke="currentColor" strokeWidth="4" transform="translate(-8, 3)" />
            </svg>
          )
        },
        {
          name: "C++",
          categoryLabel: "Language",
          color: "hover:shadow-purple-500/12 hover:border-purple-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-purple-500">
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M 45 40 L 55 40 M 50 35 L 50 45" stroke="currentColor" strokeWidth="3" />
              <path d="M 60 40 L 70 40 M 65 35 L 65 45" stroke="currentColor" strokeWidth="3" />
            </svg>
          )
        },
        {
          name: "Python",
          categoryLabel: "Language",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <path d="M50 15 C35 15, 30 20, 30 30 L30 40 L50 40 L50 45 L25 45 C15 45, 10 50, 10 65 C10 80, 15 85, 25 85 L35 85 L35 75 C35 65, 40 60, 50 60 L70 60 L70 35 C70 20, 65 15, 50 15 Z" fill="currentColor" opacity="0.8" />
              <path d="M50 85 C65 85, 70 80, 70 70 L70 60 L50 60 L50 55 L75 55 C85 55, 90 50, 90 35 C90 20, 85 15, 75 15 L65 15 L65 25 C65 35, 60 40, 50 40 L30 40 L30 65 C30 80, 35 85, 50 85 Z" fill="currentColor" opacity="0.5" />
            </svg>
          )
        },
        {
          name: "JavaScript",
          categoryLabel: "Language",
          color: "hover:shadow-purple-500/12 hover:border-purple-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-purple-500">
              <rect x="15" y="15" width="70" height="70" rx="6" fill="currentColor" />
              <text x="50" y="70" fill="#000" fontSize="30" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">JS</text>
            </svg>
          )
        },
        {
          name: "SQL",
          categoryLabel: "Language",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <ellipse cx="50" cy="35" rx="30" ry="12" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M20 35 L20 65 A30 12 0 0 0 80 65 L80 35" fill="none" stroke="currentColor" strokeWidth="4" />
              <text x="50" y="55" fill="currentColor" fontSize="16" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">SQL</text>
            </svg>
          )
        },
        {
          name: "HTML",
          categoryLabel: "Language",
          color: "hover:shadow-purple-500/12 hover:border-purple-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-purple-500">
              <polygon points="15,10 85,10 78,78 50,90 22,78" fill="none" stroke="currentColor" strokeWidth="4" />
              <text x="50" y="60" fill="currentColor" fontSize="30" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">H</text>
            </svg>
          )
        },
        {
          name: "CSS",
          categoryLabel: "Language",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <polygon points="15,10 85,10 78,78 50,90 22,78" fill="none" stroke="currentColor" strokeWidth="4" />
              <text x="50" y="60" fill="currentColor" fontSize="30" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">C</text>
            </svg>
          )
        }
      ]
    },
    {
      name: "Frameworks",
      skills: [
        {
          name: "Spring Boot",
          categoryLabel: "Framework",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <path d="M50 15 C75 35, 80 60, 50 85 C20 60, 25 35, 50 15 Z" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M50 30 C65 45, 65 60, 50 75" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          )
        },
        {
          name: "React",
          categoryLabel: "Framework",
          color: "hover:shadow-purple-500/12 hover:border-purple-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-purple-500">
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(30 50 50)" />
              <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(90 50 50)" />
              <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(150 50 50)" />
            </svg>
          )
        },
        {
          name: "Hibernate",
          categoryLabel: "Framework",
          color: "hover:shadow-amber-500/12 hover:border-amber-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-amber-500">
              <path d="M20 25 L35 25 L35 75 L20 75 Z M65 25 L80 25 L80 75 L65 75 Z" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M35 50 L65 50" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          )
        }
      ]
    },
    {
      name: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          categoryLabel: "Database",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <ellipse cx="50" cy="30" rx="30" ry="12" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M20 30 L20 70 A30 12 0 0 0 80 70 L80 30" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M20 50 A30 12 0 0 0 80 50" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          )
        },
        {
          name: "MySQL",
          categoryLabel: "Database",
          color: "hover:shadow-purple-500/12 hover:border-purple-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-purple-500">
              <ellipse cx="50" cy="30" rx="30" ry="12" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M20 30 L20 50 A30 12 0 0 0 80 50 L80 30" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M20 50 L20 70 A30 12 0 0 0 80 70 L80 50" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          )
        },
        {
          name: "MongoDB",
          categoryLabel: "Database",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <path d="M50 12 C62 30, 75 55, 50 88 C25 55, 38 30, 50 12 Z" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M50 35 L50 65" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          )
        }
      ]
    },
    {
      name: "Developer Tools",
      skills: [
        {
          name: "Git",
          categoryLabel: "Tool",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <path d="M50 15 C35 30, 35 45, 50 60 C65 45, 65 30, 50 15" fill="none" stroke="currentColor" strokeWidth="4" />
              <circle cx="50" cy="30" r="6" fill="currentColor" />
              <circle cx="50" cy="55" r="6" fill="currentColor" />
            </svg>
          )
        },
        {
          name: "GitHub",
          categoryLabel: "Tool",
          color: "hover:shadow-purple-500/12 hover:border-purple-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-purple-500">
              <path fillRule="evenodd" clipRule="evenodd" d="M50 10C27.9 10 10 27.9 10 50c0 17.7 11.5 32.7 27.4 38c2 .4 2.7-.9 2.7-1.9v-6.8c-11.1 2.4-13.5-5.4-13.5-5.4-1.8-4.6-4.4-5.8-4.4-5.8-3.6-2.5.3-2.4.3-2.4 4 0.3 6.1 4.1 6.1 4.1 3.6 6.1 9.4 4.3 11.7 3.3.4-2.6 1.4-4.3 2.5-5.3-8.9-1-18.2-4.4-18.2-19.8 0-4.4 1.6-8 4.2-10.8-.4-1-.8-5.1.4-10.7 0 0 3.4-1.1 11.1 4.1 3.2-.9 6.7-1.4 10.1-1.4s6.9.5 10.1 1.4c7.7-5.2 11.1-4.1 11.1-4.1 1.2 5.6.8 9.7.4 10.7 2.6 2.8 4.2 6.4 4.2 10.8 0 15.4-9.3 18.7-18.3 19.7 1.4 1.2 2.7 3.7 2.7 7.5v11.1c0 1 0.7 2.3 2.8 1.9C78.5 82.7 90 67.7 90 50 90 27.9 72.1 10 50 10z" fill="currentColor" />
            </svg>
          )
        },
        {
          name: "Maven",
          categoryLabel: "Tool",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <polygon points="15,20 50,5 85,20 85,80 50,95 15,80" fill="none" stroke="currentColor" strokeWidth="4" />
              <text x="50" y="60" fill="currentColor" fontSize="28" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">M</text>
            </svg>
          )
        },
        {
          name: "Postman",
          categoryLabel: "Tool",
          color: "hover:shadow-purple-500/12 hover:border-purple-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-purple-500">
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              <path d="M50 20 L50 80" stroke="currentColor" strokeWidth="3.5" />
            </svg>
          )
        },
        {
          name: "VS Code",
          categoryLabel: "Tool",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <path d="M20 25 L80 10 L80 90 L20 75 Z" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M20 25 L50 50 L20 75" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          )
        }
      ]
    },
    {
      name: "Core Concepts",
      skills: [
        {
          name: "DSA",
          categoryLabel: "Core Concept",
          color: "hover:shadow-purple-500/12 hover:border-purple-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-purple-500">
              <circle cx="30" cy="30" r="8" fill="currentColor" />
              <circle cx="30" cy="70" r="8" fill="currentColor" />
              <circle cx="70" cy="50" r="8" fill="currentColor" />
              <line x1="30" y1="30" x2="70" y2="50" stroke="currentColor" strokeWidth="3.5" />
              <line x1="30" y1="70" x2="70" y2="50" stroke="currentColor" strokeWidth="3.5" />
            </svg>
          )
        },
        {
          name: "OOP",
          categoryLabel: "Core Concept",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <rect x="20" y="20" width="24" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
              <rect x="56" y="20" width="24" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
              <rect x="38" y="56" width="24" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
              <line x1="32" y1="44" x2="50" y2="56" stroke="currentColor" strokeWidth="3" />
              <line x1="68" y1="44" x2="50" y2="56" stroke="currentColor" strokeWidth="3" />
            </svg>
          )
        },
        {
          name: "REST APIs",
          categoryLabel: "Core Concept",
          color: "hover:shadow-purple-500/12 hover:border-purple-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-purple-500">
              <circle cx="25" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
              <circle cx="75" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
              <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="4" strokeDasharray="3" />
            </svg>
          )
        },
        {
          name: "DBMS",
          categoryLabel: "Core Concept",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <ellipse cx="50" cy="30" rx="25" ry="10" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M25 30 L25 50 A25 10 0 0 0 75 50 L75 30" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M25 50 L25 70 A25 10 0 0 0 75 70 L75 50" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          )
        },
        {
          name: "Operating Systems",
          categoryLabel: "Core Concept",
          color: "hover:shadow-purple-500/12 hover:border-purple-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-purple-500">
              <rect x="20" y="20" width="60" height="45" rx="6" fill="none" stroke="currentColor" strokeWidth="4" />
              <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="3" />
              <line x1="50" y1="65" x2="50" y2="80" stroke="currentColor" strokeWidth="4" />
              <line x1="35" y1="80" x2="65" y2="80" stroke="currentColor" strokeWidth="4" />
            </svg>
          )
        },
        {
          name: "Computer Networks",
          categoryLabel: "Core Concept",
          color: "hover:shadow-blue-500/12 hover:border-blue-500/30",
          icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-500">
              <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="3.5" />
              <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="3.5" />
              <circle cx="80" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="3.5" />
              <circle cx="20" cy="80" r="8" fill="none" stroke="currentColor" strokeWidth="3.5" />
              <circle cx="80" cy="80" r="8" fill="none" stroke="currentColor" strokeWidth="3.5" />
              <line x1="26" y1="26" x2="42" y2="42" stroke="currentColor" strokeWidth="2.5" />
              <line x1="74" y1="26" x2="58" y2="42" stroke="currentColor" strokeWidth="2.5" />
              <line x1="26" y1="74" x2="42" y2="58" stroke="currentColor" strokeWidth="2.5" />
              <line x1="74" y1="74" x2="58" y2="58" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Technical <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Categories Deck */}
        <div className="space-y-12 text-left">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center space-x-3">
                <span className="h-6 w-[3px] bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                <h3 className="text-lg font-bold font-display text-slate-800 dark:text-white uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className={`glass-card p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/80 flex flex-col items-center justify-center text-center gap-2.5 shadow-sm transition-all duration-300 h-full ${skill.color}`}
                  >
                    <div className="p-2 bg-slate-50/50 dark:bg-slate-900/60 rounded-xl flex items-center justify-center shadow-inner">
                      {skill.icon}
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-250">
                        {skill.name}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-light mt-0.5">
                        {skill.categoryLabel}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
