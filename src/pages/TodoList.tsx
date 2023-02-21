import TodoItem from "./TodoItem";
import { NewTodoState, TodoListRenderItem } from "../types";

const TodoList: React.FC<TodoListRenderItem> = ({
    items,
    deleteItem, 
    updateItem,
    updateLocalItem,
    filter
}) => {
    const rendered = (
        id: number,
        todo: string,
        completed: boolean,
        index: number
    ) => {
        return (
            <div>TodoList</div>
        )
    }
}

export default TodoList;
