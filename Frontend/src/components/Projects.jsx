import { useEffect, useState } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Failed to load projects", err));
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-heading">Projects</h2>

        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project._id}>
              <div className="project-image">
                <img
                  src={project.image || "/project-placeholder.jpg"}
                  alt={project.title}
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.techStack &&
                    project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-github"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-live"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
