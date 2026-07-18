import React from 'react';
import { motion } from 'framer-motion';

interface PhotoCardProps {
  src: string;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ src }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative group w-64 h-80 md:w-80 md:h-96 shrink-0 z-10"
    >
      {/* Sticker Shadow (Teal Offset) */}
      <div className="absolute inset-0 bg-brand-accentSecondary translate-x-3 translate-y-3 rounded-sm transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4 opacity-80" />
      
      {/* 1px Border Frame */}
      <div className="relative w-full h-full border border-brand-border bg-brand-panel rounded-sm overflow-hidden flex items-center justify-center">
        {/* The Photo with Duotone/Desaturation hover effect */}
        {src ? (
          <img 
            src={src} 
            alt="Harshit Dubey" 
            className="w-full h-full object-cover grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full bg-brand-graphite flex flex-col items-center justify-center grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 relative overflow-hidden">
             {/* Fallback abstract pattern */}
             <div className="absolute inset-0 bg-noise opacity-20" />
             <span className="font-mono text-brand-textMuted text-sm">// photo.jpg placeholder</span>
             <div className="absolute inset-0 bg-gradient-to-t from-brand-panel via-transparent to-transparent" />
          </div>
        )}
        
        {/* Rim Light Effect on Hover */}
        <div className="absolute inset-0 border border-brand-accentPrimary/0 group-hover:border-brand-accentPrimary/50 transition-colors duration-500 rounded-sm pointer-events-none" />
      </div>
    </motion.div>
  );
};
