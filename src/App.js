
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
  // 입력후 텍스트 비우기, 포커스 맞추기
  setInputValue("");
  document.getElementById('todoListItemBox').focus();
  
}

const onRemove = (index) =>{
  console.log("remove>> ",index);
  setTodoList(todoList.filter((_, i)=>{
    return (i !== index);
  }));
};


  return (
    <div className="App m-10 border-solid-cyan-400">
      <input id="todoListItemBox" className="h-10 w-80 p-5 border-solid border-2 border-indigo-600 rounded outline-none" type='text' border-solid-cyan-400 value={inputValue} onChange={(e)=>{
        setInputValue(e.target.value) 
      }}/>
      <button className='m-5 w-20 h-10 bg-cyan-100' onClick={addItem}>add</button>

      <TodoBoard todoList={todoList} onRemove={onRemove}/>
    </div>
  );
}

export default App;
