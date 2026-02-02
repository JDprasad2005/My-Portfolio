function Connect() {
  return (
    <section className="container py-5 text-center" id="connect">
      <h2 className="mb-4">Connect With Me</h2>

      <p className="text-muted mb-4">
        You can reach me through these platforms
      </p>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-primary px-4"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-dark px-4"
        >
          GitHub
        </a>

        <a
          href="mailto:youremail@gmail.com"
          className="btn btn-outline-success px-4"
        >
          Email
        </a>
      </div>
    </section>
  );
}

export default Connect;
