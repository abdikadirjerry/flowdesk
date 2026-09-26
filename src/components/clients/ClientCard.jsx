function ClientCard({ client }) {
  const initials = client.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="client-card">
      <div className="client-card__header">
        <div className="client-card__avatar">{initials}</div>

        <span
          className={`client-card__status client-card__status--${client.status.toLowerCase()}`}
        >
          {client.status}
        </span>
      </div>

      <div className="client-card__content">
        <h3>{client.name}</h3>

        <p className="client-card__contact">{client.contact}</p>

        <p className="client-card__email">{client.email}</p>
      </div>

      <div className="client-card__footer">
        <div>
          <span>Projects</span>
          <strong>{client.projects}</strong>
        </div>

        <div>
          <span>Revenue</span>
          <strong>{client.revenue}</strong>
        </div>
      </div>
    </article>
  );
}

export default ClientCard;
