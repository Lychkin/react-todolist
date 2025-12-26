import "./Search.css";

export default function Search({ value, onChange }) {
  return (
    <input
      className="search"
      placeholder="Поиск задач..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
