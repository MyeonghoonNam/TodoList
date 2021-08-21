export default function ToDoCount({ target, initialState }) {
  const toDoCountBox = document.createElement('div');

  target.appendChild(toDoCountBox);

  this.state = initialState;

  this.setState = (updateState) => {};

  this.render = () => {
    calculateToDoCount();
    // const [completedToDoCount, totalToDoCount] = calculateToDoCount();
  };

  const calculateToDoCount = () => {
    console.log(this.state);
  };

  this.render();
}
