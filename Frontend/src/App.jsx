import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";

function App() {
  return (
    <div>
       <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Connect/>
    </div>
  );
}

export default App;