export default function ToDoCount({ target, initialState }) {
  const toDoCountBox = document.createElement('div');

  target.appendChild(toDoCountBox);

  this.state = initialState;

  this.setState = (updateState) => {
    this.state = updateState;
    this.render();
  };

  this.render = () => {
    const [completedToDoCount, totalToDoCount] = calculateToDoCount();

    toDoCountBox.innerText = `
      CompletedToDoCount : ${completedToDoCount} / ${totalToDoCount}
    `;
  };

  const calculateToDoCount = () => {
    const totalToDoCount = this.state.length;
    const completedToDoCount = this.state.filter(
      ({ isCompleted }) => isCompleted
    ).length;

    return [completedToDoCount, totalToDoCount];
  };

  this.render();
}
