import React from 'react'

export const TaskCounter = (props) => {    
    return (
        <div>
            <p>Has completado {props.completed} de {props.total} tareas</p>
        </div>
    )
}

