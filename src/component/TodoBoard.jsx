import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props){
     console.log(props.todoList);

    return (
        <div>
            <h1 className="text-3xl">Todo List!!!</h1>
            <div className="mt-10 ">
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
        </div>
    )
}

export default TodoBoard