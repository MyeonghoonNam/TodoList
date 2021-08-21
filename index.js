import { getItem } from './src/Storage.js';
import App from './App.js';

const target = document.querySelector('#app');
const initialState = getItem('todos', []);

new App({
  target,
  initialState,
});
