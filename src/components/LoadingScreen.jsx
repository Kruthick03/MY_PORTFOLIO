import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const loadingTexts = [
    "Initializing neural networks...",
    "Loading Full Stack modules...",
    "Connecting database adapters...",
    "Compiling skills matrix...",
    "Ready for recruitment..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Allow fade out animation
          return 100;
        }
        // Increment progress by a random amount to look authentic
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 800);
    return () => clearInterval(textTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-[#0a0f1d] flex flex-col items-center justify-center text-slate-100"
    >
      <div className="relative w-64 max-w-sm flex flex-col items-center">
        {/* Animated Cybernetic Ring */}
        <div className="relative w-24 h-24 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-purple-500 border-b-transparent border-l-transparent"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-2 rounded-full border-4 border-t-cyan-400 border-r-transparent border-b-indigo-500 border-l-transparent"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {progress}%
            </span>
          </div>
        </div>

        {/* Loading Message */}
        <div className="h-6 overflow-hidden w-full text-center mb-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-light text-slate-400 font-mono tracking-wider"
            >
              {loadingTexts[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
