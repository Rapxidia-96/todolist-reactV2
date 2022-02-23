import React, {useContext} from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';


function CreateTodoButton(props) {
 // usamos Todo context para tener las variables accecibles y que se actualicen en tiempo real
 // const { openModal, setOpenModal } = useContext(TodoContext)
  const onClickButton = ()=>{
    // prevState muestra el estado actual
    props.setOpenModal(prevState =>!prevState);
    // openModal ? setOpenModal(true) : setOpenModal(false)
    // if (!openModal) {
    //     setOpenModal(true);
    // } else {
    //   setOpenModal(false);      
    // }
}
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
