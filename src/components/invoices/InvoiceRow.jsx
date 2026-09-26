function InvoiceRow({ invoice }) {
  return (
    <article className="invoice-row">
      <div className="invoice-row__number">
        <strong>{invoice.id}</strong>
        <span>{invoice.client}</span>
      </div>

      <div className="invoice-row__date">
        <span>Issued</span>
        <strong>{invoice.issueDate}</strong>
      </div>

      <div className="invoice-row__date">
        <span>Due</span>
        <strong>{invoice.dueDate}</strong>
      </div>

      <div className="invoice-row__amount">
        <strong>{invoice.amount}</strong>
      </div>

      <span
        className={`invoice-row__status invoice-row__status--${invoice.status.toLowerCase()}`}
      >
        {invoice.status}
      </span>

      <button type="button" className="invoice-row__button">
        View
      </button>
    </article>
  );
}

export default InvoiceRow;
