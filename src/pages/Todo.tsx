import { useState, useEffect } from "react";
import { TodoList } from "../types";
import TodoForm from "../components/TodoForm"
import { v4 as uuidv4 } from "uuid";

const Todo: React.FC<TodoList> = ({
    id,
    todo,
    completed, 
    updateTodo,
    deleteTodo
}) => {
    const [todos, setTodos] = useState<TodoList[]>([]);
    const [isCompleted, setIsCompleted] = useState(false)
    //load todos from local storage when component is mounted
    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos)
        {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    // Store updated todos in local storage when todos state changes
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log("Todos:", todos)
    }, [todos]);

    const handleAddTodo = (todo: string) => {
        const newTodo: TodoList = {
            id: uuidv4(),
            todo,
            completed: false,
        }
        setTodos([...todos, newTodo]);
    }

    const toggleComplete = (id: number) => (event: React.MouseEvent) => {
            updateTodo(id)
            setIsCompleted(!isCompleted);
        event?.preventDefault()
    }


        
    

    const handleTodoDelete = (id: number) => {
        console.log("delete todo works!")
    }

    return (
        <main>
            <div className="">
                <div>To do List</div>
                <TodoForm onAddTodo={handleAddTodo} />
                <ul className="border-2">
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-dark-darkBlue1"
                                checked={todo.completed}
                                onChange={() => toggleComplete(todo.id)}
                            />
                            <span className={todo.completed ? "text-dark-darkBlue1" : "text-red"}>{todo.todo}</span>
                            <button
                                className="text-dark-darkGrayishBlue2 px-10"
                                onClick={() => handleTodoDelete(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
};

export default Todo;