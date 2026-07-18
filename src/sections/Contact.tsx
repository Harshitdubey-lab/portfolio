import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 min-h-screen relative overflow-hidden flex items-center">
      {/* Background terminal-like styling */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-brand-accentPrimary opacity-5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-brand-accentSecondary text-sm">// 04 — get_in_touch</span>
            <div className="h-px flex-1 bg-brand-border" />
          </div>
          
          <h2 className="text-4xl font-bold text-brand-text">Contact.</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Information */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-brand-textMuted mb-10 leading-relaxed max-w-md">
                Interested in working together or have a question? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:dubeyharshit.in@gmail.com" className="flex items-center gap-4 text-brand-text hover:text-brand-accentPrimary transition-colors group">
                  <div className="p-4 bg-brand-panel border border-brand-border rounded-sm group-hover:border-brand-accentPrimary transition-colors">
                    <Mail size={20} className="text-brand-accentSecondary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-brand-textMuted mb-1">Email</p>
                    <p className="font-medium">dubeyharshit.in@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-brand-text group">
                  <div className="p-4 bg-brand-panel border border-brand-border rounded-sm">
                    <Phone size={20} className="text-brand-accentSecondary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-brand-textMuted mb-1">Phone</p>
                    <p className="font-medium">+91 7828866076</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-brand-text group">
                  <div className="p-4 bg-brand-panel border border-brand-border rounded-sm">
                    <MapPin size={20} className="text-brand-accentSecondary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-brand-textMuted mb-1">Location</p>
                    <p className="font-medium">Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 flex items-center gap-4">
                <a href="https://github.com/Harshitdubey-lab" target="_blank" rel="noopener noreferrer" className="p-4 bg-brand-panel border border-brand-border rounded-sm text-brand-textMuted hover:text-brand-text hover:border-brand-accentPrimary transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/dharshit" target="_blank" rel="noopener noreferrer" className="p-4 bg-brand-panel border border-brand-border rounded-sm text-brand-textMuted hover:text-brand-text hover:border-brand-accentPrimary transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-brand-panel border border-brand-border p-8 rounded-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-xs text-brand-textMuted uppercase">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-brand-graphite border border-brand-border rounded-sm px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accentPrimary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-xs text-brand-textMuted uppercase">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-brand-graphite border border-brand-border rounded-sm px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accentPrimary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="font-mono text-xs text-brand-textMuted uppercase">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  className="w-full bg-brand-graphite border border-brand-border rounded-sm px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accentPrimary transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-sm font-medium flex items-center justify-center gap-2 transition-all ${
                  submitted 
                    ? 'bg-brand-accentSecondary text-brand-graphite' 
                    : 'bg-brand-text text-brand-graphite hover:bg-brand-accentPrimary hover:text-white'
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : submitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
};
