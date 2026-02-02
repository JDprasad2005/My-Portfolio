import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="container py-5" id="projects">
      <h2>Projects</h2>

      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <button className="btn btn-outline-primary">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
