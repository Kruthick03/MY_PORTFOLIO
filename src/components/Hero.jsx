import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail, Cpu, Coffee, Leaf, Database, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TypingText = ({ texts }) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const speed = isDeleting ? 45 : 90;
    
    const handleTyping = () => {
      const fullText = texts[textIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        if (charIndex + 1 === fullText.length) {
          timer = setTimeout(() => setIsDeleting(true), 1600);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      }
      timer = setTimeout(handleTyping, speed);
    };

    timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="font-mono bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent typewriter-cursor-blink pr-1">
      {currentText}
    </span>
  );
};

const Hero = () => {
  const skillsToType = ["Java", "Spring Boot", "React", "PostgreSQL", "DSA"];

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

            {/* Name and Static Professional Title */}
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-sora tracking-tight">
                Kruthick M
              </h2>
              <div className="text-base sm:text-lg md:text-xl font-medium text-slate-600 dark:text-slate-350 font-sora flex items-center justify-center lg:justify-start h-8">
                <span>Full Stack Java Developer &nbsp;</span>
                <TypingText texts={skillsToType} />
              </div>
            </div>

            {/* Subtitle / Description */}
            <div className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              <p>
                Final-year Computer Science and Engineering student specializing in Java, Spring Boot, React, PostgreSQL, and scalable backend development.
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
            {/* Primary: View Projects */}
            <button
              onClick={() => handleScroll('projects')}
              className="group flex items-center space-x-2 w-full sm:w-auto justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:brightness-110 shadow-md shadow-blue-500/10 hover:shadow-lg active:scale-98 transition-all duration-250 rounded-xl"
            >
              <span>View Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Secondary: View Resume */}
            <button
              onClick={() => handleScroll('resume')}
              className="flex items-center space-x-2 w-full sm:w-auto justify-center px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 active:scale-98 transition-all duration-250"
            >
              <FileText size={14} />
              <span>View Resume</span>
            </button>

            {/* Outline: Contact Me */}
            <button
              onClick={() => handleScroll('contact')}
              className="flex items-center space-x-2 w-full sm:w-auto justify-center px-6 py-3 text-sm font-semibold text-slate-750 dark:text-slate-300 hover:text-blue-500 dark:hover:text-white bg-transparent hover:bg-slate-50 dark:hover:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 active:scale-98 transition-all duration-250"
            >
              <Mail size={14} />
              <span>Contact Me</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Premium Glassmorphism Card Profile Photo Frame with Floating Tech Badges */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-card p-8 rounded-3xl border border-slate-200/40 dark:border-white/5 shadow-xl flex items-center justify-center relative overflow-visible bg-gradient-to-tr from-slate-50/50 to-slate-100/50 dark:from-[#111827]/10 dark:to-[#1f2937]/10 backdrop-blur-xl w-72 h-72 sm:w-80 sm:h-80 md:w-[340px] md:h-[340px]"
          >
            {/* Subtle background gradient blur */}
            <div className="absolute inset-0 z-0 pointer-events-none rounded-3xl overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/5 dark:bg-blue-550/3 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/5 dark:bg-purple-550/3 rounded-full blur-3xl" />
            </div>

            {/* Profile Photo Floating Wrapper */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 p-2 rounded-xl glass-card border border-slate-200/50 dark:border-white/5 shadow-md flex items-center justify-center text-amber-500 bg-white dark:bg-slate-900"
                title="Java"
              >
                <Coffee size={18} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -top-3 -right-3 p-2 rounded-xl glass-card border border-slate-200/50 dark:border-white/5 shadow-md flex items-center justify-center text-emerald-500 bg-white dark:bg-slate-900"
                title="Spring Boot"
              >
                <Leaf size={18} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -5, 0], x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                className="absolute -bottom-3 -left-3 p-2 rounded-xl glass-card border border-slate-200/50 dark:border-white/5 shadow-md flex items-center justify-center text-blue-500 bg-white dark:bg-slate-900"
                title="PostgreSQL"
              >
                <Database size={18} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 5, 0], x: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute -bottom-3 -right-3 p-2 rounded-xl glass-card border border-slate-200/50 dark:border-white/5 shadow-md flex items-center justify-center text-purple-500 bg-white dark:bg-slate-900"
                title="Data Structures & Algorithms"
              >
                <Code2 size={18} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
