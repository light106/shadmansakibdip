import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Extras from './components/Extras';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-pink-500 selection:text-white font-sans">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Extras />
        <Contact />
      </main>
      <AIChat />
    </div>
  );
}

export default App;