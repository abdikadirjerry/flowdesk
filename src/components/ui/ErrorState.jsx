import "./StateStyle.css";

function ErrorState({
  title = "Something went wrong",
  message = "We could not load this information.",
  onRetry,
}) {
  return (
    <div className="state-card state-card--error">
      <div className="state-card__icon">!</div>

      <h2>{title}</h2>

      <p>{message}</p>

      {onRetry && (
        <button type="button" className="state-card__retry" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}

export default ErrorState;
