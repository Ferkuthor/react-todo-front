import React from 'react'
import { TaskItem } from './TaskItem'
import { Grommet, Box, Text, Spinner } from 'grommet';

import { TaskContext } from '../../contexts/AppProvider'

export const TaskContainer = (props) => {

    const { taskSearchList, onChangeCompleted, onClickDelete, onClickEdit, loading } = React.useContext(TaskContext);

    return (
        <Grommet>
            <Box pad="medium" background="light-2" align="center" >
                {!loading
                    ? taskSearchList.length > 0
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
                    : <Spinner
                        border={[
                            { side: 'all', color: 'transparent', size: 'medium' },
                            { side: 'horizontal', color: 'brand', size: 'medium' },
                        ]}
                    />
                }
            </Box>
        </Grommet>
    )
}
