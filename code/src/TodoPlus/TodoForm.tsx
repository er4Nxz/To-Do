import { useState } from "react";

type TodoFormProps = {
  addTodo: (title: string) => boolean;
};
const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [value, setValue] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="What is the task today?"
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </form>
    </>
  );
};

export default TodoForm;
