export default function ToDoForm({ target, onSubmit }) {
  const toDoForm = document.createElement('form');

  target.appendChild(toDoForm);

  this.render = () => {
    toDoForm.innerHTML = `
      <input type="text" name="todo"></input>
      <button>+ New Task</button>
    `;

    toDoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const input = toDoForm.querySelector('input[name=todo]');
      const task = input.value;

      if (task.length > 1) {
        input.value = '';
        onSubmit(task);
      }
    });
  };

  this.render();
}
