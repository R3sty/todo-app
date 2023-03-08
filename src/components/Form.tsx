import { useRef } from 'react';
import { NewTodoState, NewTodoProps } from '../types';

const Form: React.FC<NewTodoProps> = ({ addTodo }) => {
	const inputTodoText = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		const textInput = inputTodoText.current!.value;

		const newTodos: NewTodoState = {
			id: Math.floor(Math.random() * Date.now()),
			todo: textInput,
			completed: false,
		};
		//check if the textInput variable is falsy (i.e., undefined, null, empty string, or 0). If textInput is falsy, the function returns without doing anything.
		if (!textInput) return;

		addTodo(newTodos);
		//clear input field
		inputTodoText.current!.value = '';
	};

	return (
		<form onSubmit={handleSubmit} className="">
			<div>
				<button type="submit"></button>
				<input
					placeholder="Create a new todo..."
					id="todos"
					type="text"
					ref={inputTodoText}
				/>
			</div>
		</form>
	);
};

export default Form;
