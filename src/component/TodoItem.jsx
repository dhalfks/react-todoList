import React from "react";

function TodoItem(props){
    console.log("item function");
    console.log("item", props.item);
    console.log("function", props.onRemove);

    return (
        <div className="todoItem mx-auto mb-3 flex justify-between ">
            <div className="m-5 border-solid  border-cyan-400">{props.item}</div>
            <button className="m-3 w-20 h-10 bg-cyan-100" onClick={props.onRemove}>del</button>
        </div>
        
    )
}

export default TodoItem