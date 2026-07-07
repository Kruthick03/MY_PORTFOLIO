import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-900 bg-white/40 dark:bg-slate-950/40 py-8 relative z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="text-sm font-light text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Kruthick M. All rights reserved.
          </p>
          <p className="text-xs font-light text-slate-400 dark:text-slate-500 mt-1">
            Designed and Developed by Kruthick M
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/kruthick-m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:text-slate-450 dark:hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/kruthick-m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:text-slate-450 dark:hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:kruthick34@gmail.com"
            className="text-slate-500 hover:text-slate-900 dark:text-slate-450 dark:hover:text-white transition-colors"
            aria-label="Email Me"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
