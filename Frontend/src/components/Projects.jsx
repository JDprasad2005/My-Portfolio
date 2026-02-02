const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built using React."
  },
  {
    title: "Student Management System",
    description: "A web app to manage student records."
  }
];

function Projects() {
  return (
    <section className="container py-5">
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
