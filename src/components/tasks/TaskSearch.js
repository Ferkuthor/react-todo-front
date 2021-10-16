import React from 'react'
import {TaskContext} from '../../contexts/AppProvider'

export const TaskSearch = (props) => {
    
    const {searchValue, onChangeSearchValue } = React.useContext(TaskContext);

    return (
        <div>
            <input placeholder="Buscar Tarea" value={searchValue} onChange={onChangeSearchValue}/>
        </div>
    )
}
