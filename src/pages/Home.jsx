import React from 'react';
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
