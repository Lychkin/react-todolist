import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todos, onDelete, onEdit }) {
  if (!todos.length) {
    return <p className="empty">Задач нет</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
