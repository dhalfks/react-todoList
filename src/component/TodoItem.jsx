import React from "react";

function TodoItem(props){
    console.log("item function");
    console.log("item", props.item);
    console.log("function", props.onRemove);

    return (
        <div className="todoItem">
            <div>{props.item}</div>
            <button onClick={props.onRemove}>del</button>
        </div>
        
    )
}

export default TodoItem