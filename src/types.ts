export interface TodoList {
    id: number
    todo: string
    completed: boolean
    updateTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export interface TodoFormProps {
    onAddTodo: (todo: string) => void;
}