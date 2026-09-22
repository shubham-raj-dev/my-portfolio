import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 h-96 w-96 animate-blob-slow opacity-20" style={{ background: 'radial-gradient(circle, rgba(20,184,217,0.15) 0%, transparent 70%)' }} />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-400"
          >
            <Sparkles className="h-4 w-4" />
            Tech Arsenal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group liquid-glass rounded-xl p-8 transition-all duration-500 hover:border-emerald-500/20 hover:shadow-emerald-500/10"
              >
                <div className="mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} shadow-lg`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                {/* Simplified text-based skills display */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-sm font-medium text-zinc-300 transition-all hover:bg-white/[0.08] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;