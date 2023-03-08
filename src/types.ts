export const initialState = [
    {
        id: '',
        todo: '',
        completed: false
    }
]

export interface TodoListRender {
    id: number
    todo: string
    completed: boolean
    index: number 
    updateTodo: (id:number) => void
    deleteTodo: (id:number) => void
}

export interface TodoListRenderItem {
    items: NewTodoState[];
    updateTodo: (id: number) => void
    deleteTodo: (id: number) => void
    updateLocalItem: (data: any) => void
    filter: string
}
export interface NewTodoState {
    id: number
    todo: string
    completed: boolean
}

export type NewTodoProps = {
    addTodo: (value: NewTodoState) => void
}