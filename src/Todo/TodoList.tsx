import { useState } from "react";
import { Todo } from "../types";
import  TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, addTodo, deleteTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
    };

    const handleNewTodoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newTodo.trim())
        {
            addTodo({
                id: Date.now(),
                text: newTodo.trim(),
                completed: false
            })
            setNewTodo("")
        };
    }

    return (
        <div>
            <form onSubmit={handleNewTodoSubmit}>
                <input
                    className="border-2 border-y-dark-darkGrayishBlue2"
                    type="text"
                    value={newTodo}
                    onChange={handleNewTodoChange}
                    placeholder="Create a new todo..."
                />
            </form>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    )
};

export default TodoList;
