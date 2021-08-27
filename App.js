import Header from './src/Header.js';
import ToDoForm from './src/ToDoForm.js';
import ToDoList from './src/ToDoList.js';
import ToDoCount from './src/ToDoCount.js';
import { setItem } from './src/Storage.js';

export default function App({ target, initialState }) {
  try {
    if (!new.target) {
      throw new Error('경고 : App 컴포넌트를 new로 생성해주세요 !');
    }

    new Header({
      target,
      text: 'Simple ToDoList',
      icon: '<i class="fas fa-list-ul"></i>',
    });

    const todoList = new ToDoList({
      target,
      initialState,
      onToDo: (toDoItem) => {
        const { index } = toDoItem.dataset;
        const updateState = todoList.state;

        updateState[index].isCompleted = !updateState[index].isCompleted;

        todoList.setState(updateState);
        todoCount.setState(updateState);

        setItem('todos', JSON.stringify(updateState));
      },
      onRemove: (toDoItem) => {
        const { index } = toDoItem.dataset;
        const updateState = [...todoList.state];

        updateState.splice(index, 1);

        todoList.setState(updateState);
        todoCount.setState(updateState);

        setItem('todos', JSON.stringify(updateState));
      },
    });

    const todoCount = new ToDoCount({
      target,
      initialState,
    });

    new ToDoForm({
      target,
      onSubmit: (text) => {
        const updateState = [...todoList.state, { text, isCompleted: false }];

        todoList.setState(updateState);
        todoCount.setState(updateState);

        setItem('todos', JSON.stringify(updateState));
      },
    });
  } catch (e) {
    alert(e.message);
  }
}
