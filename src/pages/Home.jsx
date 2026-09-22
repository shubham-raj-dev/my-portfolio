import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1);
    if (path) {
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
