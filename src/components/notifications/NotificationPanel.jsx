import { useState } from "react";
import notificationsData from "../../data/notifications";
import "./NotificationPanel.css";

function NotificationPanel() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  function togglePanel() {
    setIsOpen((current) => !current);
  }

  function markAsRead(id) {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  }

  function markAllAsRead() {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      })),
    );
  }

  const icons = {
    invoice: "$",
    task: "T",
    client: "C",
    project: "P",
  };

  return (
    <div className="notification-panel">
      <button
        type="button"
        className="topbar-button notification-button"
        aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ""}`}
        aria-expanded={isOpen}
        onClick={togglePanel}
      >
        <span className="notification-dot"></span>
        Notifications
        {unreadCount > 0 && (
          <span className="notification-count">{unreadCount}</span>
        )}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="notification-panel__backdrop"
            aria-label="Close notifications"
            onClick={() => setIsOpen(false)}
          />

          <section
            className="notification-panel__dropdown"
            aria-label="Notifications"
          >
            <div className="notification-panel__header">
              <div>
                <h2>Notifications</h2>
                <p>
                  {unreadCount === 0
                    ? "You're all caught up."
                    : `${unreadCount} unread notification${unreadCount === 1 ? "" : "s"}`}
                </p>
              </div>

              <button
                type="button"
                className="notification-panel__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close notifications"
              >
                ×
              </button>
            </div>

            {unreadCount > 0 && (
              <div className="notification-panel__actions">
                <button type="button" onClick={markAllAsRead}>
                  Mark all as read
                </button>
              </div>
            )}

            <div className="notification-panel__list">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <article
                    className={`notification-item ${notification.read ? "notification-item--read" : "notification-item--unread"}`}
                    key={notification.id}
                  >
                    <span
                      className={`notification-item__icon notification-item__icon--${notification.type}`}
                      aria-hidden="true"
                    >
                      {icons[notification.type]}
                    </span>

                    <div className="notification-item__content">
                      <div className="notification-item__title">
                        <h3>{notification.title}</h3>
                        {!notification.read && (
                          <span className="notification-item__unread-dot" />
                        )}
                      </div>

                      <p>{notification.message}</p>
                      <span className="notification-item__time">
                        {notification.time}
                      </span>

                      {!notification.read && (
                        <button
                          type="button"
                          className="notification-item__read-button"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </article>
                ))
              ) : (
                <div className="notification-panel__empty">
                  <strong>No notifications</strong>
                  <p>New workspace updates will appear here.</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default NotificationPanel;
