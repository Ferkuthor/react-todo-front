import React from 'react'
import {TaskItem} from './TaskItem'
import {TaskContext} from '../../contexts/AppProvider'

export const TaskContainer = (props) => {

    const {taskSearchList, onChangeCompleted, onClickDelete, onClickEdit} = React.useContext(TaskContext);
    
    return (
        <ul>
            {
            taskSearchList.map((taskItem,index)=>(            
                <TaskItem 
                    key={index} 
                    id={taskItem.id} 
                    name={taskItem.name} 
                    completed={taskItem.completed} 
                    onChangeCompleted={onChangeCompleted}
                    onClickDelete={onClickDelete}
                    onClickEdit={onClickEdit}
                />
            ))
            }
        </ul>
    )
}
