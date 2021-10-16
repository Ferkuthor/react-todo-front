import React from 'react'
import {TaskContext} from '../../contexts/AppProvider'

export const TaskCreate = (props) => {

    const {onClickTaskCreate} = React.useContext(TaskContext);
    
    return (
        <div>
            <button onClick={onClickTaskCreate}> Crear Tarea </button>
        </div>
    )
}
