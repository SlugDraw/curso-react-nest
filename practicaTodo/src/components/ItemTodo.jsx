import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";

const ItemTodo = ({ todo, deleteTodo, updateTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="boreder-b flex gap-4 border-b-gray-400">
      <button
        className={`h-5 w-5 flex-none rounded-full border-2 ${completed ? "grid place-items-center border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block"}`}
        onClick={() => updateTodo(id)}
      >
        {completed && <CheckIcon />}
      </button>
      <p
        className={`grow text-gray-600 ${completed && "line-through"} text-transform: capitalize`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => deleteTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default ItemTodo;
