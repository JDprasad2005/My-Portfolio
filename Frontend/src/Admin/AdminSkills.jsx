import { useEffect, useState } from "react";
import { authFetch } from "../utils/AuthFetch";
import { Link } from "react-router-dom";
import "./AdminSkills.css";

function AdminSkills() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");

  async function fetchSkills() {
    const res = await fetch("http://localhost:5000/api/skills");
    const data = await res.json();
    setSkills(data);
  }

  async function addSkill(e) {
    e.preventDefault();
    if (!name.trim()) return;
    
    await authFetch("http://localhost:5000/api/skills", {
      method: "POST",
      body: JSON.stringify({ name })
    });
    setName("");
    fetchSkills();
  }

  async function deleteSkill(id) {
    if (window.confirm("Delete this skill?")) {
      await authFetch(`http://localhost:5000/api/skills/${id}`, {
        method: "DELETE"
      });
      fetchSkills();
    }
  }

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="admin-skills-container">
      <div className="admin-header">
        <Link to="/admin/dashboard" className="back-link">← Dashboard</Link>
        <h2>Manage Skills</h2>
        <p>Add or remove skills from your tech stack</p>
      </div>

      <div className="admin-card">
        <form className="skill-form" onSubmit={addSkill}>
          <input
            className="skill-input"
            placeholder="e.g. React, Node.js, AWS"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button className="add-skill-btn">Add Skill</button>
        </form>

        <div className="skills-list">
          {skills.length > 0 ? (
            skills.map(skill => (
              <div key={skill._id} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <button 
                  className="delete-skill-btn" 
                  onClick={() => deleteSkill(skill._id)}
                  title="Remove Skill"
                >
                  ×
                </button>
              </div>
            ))
          ) : (
            <p className="no-skills">No skills added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminSkills;