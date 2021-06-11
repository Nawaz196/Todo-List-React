import React from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="todo-app" style={{textAlign : "center"}}>
      <Todolist/>
    </div>
  );
}

export default App;
