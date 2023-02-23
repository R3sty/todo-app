import { useState } from "react";
import { Todo } from "../types";

interface TodoItemProps {
    todo: Todo;
    deleteTodo: (id: number) => void;
    updateTodo: (updatedTodo: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, updateTodo }) => {
    const [completed, setCompleted] = useState<boolean>(todo.completed);

    const handleDeleteTodo = () => {
        deleteTodo(todo.id)
    };

    const handleToggleTodo = () => {
        const updatedTodo = { ...todo, completed: !todo.completed };
        updateTodo(updatedTodo);
        console.log("Completed?:", todo.completed)
    };

    return (
        <div className="w-[337px] h-[48px] border-light-grayishBlue1 border-2 bg-light-gray rounded-t-md">
            <li className="px-4 pt-2" >
                <input  type="checkbox" checked={todo.completed} onClick={handleToggleTodo} />
                <span className="px-4">{todo.text}</span>
                <button className="bg-red" onClick={handleDeleteTodo}>Delete Todo</button>
            </li>
        </div>
    )
};

export default TodoItem;