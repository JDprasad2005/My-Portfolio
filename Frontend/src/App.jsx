import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

// Admin pages
import AdminLogin from "./Admin/AdminLogin";
import Dashboard from "./Admin/Dashboard";
import AdminProfile from "./Admin/AdminProfile";
import AdminSkills from "./Admin/AdminSkills";
import AdminProjects from "./Admin/AdminProjects";
import AdminConnect from "./Admin/AdminConnect";

function PublicPortfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Connect />
      <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Portfolio */}
        <Route path="/" element={<PublicPortfolio />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/skills" element={<AdminSkills />} />
        <Route path="/admin/projects" element={<AdminProjects />} />
        <Route path="/admin/connect" element={<AdminConnect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
