import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BrandIcon = () => (
  <div className="w-9 h-9 rounded-xl glass-card flex items-center justify-center border border-white/10 dark:border-white/5 shadow-md shadow-blue-500/5 relative overflow-hidden bg-gradient-to-tr from-blue-600/10 to-purple-600/10 hover:shadow-blue-500/20 transition-all duration-300">
    <span className="font-sora font-extrabold text-[13.5px] tracking-tighter bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-transparent select-none">
      KM
    </span>
    {/* Subtle ambient light dot inside badge */}
    <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/3 blur-sm rounded-full -translate-x-3 -translate-y-3 pointer-events-none" />
  </div>
);

const Navbar = ({ activeSection, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ];

  // Track scrolled state for transparent-to-glass header transition
  useEffect(() => {
    const handleNavbarScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleNavbarScroll);
    return () => window.removeEventListener('scroll', handleNavbarScroll);
  }, []);

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <nav 
      className={`sticky top-0 z-45 w-full transition-all duration-300 font-sans ${
        isScrolled 
          ? 'bg-[#f8fafc]/75 dark:bg-[#09090b]/75 backdrop-blur-md border-b border-slate-200/40 dark:border-white/5 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Redesigned Brand Logo & Animation */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            onClick={() => handleScroll('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <BrandIcon />
            <span className="font-sora font-extrabold text-lg sm:text-xl tracking-tight text-slate-800 dark:text-white transition-colors duration-300">
              Kruthick
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.45)] transition-all duration-300"> M</span>
            </span>
          </motion.div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative ${
                  activeSection === item.id
                    ? 'text-blue-500 dark:text-blue-400 font-semibold'
                    : 'text-slate-650 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Toolbar Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume Callout */}
            <button
              onClick={() => handleScroll('resume')}
              className="flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/10 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              <Download size={14} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-slate-200 dark:border-white/5 bg-[#f8fafc]/95 dark:bg-[#0b0f19]/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400 font-semibold'
                      : 'text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 px-4">
                <button
                  onClick={() => handleScroll('resume')}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/10 transition-all duration-200"
                >
                  <Download size={16} />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
