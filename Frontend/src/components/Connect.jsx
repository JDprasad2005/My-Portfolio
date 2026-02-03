import { useEffect, useState } from "react";
import "./Connect.css";

function Connect() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/connect")
      .then(res => res.json())
      .then(data => setLinks(data))
      .catch(err => console.error("Failed to load connect links", err));
  }, []);

  return (
    <section className="connect" id="connect">
      <h2 className="connect-title">Connect / Get in Touch</h2>

      <div className="connect-grid">
        {links.map(link => (
          <a
            key={link._id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="connect-card"
          >
            <div className="card-icon">
              {link.icon || "🔗"}
            </div>

            <div className="card-content">
              <h3>{link.platform}</h3>
              <p className="card-id">{link.displayText}</p>
              <span className="card-action">
                {link.actionText || "Open"}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Connect;
