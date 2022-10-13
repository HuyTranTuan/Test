import React from 'react';
import './Todo.css';
import ButtonCustom from '../button/ButtonCustom';

export default function ToDo(props) {
  function onEditBtnClick(){
    console.log("Edit");
  }

  function onRemoveBtnClick(){
    console.log('Remove');
  }

  return (
    <div style={{display: "flex"}}>
      <ButtonCustom type="primary" name="Edit"></ButtonCustom>
      <ButtonCustom type="error" name="Delete"></ButtonCustom>
    </div>
  )
}
