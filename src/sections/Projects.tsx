import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/UI/ProjectCard';

const projects = [
  {
    title: 'Satvix Infotech — Business Website',
    description: 'Live business website presenting services and brand identity for Satvix Infotech with modern web tooling.',
    tags: ['TypeScript', 'React', 'Vercel'],
    live: 'https://satvix-infotech.vercel.app/',
    repo: 'https://github.com/Harshitdubey-lab/satvix.infotech'
  },
  {
    title: 'Resume Analyzer',
    description: 'AI/ML Application that analyzes resumes for key skills, keywords, and job-fit; uses NLP to give insights and match scores.',
    tags: ['Python', 'NLP', 'Machine Learning'],
    repo: 'https://github.com/Harshitdubey-lab/Resume_analyzer'
  },
  {
    title: 'Hospital Site',
    description: 'Responsive hospital website focused on service presentation and user-friendly navigation.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://hospital-site-eight.vercel.app',
    repo: 'https://github.com/Harshitdubey-lab/Hospital_site'
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Notebook-based ML project on customer churn — encompassing data preprocessing, model training, and evaluation.',
    tags: ['Python', 'Jupyter', 'Scikit-Learn'],
    repo: 'https://github.com/Harshitdubey-lab/MLmodel_customer_churn_prediction_dataset-'
  },
  {
    title: 'AI Virtual Assistant',
    description: 'AI-powered assistant handling user queries, reminders, and basic automation using Natural Language Processing.',
    tags: ['Python', 'NLP', 'APIs'],
  }
];

const clones = [
  { name: 'Amazon Clone', link: 'https://github.com/Harshitdubey-lab/Amazon' },
  { name: 'Blinkit Clone', link: 'https://github.com/Harshitdubey-lab/Blinkit-clone' },
  { name: 'Spotify Clone', link: 'https://github.com/Harshitdubey-lab/Spotify-clone' },
  { name: 'School Website', link: 'https://github.com/Harshitdubey-lab/school-website' }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-brand-accentSecondary text-sm">// 02 — selected_works</span>
            <div className="h-px flex-1 bg-brand-border" />
          </div>
          
          <h2 className="text-4xl font-bold text-brand-text">Projects.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* UI Sandbox Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="p-8 border border-brand-border bg-brand-panel/50 rounded-sm"
        >
          <h3 className="text-xl font-bold text-brand-text mb-4">UI Sandbox & Clones</h3>
          <p className="text-brand-textMuted text-sm mb-6">Frontend practice projects exploring layout architecture and responsive design.</p>
          
          <div className="flex flex-wrap gap-4">
            {clones.map((clone, idx) => (
              <a 
                key={idx} 
                href={clone.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-brand-graphite border border-brand-border hover:border-brand-accentPrimary/50 rounded-sm transition-colors text-sm text-brand-text"
              >
                <span className="font-mono text-brand-accentSecondary opacity-0 group-hover:opacity-100 -ml-2 w-0 group-hover:w-auto transition-all">&gt;</span>
                {clone.name}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
