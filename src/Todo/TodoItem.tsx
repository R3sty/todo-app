import { useState } from "react";
import { Todo } from "../types";

interface TodoItemProps {
    todo: Todo;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleDeleteTodo = () => {
        deleteTodo(todo.id)
    };

    const handleToggleTodo = (id:number) => {
        setTodos(prevTodos => prevTodos.map(todo => {
           
            if (todo.id == id)
            {
                return {
                    ...todo,
                    completed:!todo.completed
                }
            }
            return todo;
            
        }))
    }

    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={() => {
                handleToggleTodo(todo.id);
                console.log("Completed:", todo.completed);
  }} />
            {todo.text}
            <button className="bg-red" onClick={handleDeleteTodo}>Delete Todo</button>
        </li>
    )
};

export default TodoItem;