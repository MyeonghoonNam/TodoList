import Header from './src/Header.js';
import ToDoList from './src/ToDoList.js';
import ToDoForm from './src/ToDoForm.js';
import { setItem } from './src/Storage.js';

export default function App({ target, initialState }) {
  try {
    new Header({
      target,
      text: 'Simple ToDoList !',
      icon: '<i class="fas fa-list-ul"></i>',
    });

    const toDoList = new ToDoList({
      target,
      initialState,
    });

    new ToDoForm({
      target,
      onSubmit: (task) => {
        const updateState = [...toDoList.state, { task }];

        toDoList.setState(updateState);

        setItem('todos', JSON.stringify(updateState));
      },
    });
  } catch (e) {
    alert(e.message);
  }
}
