import React from 'react'

export const TaskCounter = (props) => {    
    return (
        <div>
            <p>Has completado {props.total} de {props.completed} tareas</p>
        </div>
    )
}

