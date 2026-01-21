import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SparkEffect from './components/SparkEffect';
import './App.css';
import './responsive.css';

function App() {
  return (
    <Router>
      <div className="App">
        <SparkEffect />
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
              </>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;