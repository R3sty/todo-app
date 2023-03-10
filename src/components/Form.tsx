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
		<div className="pb-4">
			<form onSubmit={handleSubmit}>
				<div className="h-full flex justify-center">
					<input
						className="w-[327px] h-[48px] desktop:w-[540px] desktop:h-[64px] bg-white rounded-md text-regular text-light-bluishGray1 pl-4 dark:text-dark-lightGrayishBlue dark:bg-dark-desaturatedBlue"
						placeholder="Create a new todo..."
						id="todos"
						type="text"
						ref={inputTodoText}
					/>
				</div>
			</form>
		</div>
	);
};

export default Form;
