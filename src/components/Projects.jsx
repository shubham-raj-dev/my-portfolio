import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, ArrowUpRight, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, GithubIcon } from '../data/portfolioData';

function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 right-1/4 h-96 w-96 animate-blob opacity-20" style={{ background: 'radial-gradient(circle, rgba(20,217,160,0.15) 0%, transparent 70%)' }} />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-400"
          >
            <Boxes className="h-4 w-4" />
            Selected Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white"
          >
            Things I&apos;ve <span className="gradient-text">Built</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
             <motion.div
             key={project.id}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: index * 0.1 }}
             viewport={{ once: true }}
             className="group relative overflow-hidden rounded-2xl liquid-glass gradient-border flex flex-col transition-all duration-500 hover:border-emerald-500/20 hover:shadow-emerald-500/10"
           >
             <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />
             
             <div className="p-6 flex-grow flex flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4 border border-white/5 bg-black/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  {project.featured && (
                     <div className="absolute right-3 top-3 bg-amber-500 text-black text-xs px-2.5 py-1 rounded-md font-bold shadow-lg">
                       ★ Featured
                     </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight text-white mb-1">{project.title}</h3>
                <p className="text-sm font-medium text-emerald-400 mb-3">{project.tagline}</p>
                <p className="mb-6 text-sm text-zinc-400 leading-relaxed flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-white/10 bg-white/[0.03] text-zinc-300 text-xs py-1 px-2.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Updated Button Row */}
                <div className="grid grid-cols-3 gap-3 mt-auto pt-4 border-t border-white/5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg bg-white/5 text-zinc-300 hover:bg-white/10 transition-colors">
                    <GithubIcon className="h-4 w-4"/> Code
                  </a>
                  
                  <Link to={`/case-study/${project.id}`} className="flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg border border-white/10 bg-transparent text-white hover:bg-white/5 transition-all">
                    <FileSearch className="h-4 w-4"/> Case Study
                  </Link>

                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 text-white hover:brightness-110 transition-all bg-[length:200%] hover:bg-[length:100%] shadow-lg shadow-emerald-500/20">
                    Live <ArrowUpRight className="h-4 w-4"/>
                  </a>
                </div>
             </div>
           </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;