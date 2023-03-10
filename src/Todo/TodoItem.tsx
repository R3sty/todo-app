import { useEffect, useState } from 'react';
import { TodoListRender } from '../types';
import { Draggable } from 'react-beautiful-dnd';
import check from '../assets/icon-check.svg';
import moon from '../assets/icon-moon.svg';

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
					<div className="flex justify-center items-center text-light-darkGrayishBlue1 text-s">
						<li
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							id={id}
							key={id}
							index={index}
							className="w-[327px] h-[48px] bg-white border border-light-gray rounded-md justify-between"
						>
							<div className="flex justify-between items-center h-full">
								<div
									className="cursor-pointer flex items-center justify-center"
									onClick={updateItemStatus(id)}
									aria-label="check button"
								>
									<div className="flex items-center justify-center rounded-full h-[24px] w-[25px] border mx-4">
										{completed ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="rounded-full h-[22px] w-[22px]"
												viewBox="0 0 11 9"
											>
												<linearGradient
													id="gradient"
													x1="0"
													y1="0"
													x2="1"
													y2="1"
												>
													<stop offset="0%" stopColor="#57ddff" />
													<stop offset="100%" stopColor="#c058f3" />
												</linearGradient>
												<rect
													width="100%"
													height="100%"
													fill="url(#gradient)"
												/>
												<path
													fill="none"
													stroke="#FFF"
													strokeWidth="2"
													d="M1 4.304L3.696 7l6-6"
												/>
											</svg>
										) : (
											<div className="inline-block rounded-full h-[22px] w-[22px] border-light-gray"></div>
										)}
									</div>
									<span>{todo}</span>
								</div>

								<div className="flex justify-end">
									<button onClick={() => deleteTodo(id)} className="mr-6">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
											<path
												fill="#494C6B"
												fillRule="evenodd"
												d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
											/>
										</svg>
									</button>
								</div>
							</div>
						</li>
					</div>
				);
			}}
		</Draggable>
	);
};

export default TodoItem;
