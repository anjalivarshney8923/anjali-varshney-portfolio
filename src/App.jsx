import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Metrics from './components/Metrics';
import TechStack from './components/TechStack';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import OtherProjects from './components/OtherProjects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import CodingProfiles from './components/CodingProfiles';
import CurrentlyLearning from './components/CurrentlyLearning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <div className="bg-background text-gray-300 font-sans min-h-screen relative overflow-x-hidden selection:bg-neonBlue selection:text-background">
      <ParticlesBackground />
      <Navbar openResume={openResume} />

      <main className="relative z-10 w-full flex flex-col gap-0">
        <Hero openResume={openResume} />
        <About />
        <Metrics />
        <TechStack />
        <FeaturedCaseStudy />
        <OtherProjects />
        <Experience />
        <Certificates />
        <CodingProfiles />
        <CurrentlyLearning />
        <Contact />
      </main>

      <Footer />

      {/* Resume Modal */}
      {isResumeOpen && <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />}
    </div>
  );
}

export default App;
