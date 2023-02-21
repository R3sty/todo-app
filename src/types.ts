export interface TodoList {
    id: number
    todo: string
    completed: boolean
}

export interface NewTodoState {
    id: number
    todo: string
    completed: boolean
}
export interface TodoFormProps {
    onAddTodo: (value: NewTodoState) => void;
}

export interface TodoListRender {
    id: number
    todo: string
    completed: boolean
    index: number
    updateItem: (id: number) => void;
    deleteItem: (id: number) => void;
}

export interface TodoListRenderItem {
    items: NewTodoState[];
    updateItem: (id: number) => void;
    deleteItem: (id: number) => void;
    updateLocalItem: (data: any) => void;
    filter: string
}