import React, {useState} from 'react';
import Todoform from './Todoform';


function Todo({todos, completeTodo,removoTodo,updateTodo}) {

    const [edit,setEdit] = useState({
        id : null,
        value : ''
    })  

    
    const submitUpdate=value=>{
        updateTodo(edit.id,value);
        setEdit({
            id : null,
            value : ''
        })
    }

    if(edit.id){
        return <Todoform edit={edit} onSubmit={submitUpdate}/>;
    }



    return todos.map((todo,index)=>(
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>

            <div key={todo.id} onCLick={()=> completeTodo(todo.id)}>
                {todo.text}
            </div>

            <button variant="dark"
                onClick={()=> removoTodo(todo.id)}
                className='delete'
            >Delete</button>

            <button variant="dark"
                onClick={()=>setEdit({id:todo.id,value:todo.text})}
                className="edit">
            Edit</button>   
 
        </div>
    ))

};

export default Todo;
