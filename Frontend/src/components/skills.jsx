const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];

function Skills() {
  return (
    <section className="container py-5">
      <h2>Skills</h2>
      <div className="row mt-3">
        {skills.map((skill, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{skill}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
