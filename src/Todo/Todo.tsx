import { useState, useEffect } from 'react';
import { NewTodoState } from '../types';
import Form from '../components/Form';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import Header from '../components/Header';

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
			<main className="bg-light-gray h-screen">
				<div className="">
					<Form addTodo={addTodo} />
					<TodoList
						items={items}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
						filter={filter}
						updateLocalItem={updateLocalItem}
					/>
					<div>
						<span>{itemsLeft()} items left</span>
						<button onClick={clearCompleted}>Clear completed</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Todo;
