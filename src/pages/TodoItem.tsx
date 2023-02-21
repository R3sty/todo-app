import { useState, useEffect } from "react";
import { TodoListRender } from "../types";

const TodoItem: React.FC<TodoListRender> = ({
    id,
    todo,
    completed,
    index,
    deleteItem,
    updateItem,
}) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const updateItemStatus = (id: number) => {
        return (event: React.MouseEvent) => {
            updateItem(id);
            setIsCompleted(!isCompleted);
            event.preventDefault();
        }
    }

    useEffect(() => {
        setIsCompleted(completed)
    }, [completed]);

    return (
        <div>
            <li>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onClick={updateItemStatus(id)} />
                <span>{todo}</span>
                <button onClick={() => deleteItem(id)}>Delete</button>
            </li>
        </div>
    )
};

export default TodoItem;