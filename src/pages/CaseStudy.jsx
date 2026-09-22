import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github, AlertTriangle, CheckCircle2, Terminal } from 'lucide-react';
import { projects, GithubIcon } from '../data/portfolioData';

function CaseStudy() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">Project Not Found</h2>
        <Link to="/" className="text-emerald-400 hover:underline inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative z-10 pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <ArrowLeft className="h-4 w-4" /> Back to Portfolio
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full overflow-hidden rounded-2xl liquid-glass gradient-border shadow-2xl shadow-black p-6 sm:p-10"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-b border-white/5 pb-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{project.title}</h1>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  Case Study
                </span>
              </div>
              <p className="text-lg text-emerald-400 font-medium">{project.tagline}</p>
            </div>

            <div className="flex gap-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-white/5 text-zinc-300 hover:bg-white/10 transition-colors border border-white/10">
                <GithubIcon className="h-4 w-4"/> Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20 hover:brightness-110 transition-all">
                Live Demo <ArrowUpRight className="h-4 w-4"/>
              </a>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {project.caseStudy.metrics.map((metric, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">{metric.label}</div>
                <div className="text-base font-bold text-white">{metric.value}</div>
              </div>
            ))}
          </div>

          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10 border border-white/10">
             <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* The Problem */}
          <div className="mb-10">
            <h4 className="flex items-center gap-2 text-xl font-bold text-amber-400 mb-4">
              <AlertTriangle className="h-6 w-6" /> The Problem
            </h4>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* The Solution */}
          <div className="mb-10">
            <h4 className="flex items-center gap-2 text-xl font-bold text-emerald-400 mb-4">
              <CheckCircle2 className="h-6 w-6" /> The Solution
            </h4>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              {project.caseStudy.solution}
            </p>
          </div>

          {/* Tech Stack Breakdown */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-bold text-cyan-400 mb-5">
              <Terminal className="h-6 w-6" /> Tech Stack Breakdown
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <div className="text-sm font-bold uppercase text-zinc-500 mb-2">Frontend</div>
                <div className="text-base text-zinc-300">{project.caseStudy.techStack.frontend}</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <div className="text-sm font-bold uppercase text-zinc-500 mb-2">Backend</div>
                <div className="text-base text-zinc-300">{project.caseStudy.techStack.backend}</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <div className="text-sm font-bold uppercase text-zinc-500 mb-2">Infrastructure</div>
                <div className="text-base text-zinc-300">{project.caseStudy.techStack.infrastructure}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CaseStudy;
