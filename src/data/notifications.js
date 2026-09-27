const notifications = [
  {
    id: 1,
    title: "Invoice payment received",
    message: "Northstar Labs paid invoice INV-2026-001.",
    time: "10 minutes ago",
    type: "invoice",
    read: false,
  },
  {
    id: 2,
    title: "Task completed",
    message: "Review design tokens was marked as completed.",
    time: "35 minutes ago",
    type: "task",
    read: false,
  },
  {
    id: 3,
    title: "New client onboarded",
    message: "Orbit Digital has completed onboarding.",
    time: "2 hours ago",
    type: "client",
    read: false,
  },
  {
    id: 4,
    title: "Project update",
    message: "Mobile App progress has reached 48%.",
    time: "5 hours ago",
    type: "project",
    read: true,
  },
  {
    id: 5,
    title: "Invoice overdue",
    message: "Invoice INV-2026-003 requires attention.",
    time: "Yesterday",
    type: "invoice",
    read: true,
  },
];

export default notifications;
