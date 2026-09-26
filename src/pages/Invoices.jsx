import { useState } from "react";
import invoices from "../data/invoices";
import InvoiceRow from "../components/invoices/InvoiceRow";
import "../components/invoices/InvoiceRow.css";
import "./Invoices.css";

function Invoices() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredInvoices = invoices.filter((invoice) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      invoice.id.toLowerCase().includes(searchValue) ||
      invoice.client.toLowerCase().includes(searchValue);

    const matchesStatus = status === "All" || invoice.status === status;

    return matchesSearch && matchesStatus;
  });

  const paidInvoices = invoices.filter((invoice) => invoice.status === "Paid");

  const pendingInvoices = invoices.filter(
    (invoice) => invoice.status === "Pending",
  );

  const overdueInvoices = invoices.filter(
    (invoice) => invoice.status === "Overdue",
  );

  const parseAmount = (amount) => Number(amount.replace(/[$,]/g, ""));

  const totalValue = invoices.reduce(
    (total, invoice) => total + parseAmount(invoice.amount),
    0,
  );

  const paidValue = paidInvoices.reduce(
    (total, invoice) => total + parseAmount(invoice.amount),
    0,
  );

  return (
    <section className="invoices-page">
      <div className="invoices-page__header">
        <div>
          <span className="invoices-page__eyebrow">Finance</span>

          <h1>Invoices</h1>

          <p>
            Track billing, payment status, and outstanding client invoices from
            one workspace.
          </p>
        </div>

        <button type="button" className="invoices-page__button">
          + New Invoice
        </button>
      </div>

      <div className="invoices-page__summary">
        <div className="invoices-page__summary-card">
          <span>Total value</span>
          <strong>${totalValue.toLocaleString()}</strong>
        </div>

        <div className="invoices-page__summary-card">
          <span>Paid</span>
          <strong>${paidValue.toLocaleString()}</strong>
        </div>

        <div className="invoices-page__summary-card">
          <span>Pending</span>
          <strong>{pendingInvoices.length}</strong>
        </div>

        <div className="invoices-page__summary-card">
          <span>Overdue</span>
          <strong>{overdueInvoices.length}</strong>
        </div>
      </div>

      <div className="invoices-page__filters">
        <div className="invoices-page__search">
          <label htmlFor="invoice-search">Search invoices</label>

          <input
            id="invoice-search"
            type="text"
            placeholder="Search by invoice or client..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="invoices-page__status">
          <label htmlFor="invoice-status">Status</label>

          <select
            id="invoice-status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="All">All statuses</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>

        <span className="invoices-page__count">
          {filteredInvoices.length}{" "}
          {filteredInvoices.length === 1 ? "invoice" : "invoices"}
        </span>
      </div>

      <div className="invoices-page__table">
        <div className="invoices-page__table-header">
          <span>Invoice</span>
          <span>Issue date</span>
          <span>Due date</span>
          <span>Amount</span>
          <span>Status</span>
          <span />
        </div>

        {filteredInvoices.length > 0 ? (
          filteredInvoices.map((invoice) => (
            <InvoiceRow key={invoice.id} invoice={invoice} />
          ))
        ) : (
          <div className="invoices-page__empty">
            <h2>No invoices found</h2>
            <p>Try changing your search or status filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Invoices;
