import React from 'react'
import {TaskContext} from '../../contexts/AppProvider'

export const Modal = () => {

    const {onClickTaskAdd, onClickTaskCancel} = React.useContext(TaskContext);

    return (
        <div>
            <input type="text" placeholder="Insertar tarea"/>
            <div>
                <button onClick={onClickTaskAdd} >Añadir</button>
                <button onClick={onClickTaskCancel} >Cancelar</button>
            </div>
        </div>
    )
}
