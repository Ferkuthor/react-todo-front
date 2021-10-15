import React from 'react'

export const TaskItem = (props) => {
    return (
        <li>
            <input type="checkbox" 
                id={props.id} 
                name={props.name} 
                value={props.completed} 
                checked={props.completed} 
                onChange={props.onChange}
            />
            <label> {props.id} {props.name}</label> 
            <button onClick={props.onClickEdit} >Edit</button>
            <button onClick={props.onClickDelete}>Delete</button> 
        </li>
        
    )
}

 /*      
       
        */