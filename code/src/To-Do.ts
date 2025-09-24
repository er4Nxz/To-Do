const todo_add = document.querySelector("#todo_add") as HTMLButtonElement;
const todo_value = document.querySelector("#todo_value") as HTMLInputElement;
const todo_remove = document.querySelector("#todo_remove") as HTMLDivElement;
const todo_list = document.querySelector("#todo_list") as HTMLUListElement;

interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

let todos: Todo[] = [];

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const loadTodos = () => {
  const stored = localStorage.getItem('todos');
  if (stored) {
    todos = JSON.parse(stored);
    todos.forEach(todo => addToDo(todo));
  }
};

const handleSubmit = (e: Event) => {
  e.preventDefault();
  const newTodo: Todo = {
    id: crypto.randomUUID(),
    title: todo_value.value,
    isDone: false,
  };
  todos.push(newTodo);
  addToDo(newTodo);
  saveTodos();
  todo_value.value = "";
  todo_value.focus();
};

const addToDo = (todo: Todo) => {
  todo_list.insertAdjacentHTML(
    "beforeend",
    `<li class="bg-blue-400 rounded-2xl p-3 m-2 flex flex-row justify-between">
      <p class="text-white m-2" id="text-${todo.id}">${todo.title}</p>
      <input type="checkbox" id="checkbox-${todo.id}" ${todo.isDone ? 'checked' : ''} />
    </li>`
  );
  const checkbox = document.querySelector(`#checkbox-${todo.id}`) as HTMLInputElement;
  const textElement = document.querySelector(`#text-${todo.id}`) as HTMLParagraphElement;
  if (todo.isDone) {
    textElement.classList.add('line-through');
  }
  checkbox.addEventListener('change', () => {
    const todoIndex = todos.findIndex(t => t.id === todo.id);
    if (todoIndex !== -1) {
      todos[todoIndex].isDone = checkbox.checked;
      if (checkbox.checked) {
        textElement.classList.add('line-through');
      } else {
        textElement.classList.remove('line-through');
      }
      saveTodos();
    }
  });
};

todo_add.addEventListener("click", (e) => handleSubmit(e));

todo_remove.addEventListener("click", () => {
  todo_list.innerHTML = "";
  todos = [];
  saveTodos();
});
-
loadTodos();
