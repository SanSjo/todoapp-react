import React, { useState } from 'react';

export const Todo = ({ todo, index, completeTodo, deleteTodo}) => {
  const [toggleState, setToggleState] = useState(false);

  function toggleIsComplete() {
    setToggleState(!toggleState)
  }

 
 
    return(
      <div style={{backgroundColor: 'white', marginTop: 30, padding: 10, width: '100%', display: 'flex', justifyContent: 'space-between'}}>
      <div onClick={toggleIsComplete}
      className="todo"
      style={{color: 'black', textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {toggleState ? <span style={{textDecoration: "line-through", background: 'orange'}}>{todo.text}</span> : <span style={{textDecoration: 'none'}}>{todo.text}</span>}
      
    </div>
      <div>
        <button style={{marginLeft: 20, }} onClick={() => deleteTodo(index)}>Delete</button>
      </div>
      </div>
    )
  }