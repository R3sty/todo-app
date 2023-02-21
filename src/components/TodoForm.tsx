import React, { useRef, useState } from "react";
import { TodoFormProps, NewTodoState } from "../types";

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
    const todoInput = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

    const enteredText = todoInput.current!.value;
    
        const newTodos: NewTodoState = {
            id: Math.floor(Math.random() * 10_000_000),
            todo: enteredText,
            completed: false,
        };
        
        if (!enteredText) return;
        
        onAddTodo(newTodos);
        
        todoInput.current!.value = "";
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="border-2"
                placeholder="Create a new to do"
                id="todos"
                type="text"
                ref={todoInput}
            />
        </form>
    )
};

export default TodoForm;