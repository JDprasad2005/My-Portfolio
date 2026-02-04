import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [profile, setProfile] = useState({ name: "", title: "" });

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then(res => res.json())
      .then(data => {
        if (data) {
          setProfile({
            name: data.name,
            title: data.title
          });
        }
      })
      .catch(err => console.error("Failed to load profile", err));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
     
      <a className="navbar-brand" href="#home">
        <div className="brand-text">
          <span className="brand-name">{profile.name}</span>
          <span className="brand-role">{profile.title}</span>
        </div>
      </a>

      {/* RIGHT: Links */}
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#connect">Connect</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
