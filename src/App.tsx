import { useEffect, useState } from "react";
import Header from "./components/Header"
import TodoList from "./Todo/TodoList"
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  return (
    <div className="">
      <Header />
      <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
