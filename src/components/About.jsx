import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="absolute -right-40 top-1/3 h-80 w-80 animate-blob-slow opacity-20" style={{ background: 'radial-gradient(circle, rgba(20,217,160,0.2) 0%, transparent 70%)' }} />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <User className="h-4 w-4" />
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white"
          >
            Who I <span className="gradient-text">Am</span>
          </motion.h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass gradient-border rounded-2xl p-8 md:p-10 text-center"
          >
            <p className="text-lg md:text-xl leading-relaxed text-zinc-300 font-medium">
              I am a Computer Science student at Jagannath University (2027) specializing in <span className="text-white font-bold">Full-Stack Development</span>. With strong proficiency in <span className="text-emerald-400">Python</span>, <span className="text-cyan-400">React</span>, and <span className="text-purple-400">Django REST</span>, I love transforming complex problems into scalable, elegant web solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;