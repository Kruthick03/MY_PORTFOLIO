import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const titles = [
    "Full Stack Developer",
    "AI Product Builder",
    "Java & Spring Boot Developer",
    "Backend Developer"
  ];
  const [index, setIndex] = useState(0);

  // Smooth cross-fade interval trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Kruthick_M_Resume.pdf';
    link.download = 'Kruthick_M_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden font-sans">
      
      {/* Background Gradients & low opacity Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#2563EB]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-[#7C3AED]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Headline and Summary */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-4"
          >
            {/* Title / Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] font-display text-slate-800 dark:text-white">
              Building Intelligent Software <br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">for Real-World Problems.</span>
            </h1>

            {/* Name and Fading Title Rotation */}
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-sora tracking-tight">
                Kruthick M
              </h2>
              <div className="text-base sm:text-lg md:text-xl font-medium text-blue-600 dark:text-blue-450 font-sora flex items-center justify-center lg:justify-start h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    {titles[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Concise Description */}
            <div className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light space-y-2">
              <p>
                I build scalable backend systems, modern web applications and AI-powered software using Java, Spring Boot, React and PostgreSQL.
              </p>
              <p className="mt-2 font-medium text-slate-600 dark:text-slate-350">
                Currently learning AI Agents, Large Language Models and Intelligent Software Systems.
              </p>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            {/* Primary */}
            <button
              onClick={() => handleScroll('projects')}
              className="group flex items-center space-x-2 w-full sm:w-auto justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:brightness-110 shadow-md shadow-blue-500/10 hover:shadow-lg active:scale-98 transition-all duration-250"
            >
              <span>Explore Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Secondary */}
            <button
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 w-full sm:w-auto justify-center px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 active:scale-98 transition-all duration-250"
            >
              <FileText size={14} />
              <span>Download Resume</span>
            </button>

            {/* Outline */}
            <button
              onClick={() => handleScroll('contact')}
              className="flex items-center space-x-2 w-full sm:w-auto justify-center px-6 py-3 text-sm font-semibold text-slate-750 dark:text-slate-300 hover:text-blue-500 dark:hover:text-white bg-transparent hover:bg-slate-50 dark:hover:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 active:scale-98 transition-all duration-250"
            >
              <Mail size={14} />
              <span>Let's Connect</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Premium Glassmorphism Card Profile Photo Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-card p-8 rounded-3xl border border-slate-200/40 dark:border-white/5 shadow-xl flex items-center justify-center relative overflow-hidden bg-gradient-to-tr from-slate-50/50 to-slate-100/50 dark:from-[#111827]/10 dark:to-[#1f2937]/10 backdrop-blur-xl w-72 h-72 sm:w-80 sm:h-80 md:w-[340px] md:h-[340px]"
          >
            {/* Subtle background gradient blur */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/5 dark:bg-blue-550/3 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/5 dark:bg-purple-550/3 rounded-full blur-3xl" />
            </div>

            {/* Profile Photo Floating Wrapper */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
              className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full p-[1.5px] bg-gradient-to-tr from-[#2563EB]/60 to-[#7C3AED]/60 shadow-lg shadow-black/10 dark:shadow-black/30 transition-all duration-300"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative flex items-center justify-center border border-white/10">
                <img 
                  src="/profile.jpg" 
                  alt="Kruthick M" 
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle vignette overlay to blend background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-transparent to-purple-950/25 pointer-events-none mix-blend-multiply" />
              </div>
            </motion.div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
