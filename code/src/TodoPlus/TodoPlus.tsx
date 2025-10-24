import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import type { TodoType } from "./Todo.Types";
import Swal from "sweetalert2";

const TodoPlus = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const addTodo = (title: string): boolean => {
    setTodo([
      ...todo,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);
    return true;
  };

  const deleteTodo = (id: string): boolean => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        setTodo(todo.filter((item) => item.id !== id));
      }
    });
    return true;
  };

  const toggleTodo = (id: string): boolean => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    return true;
  };
  return (
    <>
      <div className="container">
        <div className="todo-box">
          <h1 className="title">Todo List ❤️</h1>
          <TodoForm addTodo={addTodo} />
          {todo.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TodoPlus;
