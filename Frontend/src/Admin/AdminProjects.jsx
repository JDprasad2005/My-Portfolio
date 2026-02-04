import { useEffect, useState } from "react";
import { authFetch } from "../utils/AuthFetch";
import { Link } from "react-router-dom";
import "./AdminProjects.css";

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    techStack: "",
    githubLink: "",
    liveLink: ""
  });

  async function fetchProjects() {
    const res = await fetch("http://localhost:5000/api/projects");
    const data = await res.json();
    setProjects(data);
  }

  async function addProject(e) {
    e.preventDefault();
    const payload = {
      ...form,
      techStack: form.techStack.split(",").map(item => item.trim())
    };

    await authFetch("http://localhost:5000/api/projects", {
      method: "POST",
      body: JSON.stringify(payload)
    });

    setForm({
      title: "",
      description: "",
      image: "",
      techStack: "",
      githubLink: "",
      liveLink: ""
    });
    fetchProjects();
  }

  async function deleteProject(id) {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await authFetch(`http://localhost:5000/api/projects/${id}`, {
        method: "DELETE"
      });
      fetchProjects();
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="admin-projects-container">
      <div className="admin-header">
        <Link to="/admin/dashboard" className="back-link">← Dashboard</Link>
        <h2>Manage Projects</h2>
        <p>Add new portfolio items or remove existing ones</p>
      </div>

      {/* FORM SECTION */}
      <div className="admin-card">
        <h3 className="card-title">Add New Project</h3>
        <form className="project-form" onSubmit={addProject}>
          <div className="form-grid">
            <div className="input-group">
              <label>Project Title</label>
              <input placeholder="e.g. E-commerce Platform"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })} />
            </div>

            <div className="input-group">
              <label>Tech Stack (Comma Separated)</label>
              <input placeholder="React, Node, MongoDB"
                value={form.techStack}
                onChange={e => setForm({ ...form, techStack: e.target.value })} />
            </div>

            <div className="input-group full-width">
              <label>Description</label>
              <textarea placeholder="Tell us about the project..."
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })} />
            </div>

            <div className="input-group">
              <label>Image URL</label>
              <input placeholder="/images/project1.jpg"
                value={form.image}
                onChange={e => setForm({ ...form, image: e.target.value })} />
            </div>

            <div className="input-group">
              <label>GitHub Link</label>
              <input placeholder="https://github.com/..."
                value={form.githubLink}
                onChange={e => setForm({ ...form, githubLink: e.target.value })} />
            </div>

            <div className="input-group">
              <label>Live Site Link</label>
              <input placeholder="https://demo.com"
                value={form.liveLink}
                onChange={e => setForm({ ...form, liveLink: e.target.value })} />
            </div>
          </div>
          <button className="add-project-btn">Add Project</button>
        </form>
      </div>

      {/* LIST SECTION */}
      <div className="admin-card list-card">
        <h3 className="card-title">Existing Projects</h3>
        <div className="project-list">
          {projects.map(p => (
            <div key={p._id} className="project-list-item">
              <div className="project-info">
                <strong>{p.title}</strong>
                <span>{p.techStack.join(", ")}</span>
              </div>
              <button className="delete-btn" onClick={() => deleteProject(p._id)}>Delete</button>
            </div>
          ))}
          {projects.length === 0 && <p className="empty-msg">No projects found.</p>}
        </div>
      </div>
    </div>
  );
}

export default AdminProjects;