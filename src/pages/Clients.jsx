import { useState } from "react";
import clients from "../data/clients";
import ClientCard from "../components/clients/ClientCard";

function Clients() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredClients = clients.filter((client) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      client.name.toLowerCase().includes(searchValue) ||
      client.contact.toLowerCase().includes(searchValue) ||
      client.email.toLowerCase().includes(searchValue);

    const matchesStatus = status === "All" || client.status === status;

    return matchesSearch && matchesStatus;
  });

  const activeClients = clients.filter(
    (client) => client.status === "Active",
  ).length;

  const onboardingClients = clients.filter(
    (client) => client.status === "Onboarding",
  ).length;

  const totalRevenue = clients.reduce((total, client) => {
    return total + Number(client.revenue.replace(/[$,]/g, ""));
  }, 0);

  return (
    <section className="clients-page">
      <div className="clients-page__header">
        <div>
          <span className="clients-page__eyebrow">Workspace</span>

          <h1>Clients</h1>

          <p>
            Manage client relationships, projects, and account activity from one
            place.
          </p>
        </div>

        <button type="button" className="clients-page__button">
          + New Client
        </button>
      </div>

      <div className="clients-page__summary">
        <div className="clients-page__summary-card">
          <span>Total clients</span>
          <strong>{clients.length}</strong>
        </div>

        <div className="clients-page__summary-card">
          <span>Active clients</span>
          <strong>{activeClients}</strong>
        </div>

        <div className="clients-page__summary-card">
          <span>Onboarding</span>
          <strong>{onboardingClients}</strong>
        </div>

        <div className="clients-page__summary-card">
          <span>Total revenue</span>
          <strong>${totalRevenue.toLocaleString()}</strong>
        </div>
      </div>

      <div className="clients-page__filters">
        <div className="clients-page__search">
          <label htmlFor="client-search">Search clients</label>

          <input
            id="client-search"
            type="text"
            placeholder="Search by name, contact, or email..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="clients-page__status">
          <label htmlFor="client-status">Status</label>

          <select
            id="client-status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="All">All statuses</option>
            <option value="Active">Active</option>
            <option value="Onboarding">Onboarding</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <span className="clients-page__result-count">
          {filteredClients.length}{" "}
          {filteredClients.length === 1 ? "client" : "clients"}
        </span>
      </div>

      {filteredClients.length > 0 ? (
        <div className="clients-page__grid">
          {filteredClients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      ) : (
        <div className="clients-page__empty">
          <h2>No clients found</h2>
          <p>Try changing your search or status filter.</p>
        </div>
      )}
    </section>
  );
}

export default Clients;
