import React from 'react'

export const TaskItem = (props) => {
    return (
        <li>
            <input type="checkbox" 
                id={props.id}                 
                checked={props.completed} 
                onChange={props.onChangeCompleted}
            />
            <label> {props.id} {props.name}</label> 
            <button id={props.id} onClick={props.onClickEdit} >Edit</button>
            <button id={props.id} onClick={props.onClickDelete}>Delete</button> 
        </li>
        
    )
}
