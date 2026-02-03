import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error("Failed to load profile", err));
  }, []);

  if (!profile) return null; // or a loader

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-description">
          {profile.description}
        </p>
        <div className="hero-buttons">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Email me
          </a>
          <a href={profile.resumeUrl} className="btn btn-secondary" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
