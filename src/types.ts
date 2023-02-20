export interface Todo {
    id: number
    todo: string
    completed: boolean
}

export interface TodoFormProps {
    onAddTodo: (todo: string) => void;
}