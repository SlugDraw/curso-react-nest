import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import ListTodo from "./components/ListTodo";
import ComputedTodo from "./components/ComputedTodo";
import FilterTodo from "./components/FilterTodo";

import Header from "./components/Header";

const initialStateTodo = [
  { id: 1, title: "Tarea 1", completed: true },
  { id: 2, title: "Tarea 2", completed: false },
  { id: 3, title: "Tarea 3", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodo);
  const [filter, setFilter] = useState("all");

  const todoCreate = (title) => {
    const id = new Date().getTime();
    const newTodo = {
      id,
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const countTodo = todos.filter((todo) => !todo.completed).length;

  const clearTodo = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filterTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const changeFilter = (filter) => setFilter(filter);

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/img/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <CreateTodo todoCreate={todoCreate} deleteTodo={deleteTodo} />
        <ListTodo
          todos={filterTodos()}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
        <ComputedTodo countTodo={countTodo} clearTodo={clearTodo} />
        <FilterTodo changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="m-8 text-center text-gray-600">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};
export default App;
