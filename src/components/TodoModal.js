import { useState } from "react";
import "./TodoModal.css";

export default function TodoModal({ todo, onSave, onClose }) {
  const [text, setText] = useState(todo.text);

  const submit = (e) => {
    e.preventDefault();
    onSave({ ...todo, text });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3 className="modal-heading">Редактировать задачу</h3>
        <form onSubmit={submit}>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <div className="modal-actions">
            <button className="btn" type="submit">
              Сохранить
            </button>
            <button className="btn" type="button" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
