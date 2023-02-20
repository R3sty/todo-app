import React, { useRef, useState } from "react";
import { TodoFormProps } from "../types";

const TodoForm: React.FC<TodoFormProps> = ({onAddTodo}) => {
    const [todo, setTodo] = useState('');
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (todo.trim())
        {
            onAddTodo(todo);
            setTodo('')
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="border-2"
                type="text"
                value={todo}
                onChange={event => setTodo(event.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
};

export default TodoForm;