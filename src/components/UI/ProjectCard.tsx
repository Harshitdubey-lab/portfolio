import React, { useRef, useState, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, repo, live }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 30, stiffness: 200 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full group"
    >
      <div className="absolute inset-0 bg-brand-accentSecondary opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-sm" />
      
      <div className="relative h-full bg-brand-panel border border-brand-border rounded-sm p-6 flex flex-col justify-between transition-colors duration-300 group-hover:border-brand-accentSecondary/50 overflow-hidden">
        
        {/* Glow effect tracking mouse */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle 150px at ${useTransform(mouseX, v => (v + 0.5) * 100)}% ${useTransform(mouseY, v => (v + 0.5) * 100)}%, rgba(94, 234, 212, 0.08), transparent)`,
            }}
          />
        )}

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-accentSecondary transition-colors">
              {title}
            </h3>
            <div className="flex gap-2">
              {repo && (
                <a href={repo} target="_blank" rel="noopener noreferrer" className="text-brand-textMuted hover:text-brand-accentPrimary transition-colors" aria-label="GitHub Repository">
                  <Github size={18} />
                </a>
              )}
              {live && (
                <a href={live} target="_blank" rel="noopener noreferrer" className="text-brand-textMuted hover:text-brand-accentPrimary transition-colors" aria-label="Live Project">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-brand-textMuted text-sm mb-6 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-mono px-2 py-1 bg-brand-graphite border border-brand-border text-brand-textMuted rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
