import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Mail, Code } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: '// 00 — home' },
  { id: 'about', icon: User, label: '// 01 — about' },
  { id: 'projects', icon: Code, label: '// 02 — projects' },
  { id: 'achievements', icon: Briefcase, label: '// 03 — achievements' },
  { id: 'contact', icon: Mail, label: '// 04 — contact' },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full md:w-24 md:h-screen md:top-0 bg-brand-panel/90 backdrop-blur-md border-t md:border-t-0 md:border-r border-brand-border z-40 flex md:flex-col items-center justify-between md:justify-center p-4 md:py-12">
      <div className="hidden md:flex flex-col items-center gap-2 mb-12">
        <div className="w-8 h-8 rounded-sm bg-brand-accentPrimary/10 border border-brand-accentPrimary/30 flex items-center justify-center">
          <span className="font-mono text-xs text-brand-accentPrimary font-bold">HD</span>
        </div>
      </div>
      
      <div className="flex md:flex-col items-center justify-around md:justify-center w-full gap-2 md:gap-8">
        {navItems.map(({ id, icon: Icon, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative group p-3 rounded-md transition-all duration-300"
              aria-label={label}
            >
              <Icon 
                size={20} 
                className={`transition-colors duration-300 ${
                  isActive ? 'text-brand-accentPrimary' : 'text-brand-textMuted group-hover:text-brand-text'
                }`} 
              />
              
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-brand-accentPrimary/10 border border-brand-accentPrimary/20 rounded-md -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Tooltip on Desktop */}
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-brand-panel border border-brand-border text-brand-text font-mono text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 hidden md:block">
                {label}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
