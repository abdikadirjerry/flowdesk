function ActivityItem({ item }) {
  const icons = {
    project: "P",
    task: "T",
    invoice: "$",
    client: "C",
  };

  return (
    <article className="activity-item">
      <div className={`activity-item__icon activity-item__icon--${item.type}`}>
        {icons[item.type]}
      </div>

      <div className="activity-item__content">
        <div className="activity-item__top">
          <h3>{item.title}</h3>
          <span>{item.time}</span>
        </div>

        <p>{item.description}</p>

        <strong>{item.user}</strong>
      </div>
    </article>
  );
}

export default ActivityItem;
