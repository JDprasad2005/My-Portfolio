import { useEffect, useState } from "react";
import "./Skills.css";

function Skills() {
  const [skills, setSkills] = useState([]);

  // icon map stays in frontend
  const iconMap = {
    HTML: "🌐",
    CSS: "🎨",
    JavaScript: "⚡",
    React: "⚛️",
    "Node.js": "🟢",
    MongoDB: "🍃"
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/skills")
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error("Failed to load skills", err));
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-heading">Skills</h2>

        <div className="skills-grid">
          {skills.map(skill => (
            <div className="skill-card" key={skill._id}>
              <div className="skill-icon">
                {iconMap[skill.name] || "🧩"}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
