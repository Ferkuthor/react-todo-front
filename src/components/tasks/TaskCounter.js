import React from 'react'
import { TaskContext } from '../../contexts/AppProvider'

import { Grommet, Notification, Box, Text } from 'grommet';

export const TaskCounter = (props) => {

    const { taskTotal, taskCompleted } = React.useContext(TaskContext);

    return (
        <Grommet>
            {/* <h3></h3> */}
            <Box pad="large" justify="center" gap="large">
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

