import { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then(res => res.json())
      .then(data => {
        // handle array response
        if (Array.isArray(data) && data.length > 0) {
          setName(data[0].name);
        }
        // handle object response
        else if (data && data.name) {
          setName(data.name);
        }
      })
      .catch(err => console.error("Failed to load profile", err));
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#connect">Contact</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} {name || "Your Name"}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
