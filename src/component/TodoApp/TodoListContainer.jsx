import React, { Component } from 'react';
import "./Todo.css"
import InputField from '../input/InputField';
import ButtonCustom from '../button/ButtonCustom';

export default class TodoListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      toDoList: [],
      input:"",
      color: 'red'
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.changeColor = this.changeColor.bind(this);
  }
  handleChange = (e) => {
    this.setState({input: e.target.value});
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <>
        <div className='inputTodo'>
          <InputField 
            placeholder="Enter todo ..."
            allowClear="X"
            status={!this.state.input ? "ok": "error"}
            onChange={ this.handleChange }
          ></InputField>
          <ButtonCustom type="primary" name="Add" onClick={this.changeColor}></ButtonCustom>
        </div>
      </>
    )
  }
}
