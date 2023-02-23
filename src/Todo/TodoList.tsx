import { useState } from "react";
import { Todo } from "../types";
import  TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    deleteTodo: (id: number) => void;
    updateTodo: (id: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, addTodo, deleteTodo, updateTodo }) => {
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
        <div className="flex flex-col items-center justify-center absolute z-50 top-[108px] left-[24px]">
            <form onSubmit={handleNewTodoSubmit} className="pb-4">
                <input
                    className="w-[337px] h-[48px] border-light-gray rounded-md"
                    type="text"
                    value={newTodo}
                    onChange={handleNewTodoChange}
                    placeholder="Create a new todo..."
                />
            </form>
            <ul >
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                ))}
            </ul>
        </div>
    )
};

export default TodoList;
