import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

  const [todos, setTodos] = useState(initialState);

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = todo => {
    setTodos([...todos, todo ])
  }

  const deleteTodo = id => {
    const  newArray = todos.filter(todo => todo.id !== id);
    setTodos(newArray);
  }

  const updateTodo = id => {
    const otroArray = todos.map(todo => {

      todo.state = todo.id === id ? !todo.state : todo.state;      
      return todo;
      
    })
    setTodos(otroArray)
  }

  const orderTodo = arrayTodos =>{
    return arrayTodos.sort((a,b)=>{

      let retorno = a.priority===b.priority ? 0 : a.priority ? -1 : 1
      return retorno;

    });
  } 
  
  return (
    <>
      <h2 className="h2">Formulario Controlado</h2>
      <Formulario addTodo={addTodo}/>
      <Todos 
        todos={orderTodo(todos)} 
        deleteTodo={deleteTodo} 
        updateTodo={updateTodo}
      />
    </>
  );
}


export default App;