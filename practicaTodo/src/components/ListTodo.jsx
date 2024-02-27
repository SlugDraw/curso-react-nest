import ItemTodo from "./ItemTodo";

const ListTodo = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
      {todos.map((todo) => (
        <ItemTodo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default ListTodo;
