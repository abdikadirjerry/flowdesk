import "./StateStyle.css";

function LoadingState({ message = "Loading..." }) {
  return (
    <div className="state-card state-card--loading">
      <div className="state-card__spinner" />

      <h2>Loading</h2>

      <p>{message}</p>
    </div>
  );
}

export default LoadingState;
