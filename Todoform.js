import React, { useState, useEffect, useRef } from "react";

function Todoform(props) {
  const [name, setName] = useState("");

  const inputRef = useRef(null);

  // useEffect(() => {
  //     inputRef.current.focus();
  //   });

  const handlechange = (e) => {
    setName(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: name,
    });
    setName("");
  };

  const [selectedDate, setselectedDate] = useState(null);

  const handlesubmitDate = (f) => {
    setselectedDate(f);
    setselectedDate(null);
  };

  return (
    <div>
      <form onSubmit={handlesubmit} className="todo-form">
        {props.edit ? (
          <>
            <input
              placeholder="update the text"
              value={name}
              onChange={handlechange}
              name="text"
              className="todo-input-edit"
            />
            <button  className="todo-button-edit" type="submit">
              Update todo
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add a todo"
              value={name}
              onChange={handlechange}
              name="text"
              className="todo-input"
            />
            <button  className="todo-button" type="submit">
              Add todo
            </button>
            
          </>
        )}
      </form>

      
    </div>
  );
}

export default Todoform;
