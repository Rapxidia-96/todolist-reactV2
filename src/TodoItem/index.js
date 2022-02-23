import React from 'react';
import './TodoItem.css';
import {IconCheck, IconCancel} from "../IconsComponets"

function TodoItem(props) {
  // const onComplete=()=>{
  //   alert('mensaje de tarea completa');
     // const [todosCompleded, setTodoscompleted] = React.useState();
  // }
  // const onDeleted=()=>{
  //   alert('mensaje de tarea borrada');
  // }
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
        onClick={props.onComplete}
      >
        <IconCheck/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"  
            onClick={props.onDelete}>
        <IconCancel/>
      </span>
    </li>
  );
}

export { TodoItem };
