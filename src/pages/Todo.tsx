import { useState, useEffect } from "react";
import { NewTodoState, TodoList } from "../types";
import TodoForm from "../components/TodoForm"

const getData = () => JSON.parse(localStorage.getItem('todos') || '');
const setData = (key: string, value: any[]) => localStorage.setItem(key, JSON.stringify(value));

const Todo: React.FC = () => {
    const allTodo = localStorage.getItem('todos') ? getData() : [];
    const [items, setItems] = useState<NewTodoState[]>(allTodo);
     
    useEffect(() => {
        setData('todos', items)
    }, [items]);

    const onAddTodo = (value: NewTodoState) => {
        setItems(item => [...item, value])
    }

    const deleteItem = (id: number) => {
        if (allTodo)
        {
            setItems([...items].filter(item=> item.id !== id))
        }
    }

    const updateItem = (id: number) => {
        if (allTodo)
        {
            const todosData = [...items];
            const todosItem = todosData.find(todo => todo.id === id);

            if (todosItem)
            {
                todosItem.completed = !todosItem.completed
            }
            setItems(todosData)
        }
    }

    return (
        <main>
            <div className="">
                <div>To do List</div>
                <TodoForm
                    onAddTodo={onAddTodo} />
                <ul className="border-2">
            
                </ul>
            </div>
        </main>
    )
};

export default Todo;