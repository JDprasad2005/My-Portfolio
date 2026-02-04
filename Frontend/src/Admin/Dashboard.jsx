import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const menuItems = [
    { title: "Edit Profile", path: "/admin/profile", desc: "Update your name, title, and bio." },
    { title: "Manage Skills", path: "/admin/skills", desc: "Add or remove items from your tech stack." },
    { title: "Manage Projects", path: "/admin/projects", desc: "Showcase your latest work and links." },
    { title: "Manage Connect", path: "/admin/connect", desc: "Update social media and contact links." },
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome back! Select a section to manage your portfolio.</p>
      </header>

      <div className="dashboard-grid">
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} className="dashboard-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="card-arrow">Manage →</span>
          </Link>
        ))}
      </div>

      <div className="dashboard-footer">
        <Link to="/" className="logout-btn">Back to Website</Link>
      </div>
    </div>
  );
}

export default Dashboard;