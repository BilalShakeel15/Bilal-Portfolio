
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skill />
      <Projects />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
