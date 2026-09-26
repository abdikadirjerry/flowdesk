import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Clients from "./pages/Clients";
import ComingSoon from "./pages/ComingSoon";
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/clients" element={<Clients />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/tasks" element={<Tasks />} />

        <Route path="/invoices" element={<Invoices />} />

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
