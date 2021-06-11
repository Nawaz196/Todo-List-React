import React,{useState} from 'react';
import Todo from './Todo';
import Todoform from './Todoform';


function Todolist() {

const [todos,setTodos] = useState([]);

const addTodo = todo=>{
    if(!todo.text)return;

    const newTodos = [todo,...todos];
    setTodos(newTodos);
    console.log(...todos);
};

const updateTodo = (todoId,newValue)=>{
    if(!newValue.text)return;

    setTodos(prev=>prev.map(item=>(item.id===todoId ? newValue : item)));

};

const removoTodo = id=>{
    const removedArr = [...todos].filter(todo=>todo.id !==id);

    setTodos(removedArr);
};

const completeTodo=id=>{
    let updatedTodo = todos.map(todo=>{
        if(todo.id === id)
        {
            todo.isComplete = !todo.isComplete;
        }
        return todo;
    })

    setTodos(updatedTodo);
}

    return (
        <>
            <h1>MY LIST</h1>
            <Todoform onSubmit={addTodo}/>
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removoTodo={removoTodo}
                updateTodo={updateTodo}
            />
        </>
    )
}

export default Todolist