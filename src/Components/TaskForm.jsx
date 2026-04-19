import { useEffect, useRef } from "react";

function TaskForm({ inputValue, setInputValue, handleSubmit, isEditing }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Düzenleme modunda input'a odaklan
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <form onSubmit={handleSubmit} className="row g-2 align-items-center">
      <div className="col-12 col-md-9">
        <input
          ref={inputRef}
          type="text"
          className="form-control task-form-input"
          placeholder="Bir görev giriniz..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className="col-12 col-md-3 d-grid">
        <button
          type="submit"
          className={`btn ${isEditing ? "btn-warning" : "btn-primary"} task-form-button`}
        >
          {isEditing ? "Güncelle" : "Ekle"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;