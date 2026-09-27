import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Activity from "./pages/Activity";
import Clients from "./pages/Clients";
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import ProjectProvider from "./context/ProjectContext";

function App() {
  return (
    <ProjectProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/clients" element={<Clients />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/tasks" element={<Tasks />} />

          <Route path="/invoices" element={<Invoices />} />

          <Route path="/activity" element={<Activity />} />

          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </ProjectProvider>
  );
}

export default App;
