import React from 'react'

export const TaskSearch = (props) => {
    return (
        <div>
            <input placeholder="Buscar Tarea" value={props.searchValue} onChange={props.onChange}/>
        </div>
    )
}
