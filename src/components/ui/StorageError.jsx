import "./StorageError.css";

function StorageError() {
  return (
    <div className="storage-error" role="alert">
      <div>
        <strong>Changes may not be saved</strong>

        <span>
          FlowDesk could not access browser storage. Your changes may be lost
          after refreshing the page.
        </span>
      </div>
    </div>
  );
}

export default StorageError;
