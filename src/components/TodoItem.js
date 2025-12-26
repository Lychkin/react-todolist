import { ReactComponent as DeleteIcon } from "../assets/icons/trash.svg";
import { ReactComponent as EditIcon } from "../assets/icons/pencil-square.svg";
import "./TodoItem.css";

export default function TodoItem({ todo, onDelete, onEdit }) {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <div className="todo-item__icons">
        <button className="icon-btn" onClick={() => onEdit(todo)}>
          <EditIcon width={20} height={20} />
        </button>
        <button className="icon-btn" onClick={() => onDelete(todo.id)}>
          <DeleteIcon width={20} height={20} />
        </button>
      </div>
    </li>
  );
}
