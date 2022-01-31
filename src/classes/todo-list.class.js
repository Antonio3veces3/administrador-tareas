import { Todo } from "./todo.class";

export class TodoList {
    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }
    
    eliminarTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    }
    
    marcarCompletado( id)  {
        for( const todo of this.todos){
            
            if( todo.id == id ){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }
    
    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
    }

    countPendientes(){
        let count=0;
        for(let todo of this.todos){
            if(todo.completado === false){
                count++;
            }
        }
        return count; 
    }
    
    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo'))
        ? JSON.parse(localStorage.getItem('todo'))
        : [];

        this.todos = this.todos.map( obj => Todo.fromJSON( obj ));
        //Se puede reducir esa instruccion a lo siguiente... debido a que en la función callback solo se trabaja un argumento
        
        //this.todos = this.todos.map(Todo.fromJSON);
        
    }
}