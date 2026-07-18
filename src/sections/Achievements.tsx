import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Database, Layout, Terminal } from 'lucide-react';

const skills = [
  { category: 'Languages', icon: Terminal, items: ['Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Data & ML', icon: Database, items: ['Machine Learning', 'NLP', 'Power BI', 'Scikit-Learn', 'MySQL'] },
  { category: 'Frameworks', icon: Layout, items: ['React', 'FastAPI', 'TailwindCSS'] },
  { category: 'Tools & Core', icon: Code2, items: ['Git & GitHub', 'VS Code', 'Google Colab', 'OOP', 'DBMS'] }
];

const achievements = [
  "Winner, State-Level Ideathon (Innovative thinking and problem-solving)",
  "Active member of Technical Club — organized technical events, workshops, peer learning sessions",
  "Represented institution at State-Level Ball Badminton Championship"
];

const certifications = [
  { title: "4-week remote internship", issuer: "System.Tron" },
  { title: "Power BI Certification", issuer: "Microsoft" },
  { title: "Python Programming", issuer: "Sheryians Coding School" },
  { title: "3-star rating", issuer: "LeetCode" }
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 md:px-16 min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-brand-accentSecondary text-sm">// 03 — skills_and_milestones</span>
            <div className="h-px flex-1 bg-brand-border" />
          </div>
          
          <h2 className="text-4xl font-bold text-brand-text mb-16">Capabilities.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Skills Matrix */}
          <div>
            <h3 className="text-2xl font-bold text-brand-text mb-8">Technical Arsenal</h3>
            <div className="grid gap-4">
              {skills.map((skillGroup, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 border border-brand-border bg-brand-panel flex flex-col md:flex-row md:items-center gap-4 rounded-sm hover:border-brand-accentSecondary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 md:w-1/3">
                    <skillGroup.icon size={18} className="text-brand-accentSecondary" />
                    <span className="font-mono text-sm text-brand-textMuted uppercase tracking-wider">{skillGroup.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 md:w-2/3">
                    {skillGroup.items.map(item => (
                      <span key={item} className="px-2 py-1 bg-brand-graphite border border-brand-border text-brand-text text-sm rounded-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="space-y-12">
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-8">Training</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 border border-brand-border bg-brand-panel/50 rounded-sm"
                  >
                    <Award size={20} className="text-brand-accentPrimary mb-3" />
                    <h4 className="font-bold text-brand-text text-sm mb-1">{cert.title}</h4>
                    <p className="font-mono text-xs text-brand-textMuted">{cert.issuer}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-6">Milestones</h3>
              <ul className="space-y-4">
                {achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <span className="text-brand-accentPrimary mt-1">▹</span>
                    <p className="text-brand-textMuted leading-relaxed">{achievement}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
