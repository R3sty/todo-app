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
		<div className="flex justify-center items-center font-josefin text-light-darkGrayishBlue1 text-s">
			<Draggable key={id} draggableId={id.toString()} index={index}>
				{(provided: any) => {
					return (
						<div className="">
							<li
								ref={provided.innerRef}
								{...provided.draggableProps}
								{...provided.dragHandleProps}
								id={id}
								key={id}
								index={index}
								className="w-[327px] h-[48px] bg-white border border-light-gray rounded-md justify-between "
							>
								<div>
									<input type="checkbox" onClick={updateItemStatus(id)}></input>
								</div>
								<span>{todo}</span>
								<button className="justify-end" onClick={() => deleteTodo(id)}>
									Delete
								</button>
							</li>
						</div>
					);
				}}
			</Draggable>
		</div>
	);
};

export default TodoItem;
