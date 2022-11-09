import React, {useState} from "react"
import Footer from "./component/Page/footer/Footer";
import Header from "./component/Page/header/Header";
import Sidebar from "./component/Page/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import TodoSth from './component/Page/TodoSth/TodoSth';
import Dashboard from "./component/Page/Dashboard/Dashboard";
import "./App.css";


const App = (props) =>{
  const [state, setState] = useState({
    isMenuOpen: true
  });
  function toggleMenu() {
    setState({isMenuOpen: !state.isMenuOpen})
  }
  
  return (
    <div id="container" className={`container${state.isMenuOpen === true ? ' open' : ''}`}>
      <Sidebar
        isMenuOpen={state.isMenuOpen}
        onMenuToggle={toggleMenu}
      />
      <div className={`right-container${state.isMenuOpen === true ? ' open' : ''}`}>
        <Header
          onMenuToggle={toggleMenu}
          isMenuOpen={state.isMenuOpen}
        />
        <div className={`main-content${state.isMenuOpen === true ? ' open' : ''}`}>
          <Routes>
            <Route path="/dashboard"element={<Dashboard />}/>
            <Route path="/todo-sth" element={<TodoSth />} />
          </Routes>
        </div>
        <Footer 
          onMenuToggle={toggleMenu}
          isMenuOpen={state.isMenuOpen}
        />
      </div>
    </div>
  );
}

export default App;

