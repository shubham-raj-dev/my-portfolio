import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Download } from 'lucide-react';
import { stats, RESUME_LINK } from '../data/portfolioData';

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-20 overflow-hidden bg-mesh-pattern">
      <div className="absolute top-1/4 left-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Area - lg:order-2 on mobile means it comes second */}
        <div className="order-2 lg:order-1 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6"
          >
            <Terminal className="h-4 w-4" /> B.Tech CS Student
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            Hi, I'm <br />
            <span className="gradient-text mt-2 block">Shubham Raj</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed"
          >
            A passionate <strong className="text-white">Full Stack Developer</strong> specializing in <strong className="text-white">Python & React</strong>. I build scalable web applications and robust backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="hidden sm:inline-flex px-8 py-3.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all items-center gap-2"
            >
              Explore Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a 
              href="#contact" 
              className="hidden sm:inline-flex px-8 py-3.5 rounded-lg glass text-white font-medium hover:bg-white/5 transition-all justify-center"
            >
              Contact Me
            </a>

            <a 
              href="#contact" 
              className="inline-flex sm:hidden w-full justify-center px-8 py-3.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/20 transition-all items-center gap-2"
            >
              Contact Me
            </a>
            <a 
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden w-full justify-center px-8 py-3.5 rounded-lg glass text-white font-medium hover:bg-white/5 transition-all items-center gap-2"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex gap-8 border-t border-white/10 pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Photo - lg:order-1 on mobile means it comes first */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full glass border-emerald-500/30 animate-float overflow-hidden bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 flex items-center justify-center">
            <img
              src="/profile.png"
              alt="Shubham Raj"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500 to-cyan-500">
                    <span className="text-6xl lg:text-7xl font-extrabold text-white">SR</span>
                  </div>
                `;
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;