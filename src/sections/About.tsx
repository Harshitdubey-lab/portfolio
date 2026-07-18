import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    year: '2023 – 2027',
    degree: 'B.Tech Computer Science',
    institution: 'Bansal College of Engineering, Mandideep, RGPV',
    score: 'CGPA 7.55',
  },
  {
    year: '2022 – 2023',
    degree: 'Class 12',
    institution: 'St. Charles Sr. Sec. School, MP Board',
    score: '75.4%',
  },
  {
    year: '2020 – 2021',
    degree: 'Class 10',
    institution: 'St. Charles Sr. Sec. School, CBSE Board',
    score: '86.2%',
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 min-h-screen flex items-center relative">
      <div className="w-full max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column - Objective */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-brand-accentSecondary text-sm">// 01 — about_me</span>
                <div className="h-px flex-1 bg-brand-border" />
              </div>
              
              <h2 className="text-4xl font-bold text-brand-text mb-6">Objective.</h2>
              
              <div className="space-y-6 text-brand-textMuted leading-relaxed">
                <p>
                  I am a pre-final year Computer Science student passionate about building impactful, technology-driven solutions. My foundation in problem-solving drives me to explore the intersection of full-stack development, AI, and data analytics.
                </p>
                <p>
                  Currently, I am actively strengthening my full-stack skills while diving deep into Machine Learning, data analysis, and developing AI-powered applications that can automate and enhance everyday tasks.
                </p>
                
                <div className="p-4 bg-brand-panel border-l-2 border-brand-accentPrimary mt-8">
                  <p className="font-mono text-sm text-brand-text">
                    &gt; Focusing on clean code, performant systems, and intelligent solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-brand-text mb-8">Education.</h3>
              
              <div className="relative pl-8 border-l border-brand-border space-y-12">
                {education.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-brand-graphite border-2 border-brand-border group-hover:border-brand-accentSecondary transition-colors duration-300" />
                    
                    <div className="font-mono text-sm text-brand-accentPrimary mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-bold text-brand-text mb-1">
                      {item.degree}
                    </h4>
                    <p className="text-brand-textMuted text-sm mb-2">
                      {item.institution}
                    </p>
                    <div className="inline-block px-2 py-1 bg-brand-panel border border-brand-border rounded-sm text-xs font-mono text-brand-text">
                      {item.score}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
