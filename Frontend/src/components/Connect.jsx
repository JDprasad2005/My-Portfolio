import { useEffect, useState } from "react";
import "./Connect.css";

import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

function Connect() {
  const [links, setLinks] = useState([]);

  const iconMap = {
    email: <MdEmail size={26} />,
    linkedin: <FaLinkedin size={26} />,
    github: <FaGithub size={26} />,
    instagram: <FaInstagram size={26} />,
    twitter: <FaTwitter size={26} />,
    figma: <SiFigma size={26} />
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/connect")
      .then(res => res.json())
      .then(data => setLinks(data))
      .catch(err => console.error("Failed to load connect links", err));
  }, []);

  return (
    <section className="connect" id="connect">
      <h2 className="connect-title">CONNECT / GET IN TOUCH</h2>

      <div className="connect-grid">
        {links.map(link => {
          const key = link.platform.toLowerCase();

          return (
            <a
              key={link._id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-card"
            >
              <div className="card-icon">
                {iconMap[key] || "🔗"}
              </div>

              <div className="card-content">
                <h3>{link.platform}</h3>
                <p className="card-id">{link.displayText}</p>
                <span className="card-action">
                  {link.actionText || "Open"}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Connect;
