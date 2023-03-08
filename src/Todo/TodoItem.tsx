import { useEffect, useState } from 'react';
import { TodoListRender } from '../types';
import { Draggable } from 'react-beautiful-dnd';

const TodoItem: React.FC<TodoListRender> = ({
	id,
	todo,
	completed,
	index,
	deleteTodo,
	updateTodo,
}) => {
	const [isCompleted, setIsCompleted] = useState(false);

	const updateItemStatus = (id: number) => {
		return (event: React.MouseEvent) => {
			updateTodo(id);
			setIsCompleted(!isCompleted);
			console.log('completed:', completed);
			event.preventDefault();
		};
	};

	useEffect(() => {
		setIsCompleted(completed);
	}, [completed]);

	return (
		<Draggable key={id} draggableId={id.toString()} index={index}>
			{(provided: any) => {
				return (
					<li
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						id={id}
						key={id}
						index={index}
						className=""
					>
						<div>
							<input type="checkbox" onClick={updateItemStatus(id)}></input>
						</div>
						<span>{todo}</span>
						<button className="bg-red" onClick={() => deleteTodo(id)}>
							Delete Todo
						</button>
					</li>
				);
			}}
		</Draggable>
	);
};

export default TodoItem;
