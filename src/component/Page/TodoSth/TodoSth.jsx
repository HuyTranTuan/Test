import React, {useState, useEffect} from 'react';
import InputField from './InputField';
import BtnClick from './BtnClick';
import ListToDo from './ListToDo';

import './TodoSth.css';

const TodoSth = (props) => {
  const [array, setArray] = useState(!localStorage.getItem("todo") ? [] : JSON.parse(localStorage.getItem("todo"))); 
  const [value, setValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  // var storedArray = JSON.parse(localStorage.getItem("todo")); //get them back
  
  
  const onHandleChange = (e) => {
    setValue(e.target.value);
    if(e.target.value){
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }
  
  const onClickEdit = (id, value) =>{
    const cloneTodoList = [...array];
    cloneTodoList[id] = value;
    setArray([...cloneTodoList]);
  }

  const onClickDelete = (id) =>{
    const cloneTodoList = [...array];
    cloneTodoList.splice(id, 1)
    setArray([...cloneTodoList]);
  }
  
  const onClickBtn = () =>{
    setArray([...array, value]);
    setValue('');

  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(array)); //store todo
    return () => {
    };
  }, [array]);
  
  return (
    <div className='todo'>
      <h1>Todo List</h1>
      <div className='todo-input'>
        <InputField
          value={value}
          onChange={(e) => onHandleChange(e)}
        />
        <BtnClick
          type='danger'
          disabled={isEmpty}
          onClick={onClickBtn}
          text='Add'
        />
      </div>
      <div className='todo-array'>
        <ListToDo 
          array={array} 
          ulClass={'todo-array-container'} 
          ilClass={'todo-array-element'}
          clickEdit={onClickEdit}
          clickDelete={onClickDelete}
        />
      </div>
    </div>
  );
}

export default TodoSth;
