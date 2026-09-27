import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import clients from "../../data/clients";
import invoices from "../../data/invoices";
import projects from "../../data/projects";
import tasks from "../../data/tasks";
import "./GlobalSearch.css";

const searchableItems = [
  ...projects.map((project) => ({
    id: `project-${project.id}`,
    title: project.name,
    description: project.description,
    category: "Project",
    path: "/projects",
  })),
  ...clients.map((client) => ({
    id: `client-${client.id}`,
    title: client.name,
    description: `${client.contact} · ${client.email}`,
    category: "Client",
    path: "/clients",
  })),
  ...tasks.map((task) => ({
    id: `task-${task.id}`,
    title: task.title,
    description: `${task.project} · ${task.status}`,
    category: "Task",
    path: "/tasks",
  })),
  ...invoices.map((invoice) => ({
    id: `invoice-${invoice.id}`,
    title: invoice.id,
    description: `${invoice.client} · ${invoice.amount} · ${invoice.status}`,
    category: "Invoice",
    path: "/invoices",
  })),
];

const categoryOrder = ["Project", "Client", "Task", "Invoice"];

function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return searchableItems.filter((item) =>
      `${item.title} ${item.description} ${item.category}`
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  const groupedResults = categoryOrder
    .map((category) => ({
      category,
      items: results.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);

  function handleSelect(path) {
    navigate(path);
    setQuery("");
    setIsOpen(false);
  }

  function handleChange(event) {
    setQuery(event.target.value);
    setIsOpen(true);
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      setIsOpen(false);
    }

    if (event.key === "Enter" && results.length > 0) {
      handleSelect(results[0].path);
    }
  }

  return (
    <div className="global-search">
      <div className="global-search__field">
        <span className="global-search__icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.5 4.5" />
          </svg>
        </span>

        <input
          type="search"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search projects, clients, tasks..."
          aria-label="Search FlowDesk"
          aria-expanded={isOpen}
          aria-controls="global-search-results"
        />

        {query && (
          <button
            type="button"
            className="global-search__clear"
            onClick={() => {
              setQuery("");
              setIsOpen(true);
            }}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {isOpen && query.trim() && (
        <>
          <button
            type="button"
            className="global-search__backdrop"
            aria-label="Close search results"
            onClick={() => setIsOpen(false)}
          />

          <div className="global-search__results" id="global-search-results">
            <div className="global-search__results-heading">
              <span>Search results</span>
              <span>{results.length} found</span>
            </div>

            {groupedResults.length > 0 ? (
              groupedResults.map((group) => (
                <div className="global-search__group" key={group.category}>
                  <h3>{group.category}s</h3>

                  {group.items.map((item) => (
                    <button
                      type="button"
                      className="global-search__result"
                      key={item.id}
                      onClick={() => handleSelect(item.path)}
                    >
                      <span
                        className={`global-search__result-icon global-search__result-icon--${item.category.toLowerCase()}`}
                        aria-hidden="true"
                      >
                        {item.category.charAt(0)}
                      </span>

                      <span className="global-search__result-copy">
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </span>

                      <span className="global-search__result-arrow">↗</span>
                    </button>
                  ))}
                </div>
              ))
            ) : (
              <div className="global-search__empty">
                <span className="global-search__empty-icon" aria-hidden="true">
                  ?
                </span>
                <strong>No matching results</strong>
                <p>Try another name, keyword, or invoice number.</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default GlobalSearch;
