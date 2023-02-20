import { useState, useEffect } from "react";
import { Todo } from "../types";
import  TodoForm  from "../components/TodoForm"

const Todo: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    //load todos from local storage when component is mounted
    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      }, []);

    // Store updated todos in local storage when todos state changes
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log('stored in local storage???:', todos);
    }, [todos]);

    const handleAddTodo = (todo: string) => {
        const newTodo: Todo = {
            id: Math.random(),
            todo,
            completed: false,
        }
        setTodos([...todos, newTodo]);
        console.log("Todos-->", todos)
        
    }

    return (
        <main>
            <div className="">
                <div>To do List</div>
                <TodoForm onAddTodo={handleAddTodo} />
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => { }} />
                            <span>{todo.todo}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
};

export default Todo;