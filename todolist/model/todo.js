const todoUtils = require("../utils/todo");


class Todo {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

     save(callback) {

        todoUtils.getTodos((todos)=>{

        todos.push(this); 
        
        todoUtils.saveTodos(todos,(err)=>{
         callback(err);
        });
        });
    }

    static fetchAll(callback) {
        todoUtils.getTodos(todos=>{
         callback(todos);
        });
    }

    static deleteTodo(id,callback){
     todoUtils.getTodos(todos=>{

        const filterTodos=todos.filter(t=>t.id!=id);
        todoUtils.saveTodos(filterTodos,(err)=>{
          callback(err);
        });
     });

}
static setTodoCompleted(id,callback){

    todoUtils.getTodos(todos=>{
        const TodoIndex=todos.findIndex(t=>t.id==id);
        const todo=todos[TodoIndex];
        todo.completed=true;
        todos[TodoIndex]=todo;
        todoUtils.saveTodos(todos,(err)=>{
            callback(err);
        });
    }); 
    
}
}
module.exports = Todo;
