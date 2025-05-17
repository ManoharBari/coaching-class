import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Bright Minds Academy | Empowering Students for a Better Tomorrow';
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Courses />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;