import { FaRegTrashAlt } from "react-icons/fa";
import type { TodoType } from "./Todo.Types";

type TodoItemProps = {
  item: TodoType;
  deleteTodo: (id: string) => boolean;
  toggleTodo: (id: string) => boolean;
};
const TodoItem = ({ item, deleteTodo, toggleTodo }: TodoItemProps) => {
  return (
    <ul className="todo-list">
      <li
        className={item.completed ? "completed" : "todo-item"}
        onClick={() => toggleTodo(item.id)}
      >
        {item?.title}
        <FaRegTrashAlt onClick={() => deleteTodo(item.id)} />
      </li>
    </ul>
  );
};

export default TodoItem;
