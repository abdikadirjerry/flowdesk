import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Clients from "./pages/Clients";
import ComingSoon from "./pages/ComingSoon";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />

        <Route
          path="/projects"
          element={
            <ComingSoon
              title="Projects"
              description="Project planning, milestones, budgets, and delivery tracking will be managed here."
            />
          }
        />

        <Route
          path="/tasks"
          element={
            <ComingSoon
              title="Tasks"
              description="Organize work with task lists, priorities, assignments, and a Kanban workflow."
            />
          }
        />

        <Route
          path="/invoices"
          element={
            <ComingSoon
              title="Invoices"
              description="Track invoices, payment status, billing information, and client payments."
            />
          }
        />

        <Route
          path="/activity"
          element={
            <ComingSoon
              title="Activity"
              description="Follow important workspace events and keep a complete operational timeline."
            />
          }
        />

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
