import { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error("Failed to load profile", err));
  }, []);

  if (!profile) return null;

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-heading">ABOUT / PROFILE</h2>

        <div className="about-content">
          <div className="about-image">
            <img src="/images/me.jpeg" alt="Profile" />
          </div>

          <div className="about-text">
            <p>{profile.aboutText}</p>

            <div className="about-tags">
              {profile.tags && profile.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
