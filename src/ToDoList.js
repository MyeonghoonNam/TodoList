export default function ToDoList({ target, initialState }) {
  const toDoList = document.createElement('div');

  target.appendChild(toDoList);

  this.state = initialState;

  this.setState = (updateState) => {
    this.state = updateState;
    this.render();
  };

  this.render = () => {
    toDoList.innerHTML = `
      <ul>
        ${this.state.map(({ task }) => `<li>${task}</li>`).join('')}
      </ul>
    `;
  };

  this.render();
}
