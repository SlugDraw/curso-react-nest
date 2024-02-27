const FilterTodo = ({ changeFilter, filter }) => {
  const clase = (fil) => {
    return fil === filter
      ? "text-blue-500 hover:text-gray-400"
      : "text-gray-400 hover:text-blue-500";
  };

  return (
    <section className="mx-auto mt-8 ">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4">
        <button className={clase("all")} onClick={() => changeFilter("all")}>
          All
        </button>
        <button
          className={clase("active")}
          onClick={() => changeFilter("active")}
        >
          Active
        </button>
        <button
          className={clase("completed")}
          onClick={() => changeFilter("completed")}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default FilterTodo;
