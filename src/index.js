import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml, countPendientes } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml(todo) );
//todoList.todos.forEach( crearTodoHtml ); Se puede llamar solamente el metodo porque solo enviamos un solo argumento que es el todo
