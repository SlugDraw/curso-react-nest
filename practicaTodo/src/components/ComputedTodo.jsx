const ComputedTodo = ({ countTodo, clearTodo }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white px-4 py-4">
      <span className="text-gray-400">{countTodo} Items left</span>
      <button className="text-gray-400" onClick={clearTodo}>
        Clear Completed
      </button>
    </section>
  );
};
export default ComputedTodo;
