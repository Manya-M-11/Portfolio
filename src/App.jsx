import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/About';
import Certifications from './components/Certifications';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Certifications/>
      <Projects/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}
