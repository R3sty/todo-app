import TodoItem from './TodoItem';
import { TodoListRenderItem } from '../types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TodoList: React.FC<TodoListRenderItem> = ({
	items,
	deleteTodo,
	updateTodo,
	updateLocalItem,
	filter,
}) => {
	const rendered = (
		id: number,
		todo: string,
		completed: boolean,
		index: number
	) => {
		return (
			<TodoItem
				key={id}
				id={id}
				index={index}
				todo={todo}
				completed={completed}
				deleteTodo={deleteTodo}
				updateTodo={updateTodo}
			/>
		);
	};

	const todoList = items.map(({ id, todo, completed }, index) => {
		return rendered(id, todo, completed, index);
	});

	const activeList = items.map(({ id, todo, completed }, index) => {
		if (completed) return '';
		return rendered(id, todo, completed, index);
	});

	const completedList = items.map(({ id, todo, completed }, index) => {
		if (!completed) return '';
		return rendered(id, todo, completed, index);
	});

	const filteredList = () => {
		if (filter === 'active') return activeList;
		else if (filter === 'completed') return completedList;
		else return todoList;
	};

	const handleOnDragEnd = (result: any) => {
		if (!result.destination) return;
		const updatedList = Array.from(items);
		const [reorderedItem] = updatedList.splice(result.source.index, 1);
		updatedList.splice(result.destination.index, 0, reorderedItem);
		updateLocalItem(updatedList as any);
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId="droppable">
				{(provided: any) => {
					return (
						<ul
							className="droppable"
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							ref={provided.innerRef}
						>
							{filteredList()}
							{provided.placeholder}
						</ul>
					);
				}}
			</Droppable>
		</DragDropContext>
	);
};

export default TodoList;
