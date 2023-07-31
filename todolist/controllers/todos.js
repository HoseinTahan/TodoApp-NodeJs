const Todo = require("../model/todo");
const TodoUtills=require('../utils/todo');
exports.getIndex = (req, res) => {

    TodoUtills.getCompletedTodos((completeTodo)=>{
     TodoUtills.getRemainingTodos((remaining)=>{

        Todo.fetchAll((todos) => {
            res.render("index", {
                pageTitle: "کارهای روزمره",
                todos,
                completeTodo,
                remaining
            });

        });
    });
 });
};
