import { useEffect, useState } from "react";
import Header from "./components/Header"
import TodoList from "./Todo/TodoList"
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (updatedTodo: Todo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  return (
    <div className="">
      <Header />
      <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default App
