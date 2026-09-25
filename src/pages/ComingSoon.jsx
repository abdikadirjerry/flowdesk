function ComingSoon({ title, description }) {
  return (
    <main className="page-content">
      <section className="coming-soon-card">
        <div className="coming-soon-icon">FD</div>

        <p className="page-eyebrow">FlowDesk</p>

        <h1>{title}</h1>

        <p>{description}</p>

        <span className="coming-soon-badge">Coming in a future release</span>
      </section>
    </main>
  );
}

export default ComingSoon;
