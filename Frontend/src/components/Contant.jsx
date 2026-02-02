function Contact() {
  return (
    <section className="container py-5" id="contact">
      <h2>Contact Me</h2>

      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
