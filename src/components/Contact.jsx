import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, Phone, ArrowRight, Code } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const socialCards = [
    {
      name: "Email Me",
      val: "kruthick34@gmail.com",
      link: "mailto:kruthick34@gmail.com",
      icon: <Mail className="text-blue-500" size={20} />,
      desc: "For inquiries and job proposals"
    },
    {
      name: "Call Me",
      val: "+91 9003752099",
      link: "tel:+919003752099",
      icon: <Phone className="text-blue-500" size={20} />,
      desc: "Available for professional outreach"
    },
    {
      name: "LinkedIn",
      val: "linkedin.com/in/kruthick-m",
      link: "https://linkedin.com/in/kruthick-m",
      icon: <Linkedin className="text-purple-500" size={20} />,
      desc: "Let's connect professionally"
    },
    {
      name: "GitHub",
      val: "github.com/kruthick-m",
      link: "https://github.com/kruthick-m",
      icon: <Github className="text-slate-800 dark:text-white" size={20} />,
      desc: "Check my repository code"
    },
    {
      name: "LeetCode",
      val: "leetcode.com/kruthick-m",
      link: "https://leetcode.com/kruthick-m",
      icon: <Code className="text-purple-500" size={20} />,
      desc: "Solving DSA problems"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Contact <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Left Column: Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialCards.map((card, idx) => (
                <a
                  key={idx}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 rounded-2xl border border-slate-200/40 dark:border-slate-800 flex flex-col justify-between h-40 shadow-sm hover:shadow-md hover:border-blue-500/20 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="p-2 bg-slate-50 dark:bg-slate-900 rounded-xl">
                      {card.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display text-slate-800 dark:text-white">{card.name}</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-light mt-0.5 leading-tight">{card.desc}</p>
                    <div className="flex items-center space-x-1 mt-3 text-xs font-semibold text-blue-500 dark:text-blue-400">
                      <span className="truncate max-w-[150px]">{card.val}</span>
                      <ArrowRight size={10} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-xs text-red-500 font-mono mt-0.5">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500'
                    }`}
                    placeholder="name@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 font-mono mt-0.5">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${
                      errors.subject 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500'
                    }`}
                    placeholder="Internship opportunity, Project collaboration, etc."
                  />
                  {errors.subject && <p className="text-xs text-red-500 font-mono mt-0.5">{errors.subject}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500'
                    }`}
                    placeholder="Write your message here..."
                  />
                  {errors.message && <p className="text-xs text-red-500 font-mono mt-0.5">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending' || status === 'success'}
                    className={`group flex items-center justify-center space-x-2 w-full px-6 py-3 text-sm font-semibold text-white rounded-xl shadow-md transition-all duration-200 ${
                      status === 'success'
                        ? 'bg-emerald-600'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-blue-500/10 active:scale-[0.98]'
                    }`}
                  >
                    {status === 'idle' && (
                      <>
                        <span>Send Message</span>
                        <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                    {status === 'sending' && (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending message...</span>
                      </>
                    )}
                    {status === 'success' && (
                      <>
                        <CheckCircle size={16} />
                        <span>Message Sent Successfully!</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
