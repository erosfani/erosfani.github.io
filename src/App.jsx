import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from "./components/NavigationBar.jsx";
import About from "./sections/About.jsx";
import {useState, useEffect} from "react";
import Experience from "./sections/Experience.jsx";
import Education from "./sections/Education.jsx";
import Research from "./sections/Research.jsx";
import LastUpdateDate from "./components/LastUpdateDate.jsx";

function App() {

  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {

    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'research'];
      let current = '';

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <>
      <NavigationBar activeSection={activeSection} />

      <main>
        <About />
        <Experience />
        <Education />
        <Research />
      </main>

      <footer className="footer">

        <span> <strong> Eros Fanì </strong> - All rights reserved. </span>
        <br/>
        <span style={{color: 'grey'}}> Last update: <LastUpdateDate /> </span>
      </footer>
    </>
  )
}


export default App
