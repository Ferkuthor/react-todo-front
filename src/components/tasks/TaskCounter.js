import React from 'react'
import {TaskContext} from '../../contexts/AppProvider'

export const TaskCounter = (props) => {  

    const {taskTotal, taskCompleted } = React.useContext(TaskContext);
 
    return (
        <div>
            <h3>Has completado {taskCompleted} de {taskTotal} tareas</h3>
        </div>
    )
}

