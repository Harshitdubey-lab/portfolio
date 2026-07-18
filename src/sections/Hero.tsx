import React from 'react';
import { motion } from 'framer-motion';
import { HeroCanvas } from '../components/3D/HeroCanvas';
import { PhotoCard } from '../components/UI/PhotoCard';
import { Download, ArrowRight, Github, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-20 md:pt-0 md:pb-0 px-6 md:px-16 overflow-hidden">
      <HeroCanvas />
      
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
        
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-brand-accentSecondary text-sm">// 00 — hello_world</span>
              <div className="h-px w-12 bg-brand-border" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-brand-text leading-tight mb-6 tracking-tight">
              Harshit<br />
              <span className="text-brand-textMuted">Dubey.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-textMuted mb-8 leading-relaxed max-w-xl border-l-2 border-brand-border pl-6">
              Aspiring <span className="text-brand-accentPrimary">AI & Data Science Enthusiast</span> — building practical software at the intersection of full-stack development, ML, and automation.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#projects" 
                className="group flex items-center gap-2 bg-brand-text text-brand-graphite px-6 py-3 rounded-sm font-medium transition-transform hover:-translate-y-1"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#" 
                className="group flex items-center gap-2 border border-brand-border bg-brand-panel hover:border-brand-accentPrimary/50 text-brand-text px-6 py-3 rounded-sm font-medium transition-all"
              >
                <Download size={18} className="text-brand-accentPrimary group-hover:text-brand-accentSecondary transition-colors" />
                Resume
              </a>
              
              <div className="flex items-center gap-2 ml-4">
                <a href="https://github.com/Harshitdubey-lab" target="_blank" rel="noopener noreferrer" className="p-3 text-brand-textMuted hover:text-brand-text hover:bg-brand-panel border border-transparent hover:border-brand-border rounded-sm transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/dharshit" target="_blank" rel="noopener noreferrer" className="p-3 text-brand-textMuted hover:text-brand-text hover:bg-brand-panel border border-transparent hover:border-brand-border rounded-sm transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <PhotoCard src="/photo.jpg" />
        </div>

      </div>
    </section>
  );
};
