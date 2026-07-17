import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, GraduationCap, Cpu, Code2 } from 'lucide-react';

const About = () => {
  const profileHighlights = [
    {
      title: "Java & REST APIs",
      desc: "Specializing in the Java ecosystem, creating structured backend architectures and RESTful APIs using Spring Boot and Hibernate.",
      icon: <Code2 className="text-blue-500" size={20} />
    },
    {
      title: "Database Optimization",
      desc: "Optimizing database schemas and designing high-performance queries across PostgreSQL, MySQL, and MongoDB.",
      icon: <Cpu className="text-purple-500" size={20} />
    },
    {
      title: "DSA & Problem Solving",
      desc: "Strong analytical foundation in Data Structures & Algorithms, allowing for efficient coding and algorithmic logic.",
      icon: <CheckCircle className="text-blue-500" size={20} />
    },
    {
      title: "Scalable Backend Systems",
      desc: "Passionate about building secure, role-based, and highly concurrent server architectures that scale with user demand.",
      icon: <GraduationCap className="text-purple-500" size={20} />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Column: Premium Circular Profile Photo Frame (Match Stripe/Linear style) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative flex items-center justify-center">
              {/* Subtle background glow */}
              <div className="absolute w-64 h-64 bg-blue-500/5 dark:bg-blue-650/2 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute w-64 h-64 bg-purple-500/5 dark:bg-purple-650/2 rounded-full blur-2xl pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-[1.5px] bg-gradient-to-tr from-blue-500/60 to-purple-500/60 shadow-lg shadow-black/10 dark:shadow-black/30 transition-all duration-300"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative flex items-center justify-center border border-white/10">
                  <img 
                    src="/profile.jpg" 
                    alt="Kruthick M" 
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle vignette layer to blend background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-transparent to-purple-950/25 pointer-events-none mix-blend-multiply" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Bio Details and Education Info */}
          <div className="lg:col-span-7 space-y-6 text-left font-sans">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white leading-snug">
                Passionate Full Stack Java Developer & Software Engineer
              </h3>
              <p className="text-xs sm:text-sm font-light text-slate-500 dark:text-slate-400 leading-relaxed">
                I am a final-year Computer Science and Engineering student at Karpagam Institute of Technology. I specialize in the Java ecosystem (Spring Boot, Hibernate) and building responsive, user-centric web applications with React.
              </p>
              <p className="text-xs sm:text-sm font-light text-slate-500 dark:text-slate-400 leading-relaxed">
                My engineering focus is centered on designing secure, high-throughput REST APIs, writing clean Object-Oriented code, and performing database query optimization. Combining strong analytical problem-solving with Data Structures & Algorithms (DSA), I strive to create backend systems that are both performant and scalable.
              </p>
            </div>

            {/* Education Highlight Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800 flex items-start space-x-4 shadow-sm">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                <GraduationCap size={20} />
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <h4 className="font-bold text-slate-900 dark:text-white">Bachelor of Engineering (B.E.)</h4>
                <p className="font-medium text-slate-700 text-zinc-900 dark:text-slate-350">Computer Science and Engineering</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Karpagam Institute of Technology, Coimbatore</p>
                <div className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  CGPA: 7.9/10
                </div>
              </div>
            </div>

            {/* highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm">
                  <span className="p-1.5 bg-slate-50 dark:bg-slate-900 rounded-lg flex-shrink-0">
                    {highlight.icon}
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-slate-900 dark:text-white">{highlight.title}</h4>
                    <p className="font-light text-slate-500 dark:text-slate-400 leading-normal">{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
