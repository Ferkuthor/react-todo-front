import React from 'react'
import { Grommet, Notification, Box, Text } from 'grommet';

import { TaskContext } from '../../contexts/AppProvider'

export const TaskCounter = (props) => {

    const { taskTotal, taskCompleted } = React.useContext(TaskContext);

    return (
        <Grommet>            
            <Box pad="xsmall" justify="center" gap="large" align="center" >
                <Box gap="xsmall">                    
                    <Notification
                        title={taskCompleted<taskTotal ? `Te faltan ${taskTotal - taskCompleted} tareas` : `Felicitaciones! terminaste`}                                        
                        status={taskCompleted<taskTotal ? "warning" : "normal" } 
                        message={`${taskTotal} en total` }                     
                    />
                </Box>
            </Box>
        </Grommet>
    )
}

