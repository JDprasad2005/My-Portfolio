import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Contact from "./components/Contant";

function App() {
  return (
    <div>
       <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact/>
      <h1>My Portfolio</h1>
    </div>
  );
}

export default App;