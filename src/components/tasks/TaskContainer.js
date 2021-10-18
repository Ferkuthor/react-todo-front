import React from 'react'
import { TaskItem } from './TaskItem'
import { Grommet, Box, Button, Text } from 'grommet';

import { TaskContext } from '../../contexts/AppProvider'

export const TaskContainer = (props) => {

    const { taskSearchList, onChangeCompleted, onClickDelete, onClickEdit } = React.useContext(TaskContext);

    return (
        <Grommet>
            <Box pad="medium" background="light-2" align="center" >
                {
                    taskSearchList.length > 0
                        ? taskSearchList.map((taskItem, index) => (
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
                        : <Text> No hay tareas! </Text>
                }
            </Box>
        </Grommet>
    )
}
