import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then(res => res.json())
      .then(data => {
        // Handle both array and object response
        if (Array.isArray(data)) {
          setProfile(data[0]);
        } else {
          setProfile(data);
        }
      })
      .catch(err => console.error("Failed to load profile", err));
  }, []);

  if (!profile) return null;

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">{profile.name}</h1>

          <div className="hero-subtitle-container">
            <span className="hero-dash">—</span>
            <h2 className="hero-title">{profile.title}</h2>
            <span className="hero-dash">—</span>
          </div>

          <p className="hero-description">
            {profile.description}
          </p>

          <div className="hero-buttons">
           <a
             href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Portfolio Contact`}
            target="_blank"
             rel="noopener noreferrer"
             className="btn-email">
              Email Me →
            </a>

            <a href={profile.resumeUrl} className="btn-resume" download>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
