
import { useState } from 'react';
import './App.css';
import TodoBoard from './component/TodoBoard';

// todoList 만들기
// 1. input button 생성
// 2. input 값을 입력하고 버튼을 클릭하면 아이템이 추가
// 3. 아이템 삭제 버튼을 누르면 삭제가 가능.

function App() {
const [inputValue, setInputValue] = useState('')
const [todoList, setTodoList] = useState([])
const addItem = ()=>{
  console.log("addItem", inputValue)
  setTodoList(
    [...todoList, inputValue]
  )
  console.log("todoList", todoList)
}

const onRemove = (index) =>{
  console.log("remove>> ",index);
  setTodoList(todoList.filter((_, i)=>{
    return (i !== index);
  }));
};


  return (
    <div className="App">
      <input type='text'value={inputValue} onChange={(e)=>{
        setInputValue(e.target.value) 
      }}/>
      <button onClick={addItem}>add</button>

      <TodoBoard todoList={todoList} onRemove={onRemove}/>
    </div>
  );
}

export default App;
