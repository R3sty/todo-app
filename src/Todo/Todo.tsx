import { useState, useEffect } from 'react';
import { NewTodoState } from '../types';
import Form from '../components/Form';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import Header from '../components/Header';
import { buttons } from './helper';

const getData = () => JSON.parse(localStorage.getItem('todos') || '');
const setData = (key: string, value: any[]) =>
	localStorage.setItem(key, JSON.stringify(value));

const Todo: React.FC = () => {
	const [newTodo, setNewTodo] = useState('');
	const myTodo = localStorage.getItem('todos') ? getData() : [];
	const [filter, setFilter] = useState('all');
	const [items, setItems] = useState<NewTodoState[]>(myTodo);

	useEffect(() => {
		setData('todos', items);
	});

	const addTodo = (value: NewTodoState) => {
		setItems((item) => [...item, value]);
	};

	const deleteTodo = (id: number) => {
		if (myTodo) {
			setItems([...items].filter((item) => item.id !== id));
		}
	};

	const updateTodo = (id: number) => {
		if (myTodo) {
			const todosData = [...items];
			const todosItem = todosData.find((todo) => todo.id == id);

			if (todosItem) {
				todosItem.completed = !todosItem.completed;
			}
			setItems(todosData);
		}
	};

	const clearCompleted = () => {
		setItems([...items].filter((item) => !item.completed));
	};

	const updateLocalItem = (updated: []) => {
		setItems(updated);
	};

	const itemsLeft = () => {
		let completedItems: number;
		let totalLength = items.length;
		completedItems = items.filter((item) => item.completed).length;

		if (completedItems === 0 && filter === 'completed') {
			return completedItems;
		}
		return totalLength - completedItems;
	};

	return (
		<>
			<Header />

			<main className="h-screen flex flex-row justify-center absolute top-[104px] left-[30px]">
				<div className="">
					<Form addTodo={addTodo} />
					<TodoList
						items={items}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
						filter={filter}
						updateLocalItem={updateLocalItem}
					/>
					<div className="w-[327px] h-[48px] bg-white border border-light-gray justify-between rounded-b-md">
						<div className="flex flex-row justify-between items-center h-[48px] text-xs text-light-darkGrayishBlue2 shadow-md px-6">
							<span className="rounded-l-md">{itemsLeft()} items left</span>
							<button className="rounded-r-md" onClick={clearCompleted}>
								Clear completed
							</button>
						</div>
					</div>
					<div className="w-[327px] h-[48px] bg-white border border-light-gray rounded-md justify-between mt-4 text-center">
						<ul className="flex flex-row justify-evenly items-center h-full text-s text-light-grayishBlue3">
							{buttons.map((list) => (
								<li className="text-s " key={list.id}>
									<button
										className="capitalize"
										onClick={() => setFilter(`${list.name}`)}
									>
										{list.name}
									</button>
								</li>
							))}
						</ul>
						<div className="text-light-darkGrayishBlue1 text-regular mt-10">
							<p>Drag and drop to reorder list</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Todo;
