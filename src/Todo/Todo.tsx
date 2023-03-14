import { useState, useEffect } from 'react';
import { NewTodoState } from '../types';
import Form from '../components/Form';
import TodoList from './TodoList';
import Header from '../components/Header';
import { buttons } from './helper';

const getData = () => JSON.parse(localStorage.getItem('todos') || '');
const setData = (key: string, value: any[]) =>
	localStorage.setItem(key, JSON.stringify(value));

const Todo: React.FC = () => {
	// const [newTodo, setNewTodo] = useState('');
	const myTodo = localStorage.getItem('todos') ? getData() : [];
	const [filter, setFilter] = useState('all');
	const [items, setItems] = useState<NewTodoState[]>(myTodo);
	const [theme, setTheme] = useState<'light' | 'dark'>('light');
	const [isMobile, setIsMobile] = useState(false);

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
		<div>
			<Header
				theme={theme}
				isMobile={isMobile}
				setIsMobile={setIsMobile}
				setTheme={setTheme}
			/>
			<main className="h-screen flex justify-center fixed top-[104px] left-[30px] desktop:w-full desktop:flex desktop:justify-center desktop:top-[104px] desktop:left-[-20px]">
				<div>
					<Form addTodo={addTodo} />
					<TodoList
						items={items}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
						filter={filter}
						updateLocalItem={updateLocalItem}
					/>
					<div className="w-[327px] h-[48px] desktop:w-[540px] desktop:h-[64px] bg-white border border-light-gray rounded-b-md dark:bg-dark-desaturatedBlue dark:border-dark-darkGrayishBlue3">
						<div className="flex flex-row justify-between items-center h-full text-xs dark:text-white px-6 shadow-lg">
							<span className="rounded-l-md">{itemsLeft()} items left</span>
							<ul className="hidden desktop:flex flex-row justify-evenly items-center h-full text-s text-light-grayishBlue3">
								{buttons.map((list) => (
									<li className="text-s" key={list.id}>
										<button
											className="capitalize px-4 hover:text-'#3A7CFD'"
											onClick={() => setFilter(`${list.name}`)}
										>
											{list.name}
										</button>
									</li>
								))}
							</ul>
							<button className="rounded-r-md" onClick={clearCompleted}>
								Clear completed
							</button>
						</div>
					</div>

					<div className="desktop:hidden  w-[327px] h-[48px] desktop:w-[540px] desktop:h-[64px] bg-white border border-light-gray rounded-md justify-between mt-4 text-center">
						<ul className=" flex flex-row justify-evenly items-center h-full text-s text-light-grayishBlue3 ">
							{buttons.map((list) => (
								<li className="text-s " key={list.id}>
									<button
										className="capitalize hover:text-'#3A7CFD'"
										onClick={() => setFilter(`${list.name}`)}
									>
										{list.name}
									</button>
								</li>
							))}
						</ul>
					</div>
					<div className="text-light-darkGrayishBlue1 text-regular mt-20 text-center">
						<p>Drag and drop to reorder list</p>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Todo;
