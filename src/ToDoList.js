export default function ToDoList({ target, initialState, onToDo, onRemove }) {
  const toDoList = document.createElement('div');
  let isInit = false;

  target.appendChild(toDoList);

  this.state = initialState;

  this.setState = (updateState) => {
    this.state = updateState;
    this.render();
  };

  this.render = () => {
    toDoList.innerHTML = makeList();

    toDoList.querySelector('ul').addEventListener('click', (e) => {
      const clickButton = e.target;
      const toDoItem = clickButton.closest('li');

      if (clickButton.className === 'toDoButton') {
        onToDo(toDoItem);
      } else {
        onRemove(toDoItem);
      }
    });
  };

  const makeList = () => {
    return `
      <ul>
        ${this.state
          .map(
            ({ task, isCompleted }, index) => `
              <li data-index=${index}>
                <span class="toDo${
                  isCompleted ? ' isCompleted' : ''
                }">${task}</span>
                <button class="toDoButton" type="button">ToDo</button>
                <button class="deleteButton" type="button">x</button>
              </li>             
            `
          )
          .join('')}
      </ul>
    `;
  };

  this.render();
}
