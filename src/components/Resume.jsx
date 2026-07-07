import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Mail, Phone, MapPin, Github, Linkedin, Award } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Kruthick_M_Resume.pdf';
    link.download = 'Kruthick_M_Resume.pdf';
    link.click();
  };

  const handleOpen = () => {
    window.open('/Kruthick_M_Resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Professional <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/10 hover:shadow-xl active:scale-95 transition-all duration-200"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </button>
          
          <button
            onClick={handleOpen}
            className="flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl active:scale-95 transition-all duration-200"
          >
            <Eye size={16} />
            <span>Open Resume</span>
          </button>
        </div>

        {/* Live Resume Preview Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-card w-full max-w-4xl mx-auto rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-2xl overflow-hidden"
        >
          {/* Document Header Controls */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200/50 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-400 block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 block" />
              <span className="w-3 h-3 rounded-full bg-green-400 block" />
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center space-x-1.5 font-light">
              <FileText size={12} />
              <span>Kruthick_M_CV.pdf (Preview)</span>
            </span>
            <div className="w-16" />
          </div>

          {/* Interactive Document Sheet */}
          <div className="p-6 sm:p-10 md:p-12 bg-white dark:bg-[#0d1527] text-slate-800 dark:text-slate-250 text-left font-sans select-none max-h-[600px] overflow-y-auto">
            {/* CV Header */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
              <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
                Kruthick M
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                Full Stack Developer | Java Developer | AI Enthusiast
              </p>
              
              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-xs font-light text-slate-500 dark:text-slate-400">
                <span className="flex items-center space-x-1.5">
                  <Mail size={12} />
                  <span>kruthick34@gmail.com</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Phone size={12} />
                  <span>+91 9003752099</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <MapPin size={12} />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Github size={12} />
                  <span>github.com/kruthick-m</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Linkedin size={12} />
                  <span>linkedin.com/in/kruthick-m</span>
                </span>
              </div>
            </div>

            {/* Resume Two-Column Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs sm:text-sm">
              {/* Left Column */}
              <div className="md:col-span-5 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Education
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-bold text-slate-800 dark:text-white">B.E. Computer Science & Eng.</h5>
                      <p className="text-slate-650 dark:text-slate-400">Karpagam Institute of Technology</p>
                      <p className="text-[11px] font-mono text-slate-500 mt-0.5">2023 - 2027 | CGPA: 7.9/10</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Technical Skills
                  </h4>
                  <div className="space-y-2.5">
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-white">Languages:</span>
                      <p className="text-slate-600 dark:text-slate-400 font-light mt-0.5">Java, C++, Python, JavaScript, SQL, HTML, CSS</p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-white">Frameworks:</span>
                      <p className="text-slate-600 dark:text-slate-400 font-light mt-0.5">Spring Boot, React</p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-white">Databases:</span>
                      <p className="text-slate-600 dark:text-slate-400 font-light mt-0.5">PostgreSQL, MySQL, MongoDB</p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-white">Tools:</span>
                      <p className="text-slate-600 dark:text-slate-400 font-light mt-0.5">Git, GitHub, Maven, Postman, VS Code</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Certifications
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 font-light">
                    <p>• Microsoft Azure Fundamentals</p>
                    <p>• AWS Academy Cloud Foundations</p>
                    <p>• IBM Enterprise Design Thinking Practitioner</p>
                    <p>• Celonis Foundations Certificate</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Professional Internships
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <h5 className="font-bold text-slate-800 dark:text-white">Web Development Intern</h5>
                        <span className="text-[10px] font-mono text-slate-500 mt-0.5">June 2025 - August 2025</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-blue-400 mb-1">Crescent Info Tech</p>
                      <p className="text-slate-650 dark:text-slate-400 font-light leading-relaxed">
                        Developed responsive web applications using HTML, SQL, and MongoDB. Optimized backend workflows and designed database queries.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <h5 className="font-bold text-slate-800 dark:text-white">UI/UX Design Intern</h5>
                        <span className="text-[10px] font-mono text-slate-500 mt-0.5">January 2025 - March 2025</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-blue-400 mb-1">Crescent Info Tech</p>
                      <p className="text-slate-650 dark:text-slate-400 font-light leading-relaxed">
                        Designed responsive wireframes, optimized screen components for enhanced user experience, and collaborated directly with dev teams.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Academic Projects
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-slate-800 dark:text-white">Attendance Management System</h5>
                      <p className="text-slate-650 dark:text-slate-400 font-light leading-relaxed mt-0.5">
                        Developed a full-stack attendance management system for students and faculty. Designed REST APIs using Spring Boot. Built a responsive React dashboard. Integrated PostgreSQL for attendance management.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800 dark:text-white">Medifind – Medicine Availability Finder</h5>
                      <p className="text-slate-650 dark:text-slate-400 font-light leading-relaxed mt-0.5">
                        Developed a medicine availability platform. Built REST APIs for medicine search. Developed React frontend. Integrated PostgreSQL database.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
