import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Core Components
import LoadingScreen from './components/LoadingScreen';
import BackgroundEffects from './components/BackgroundEffects';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved : 'dark';
  });
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Set Theme on load and persist
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll spy to highlight active section and show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200; // offset for detection

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 1. Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Website Wrapper */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen dot-grid overflow-x-hidden bg-[#f8fafc] text-slate-800 dark:bg-[#0b1120] dark:text-slate-100 transition-colors duration-300"
        >
          {/* 2. Interactive Aurora Mesh + Canvas Particles Background */}
          <BackgroundEffects theme={theme} />

          {/* 3. Custom Tracking Cursor */}
          <CustomCursor />

          {/* 4. Navigation */}
          <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />

          {/* 5. Website Content Sections */}
          <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <div className="w-full h-[1px] bg-slate-200/50 dark:bg-slate-800/40 my-4" />
            <About />
            <div className="w-full h-[1px] bg-slate-200/50 dark:bg-slate-800/40 my-4" />
            <Skills />
            <div className="w-full h-[1px] bg-slate-200/50 dark:bg-slate-800/40 my-4" />
            <Projects />
            <div className="w-full h-[1px] bg-slate-200/50 dark:bg-slate-800/40 my-4" />
            <Experience />
            <div className="w-full h-[1px] bg-slate-200/50 dark:bg-slate-800/40 my-4" />
            <Certifications />
            <div className="w-full h-[1px] bg-slate-200/50 dark:bg-slate-800/40 my-4" />
            <Resume />
            <div className="w-full h-[1px] bg-slate-200/50 dark:bg-slate-800/40 my-4" />
            <Contact />
          </main>

          {/* 6. Footer */}
          <Footer />

          {/* 7. Scroll To Top Float Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 50 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-40 p-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};

export default App;
