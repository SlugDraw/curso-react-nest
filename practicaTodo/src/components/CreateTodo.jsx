import { useState } from "react";

const CreateTodo = ({ todoCreate }) => {
  const [title, setTitle] = useState("");
  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("");
    }
    todoCreate(title.trim());
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        type="text"
        placeholder="Create a new Todo ..."
        className="w-full text-gray-400 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};
export default CreateTodo;
