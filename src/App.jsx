import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import WebVitals from './components/WebVitals';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <WebVitals />
      <div className="bg-background min-h-screen text-foreground font-sans selection:bg-[#14d9a0]/30 relative overflow-hidden">
        
        {/* 🌊 THE REAL APPLE iOS LIQUID TRICK 🌊 */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020617]">
          
          {/* STEP 1: Bright, Colorful, Moving Blobs (Underneath) */}
          <div className="absolute glow-orb animate-blob bg-[#14d9a0] w-[70vw] h-[70vw] top-[-20%] left-[-10%] opacity-60" />
          <div className="absolute glow-orb animate-blob-delayed bg-[#14b8d9] w-[80vw] h-[80vw] bottom-[-20%] right-[-20%] opacity-50" />
          <div className="absolute glow-orb animate-blob-slow bg-[#a855f7] w-[60vw] h-[60vw] top-[10%] left-[20%] opacity-50" />
          
          {/* STEP 2: The Magic Layer (Heavy Blur + Dark Tint) */}
          <div className="absolute inset-0 bg-[#020617]/75 backdrop-blur-[120px]"></div>
          
          {/* STEP 3: Subtle Mesh Pattern for texture */}
          <div className="absolute inset-0 bg-mesh-pattern opacity-40"></div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/experience" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/faq" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/:id" element={<CaseStudy />} />
        </Routes>
        
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;