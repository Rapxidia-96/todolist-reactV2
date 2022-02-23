import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
function TodoForm() {
    const [newTodoValue, setnewTodoValue] = React.useState('');
    const{
        addTodo,
        setOpenModal,
    }=React.useContext(TodoContext);
    const onCancel=()=>{
        setOpenModal(false);
    }
    const onSubmit=(event)=>{
        // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onChange=(event)=>{
        setnewTodoValue(
            event.target.value
        );
    }
    return(
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo To Do</label>
            <textarea
                value = {newTodoValue}
                onChange = {onChange}
                placeholder = "Escribe una nueva tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick = {onCancel}
                >
                Cancelar
                </button>

                <button
                className="TodoForm-button TodoForm-button-add"
                type= "submit"
                >
                Añadir
                </button>
            </div>
        </form>
    );
}
export { TodoForm };