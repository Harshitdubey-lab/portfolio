import React, { Suspense } from 'react';
import { Navigation } from './components/Layout/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';

function App() {
  return (
    <>
      <div className="bg-noise bg-noise-overlay"></div>
      <Navigation />
      
      {/* Main asymmetric layout container */}
      <main className="md:ml-24 min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;
