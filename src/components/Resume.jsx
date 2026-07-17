import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Kruthick_M_Resume.pdf";
    link.download = "Kruthick_M_Resume.pdf";
    link.click();
  };

  const handleOpen = () => {
    window.open("/Kruthick_M_Resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            className="flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-500 hover:to-indigo-550 rounded-xl transition-all duration-200 shadow-md shadow-blue-500/10 active:scale-95"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </button>
          
          <button
            onClick={handleOpen}
            className="flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-750 rounded-xl active:scale-95 transition-all duration-200"
          >
            <Eye size={16} />
            <span>Open Resume</span>
          </button>
        </div>

        {/* Live Resume Preview Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="/Kruthick_M_Resume.pdf"
            width="100%"
            height="900"
            style={{
              border: "none",
              borderRadius: "16px",
              background: "white"
            }}
            title="Resume"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
