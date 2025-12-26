import { useState } from "react";
import { ReactComponent as AddIcon } from "../assets/icons/plus-circle.svg";
import "./TodoForm.css";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={submit}>
      <input
        placeholder="Новая задача..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="icon-btn">
        <AddIcon width={20} height={20} />
      </button>
    </form>
  );
}
