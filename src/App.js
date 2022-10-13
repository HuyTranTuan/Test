import React, {useState} from "react"
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import TodoListContainer from './component/TodoApp/TodoListContainer';
import TodoSth from './component/TodoSth/TodoSth';
import "./App.css";
import Dashboard from "./component/dashboard/Dashboard";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: true
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu() {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }


  render(){
    return (
      <div id="container">
        <Sidebar
          isMenuOpen={this.state.isMenuOpen}
          onMenuToggle={this.toggleMenu}
        />
        <div className={`right-container${this.state.isMenuOpen === true ? ' open' : ''}`}>
          <Header onMenuToggle={this.toggleMenu}/>
          <div className="main-content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/todo-app" element={<TodoListContainer />} />
              <Route path="/todo-sth" element={<TodoSth />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

