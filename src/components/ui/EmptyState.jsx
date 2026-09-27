import "./StateStyle.css";

function EmptyState({
  title = "Nothing here yet",
  message = "There is no data to display.",
  actionLabel,
  onAction,
}) {
  return (
    <div className="state-card state-card--empty">
      <div className="state-card__icon">—</div>

      <h2>{title}</h2>

      <p>{message}</p>

      {actionLabel && onAction && (
        <button type="button" className="state-card__action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
