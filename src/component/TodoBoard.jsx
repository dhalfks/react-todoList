import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props){
     console.log(props.todoList);

    return (
        <div>
            <h1>Todo List!!!</h1>
           {
            props.todoList.map((item, index)=>{
                console.log("todoBoard in todoItem");
                console.log("todoItem", item);
                return(
                    <TodoItem key={index} item={item} onRemove={()=>props.onRemove(index)}/> 
                );
                
            })
           } 
        </div>
    )
}

export default TodoBoard