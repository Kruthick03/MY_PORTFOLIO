import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, Cpu, Award, Layers } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      icon: <Cloud className="text-blue-500" size={22} />,
      color: "hover:shadow-blue-500/10 hover:border-blue-500/20"
    },
    {
      title: "AWS Academy Graduate – Cloud Foundations",
      issuer: "AWS Academy",
      icon: <Cpu className="text-purple-500" size={22} />,
      color: "hover:shadow-purple-500/10 hover:border-purple-500/20"
    },
    {
      title: "IBM Enterprise Design Thinking Practitioner",
      issuer: "IBM",
      icon: <Layers className="text-blue-500" size={22} />,
      color: "hover:shadow-blue-500/10 hover:border-blue-500/20"
    },
    {
      title: "Celonis Foundations Certificate",
      issuer: "Celonis",
      icon: <Award className="text-purple-500" size={22} />,
      color: "hover:shadow-purple-500/10 hover:border-purple-500/20"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Licenses & <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Deck Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`glass-card p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800 flex flex-col justify-between h-40 transition-all duration-300 shadow-sm ${cert.color}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl">
                    {cert.icon}
                  </div>
                  <span className="inline-flex items-center space-x-1 text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/10">
                    <ShieldCheck size={9} />
                    <span>Completed</span>
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold font-display text-slate-900 dark:text-white leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-slate-500 dark:text-purple-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
