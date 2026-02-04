import { useEffect, useState } from "react";
import { authFetch } from "../utils/AuthFetch";
import { Link } from "react-router-dom";
import "./AdminConnect.css";

function AdminConnect() {
  const [links, setLinks] = useState([]);
  const [form, setForm] = useState({
    platform: "",
    url: "",
    displayText: "",
    actionText: ""
  });

  async function fetchLinks() {
    const res = await fetch("http://localhost:5000/api/connect");
    const data = await res.json();
    setLinks(data);
  }

  async function addLink(e) {
    e.preventDefault();
    if (!form.platform || !form.url) return alert("Platform and URL are required");

    await authFetch("http://localhost:5000/api/connect", {
      method: "POST",
      body: JSON.stringify(form)
    });
    setForm({ platform: "", url: "", displayText: "", actionText: "" });
    fetchLinks();
  }

  async function deleteLink(id) {
    if (window.confirm("Remove this connection link?")) {
      await authFetch(`http://localhost:5000/api/connect/${id}`, {
        method: "DELETE"
      });
      fetchLinks();
    }
  }

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div className="admin-connect-container">
      <div className="admin-header">
        <Link to="/admin/dashboard" className="back-link">← Dashboard</Link>
        <h2>Manage Connect Links</h2>
        <p>Update your social media, email, and professional links</p>
      </div>

      <div className="admin-card">
        <h3 className="card-title">Add New Connection</h3>
        <form className="connect-form" onSubmit={addLink}>
          <div className="form-grid">
            <div className="input-group">
              <label>Platform Name</label>
              <input 
                placeholder="e.g. LinkedIn, GitHub, Email" 
                value={form.platform}
                onChange={e => setForm({ ...form, platform: e.target.value })} 
              />
            </div>
            <div className="input-group">
              <label>Full URL</label>
              <input 
                placeholder="https://..." 
                value={form.url}
                onChange={e => setForm({ ...form, url: e.target.value })} 
              />
            </div>
            <div className="input-group">
              <label>Display Handle/Text</label>
              <input 
                placeholder="e.g. @yourname or email@link.com" 
                value={form.displayText}
                onChange={e => setForm({ ...form, displayText: e.target.value })} 
              />
            </div>
            <div className="input-group">
              <label>Action Text (Button Label)</label>
              <input 
                placeholder="e.g. Follow, Send Email, View" 
                value={form.actionText}
                onChange={e => setForm({ ...form, actionText: e.target.value })} 
              />
            </div>
          </div>
          <button className="add-btn">Add Connection</button>
        </form>
      </div>

      <div className="admin-card list-card">
        <h3 className="card-title">Active Links</h3>
        <div className="links-list">
          {links.length > 0 ? (
            links.map(l => (
              <div key={l._id} className="link-item">
                <div className="link-info">
                  <span className="platform-tag">{l.platform}</span>
                  <span className="display-subtext">{l.displayText}</span>
                </div>
                <button className="delete-link-btn" onClick={() => deleteLink(l._id)}>Delete</button>
              </div>
            ))
          ) : (
            <p className="empty-msg">No connections linked yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminConnect;