import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";
import Search from "./Search";
import "./TodoApp.css";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)));
    setEditingTodo(null);
  };

  const filteredTodos = todos.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <h1 className="heading">ToDoList</h1>

        <Search value={search} onChange={setSearch} />
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={filteredTodos}
          onDelete={deleteTodo}
          onEdit={setEditingTodo}
        />

        {editingTodo && (
          <TodoModal
            todo={editingTodo}
            onSave={updateTodo}
            onClose={() => setEditingTodo(null)}
          />
        )}
      </div>
    </>
  );
}
