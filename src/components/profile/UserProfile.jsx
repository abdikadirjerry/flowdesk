import { useState } from "react";
import "./UserProfile.css";

function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleProfile() {
    setIsOpen((current) => !current);
  }

  return (
    <div className="user-profile">
      <button
        type="button"
        className="topbar-avatar user-profile__trigger"
        onClick={toggleProfile}
        aria-label="Open user profile"
        aria-expanded={isOpen}
      >
        AJ
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="user-profile__backdrop"
            aria-label="Close user profile"
            onClick={() => setIsOpen(false)}
          />

          <section className="user-profile__dropdown">
            <div className="user-profile__identity">
              <div className="user-profile__avatar">AJ</div>

              <div className="user-profile__identity-details">
                <strong>Alex Johnson</strong>
                <span>alex.johnson@acmestudio.com</span>
              </div>
            </div>

            <div className="user-profile__divider" />

            <div className="user-profile__details">
              <span className="user-profile__label">Account role</span>
              <strong>Administrator</strong>

              <span className="user-profile__label">Workspace</span>
              <strong>Acme Studio</strong>

              <span className="user-profile__label">Plan</span>
              <strong className="user-profile__plan">Free workspace</strong>
            </div>

            <div className="user-profile__footer">
              <span className="user-profile__status-dot" />
              <span>Account active</span>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default UserProfile;
