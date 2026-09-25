import { useMemo, useState } from "react";

const initialClients = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "Northstar Labs",
    email: "sarah@northstarlabs.com",
    phone: "+1 415 555 0182",
    status: "Active",
    projects: 4,
    joined: "Sep 12, 2026",
  },
  {
    id: 2,
    name: "Daniel Carter",
    company: "Vertex Studio",
    email: "daniel@vertexstudio.com",
    phone: "+1 212 555 0147",
    status: "Active",
    projects: 2,
    joined: "Sep 08, 2026",
  },
  {
    id: 3,
    name: "Maya Anderson",
    company: "Brightline Media",
    email: "maya@brightlinemedia.com",
    phone: "+1 310 555 0191",
    status: "Pending",
    projects: 1,
    joined: "Sep 03, 2026",
  },
  {
    id: 4,
    name: "James Wilson",
    company: "Orbit Financial",
    email: "james@orbitfinancial.com",
    phone: "+1 646 555 0126",
    status: "Active",
    projects: 6,
    joined: "Aug 27, 2026",
  },
  {
    id: 5,
    name: "Olivia Brown",
    company: "Evergreen Co.",
    email: "olivia@evergreen.co",
    phone: "+1 206 555 0164",
    status: "Inactive",
    projects: 3,
    joined: "Aug 19, 2026",
  },
];

function Clients() {
  const [clients] = useState(initialClients);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return clients;
    }

    return clients.filter((client) => {
      return (
        client.name.toLowerCase().includes(normalizedSearch) ||
        client.company.toLowerCase().includes(normalizedSearch) ||
        client.email.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [clients, searchTerm]);

  return (
    <main className="page-content">
      <div className="page-header">
        <div>
          <p className="page-eyebrow">Workspace</p>
          <h1>Clients</h1>
          <p className="page-description">
            Keep your client relationships, contact details, and project
            activity organized in one place.
          </p>
        </div>

        <button className="primary-button">Add client</button>
      </div>

      <section className="clients-toolbar">
        <div className="client-search">
          <span className="search-icon">⌕</span>

          <input
            type="search"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="clients-summary">
          <span>{filteredClients.length} clients</span>
        </div>
      </section>

      <section className="clients-card">
        <div className="clients-table-wrapper">
          <table className="clients-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Projects</th>
                <th>Joined</th>
                <th aria-label="Actions"></th>
              </tr>
            </thead>

            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id}>
                  <td>
                    <div className="client-identity">
                      <div className="client-avatar">
                        {client.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </div>

                      <div>
                        <strong>{client.name}</strong>
                        <span>{client.company}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="client-contact">
                      <span>{client.email}</span>
                      <span>{client.phone}</span>
                    </div>
                  </td>

                  <td>
                    <span
                      className={`status-badge status-${client.status.toLowerCase()}`}
                    >
                      {client.status}
                    </span>
                  </td>

                  <td>
                    <span className="project-count">
                      {client.projects}{" "}
                      {client.projects === 1 ? "project" : "projects"}
                    </span>
                  </td>

                  <td>
                    <span className="joined-date">{client.joined}</span>
                  </td>

                  <td>
                    <button
                      className="table-action"
                      aria-label={`Open ${client.name}`}
                    >
                      →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredClients.length === 0 && (
          <div className="clients-empty-state">
            <div className="empty-state-icon">CL</div>
            <h3>No clients found</h3>
            <p>
              Try changing your search term to find the client you are looking
              for.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Clients;
