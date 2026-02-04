import { useEffect, useState } from "react";
import { authFetch } from "../utils/AuthFetch";
import { Link } from "react-router-dom";
import "./AdminProfile.css";

function AdminProfile() {
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    description: "",
    email: "",
    resumeUrl: "",
    aboutText: "",
    profileImage: "",
    tags: []
  });

  async function fetchProfile() {
    const res = await fetch("http://localhost:5000/api/profile");
    const data = await res.json();
    if (data) setProfile(data);
  }

  async function saveProfile(e) {
    e.preventDefault();
    await authFetch("http://localhost:5000/api/profile", {
      method: "POST",
      body: JSON.stringify(profile)
    });
    alert("Profile saved successfully!");
  }

  function handleTagChange(e) {
    const value = e.target.value;
    setProfile({ ...profile, tags: value.split(",").map(tag => tag.trim()) });
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="admin-profile-container">
      <div className="admin-header">
        <Link to="/admin/dashboard" className="back-link">← Dashboard</Link>
        <h2>Edit Profile</h2>
        <p>Update your personal information and portfolio details</p>
      </div>

      <div className="admin-card">
        <form className="profile-form" onSubmit={saveProfile}>
          <div className="form-grid">
            <div className="input-group">
              <label>Full Name</label>
              <input
                placeholder="e.g. JD Prasad"
                value={profile.name}
                onChange={e => setProfile({ ...profile, name: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label>Professional Title</label>
              <input
                placeholder="e.g. Full Stack Developer"
                value={profile.title}
                onChange={e => setProfile({ ...profile, title: e.target.value })}
              />
            </div>

            <div className="input-group full-width">
              <label>Hero Description (Short Bio)</label>
              <textarea
                placeholder="A brief catchy intro for your home page..."
                value={profile.description}
                onChange={e => setProfile({ ...profile, description: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label>Contact Email</label>
              <input
                placeholder="email@example.com"
                value={profile.email}
                onChange={e => setProfile({ ...profile, email: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label>Resume Link</label>
              <input
                placeholder="/resume.pdf"
                value={profile.resumeUrl}
                onChange={e => setProfile({ ...profile, resumeUrl: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label>Profile Image Path</label>
              <input
                placeholder="/images/profile.jpg"
                value={profile.profileImage}
                onChange={e => setProfile({ ...profile, profileImage: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label>Tags (Comma Separated)</label>
              <input
                placeholder="React, Node, Designer"
                value={profile.tags.join(", ")}
                onChange={handleTagChange}
              />
            </div>

            <div className="input-group full-width">
              <label>About Me Detailed Text</label>
              <textarea
                className="tall-textarea"
                placeholder="The detailed story for your About section..."
                value={profile.aboutText}
                onChange={e => setProfile({ ...profile, aboutText: e.target.value })}
              />
            </div>
          </div>

          <button type="submit" className="save-btn">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default AdminProfile;