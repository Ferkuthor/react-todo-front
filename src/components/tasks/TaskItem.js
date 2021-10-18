import React from 'react'
import { Grommet, Box, CheckBox, Button } from 'grommet';
import { Edit, Trash } from 'grommet-icons';

export const TaskItem = (props) => {
    return (

        <Grommet>
            <Box  direction="row" >                
                <CheckBox
                    id={props.id.toString()}
                    checked={props.completed}
                    onChange={props.onChangeCompleted}
                    label={props.name}
                />
               
                <Button icon={<Edit />} hoverIndicator onClick={ () => props.onClickEdit(props.id)} />
                <Button icon={<Trash />} hoverIndicator onClick={() => props.onClickDelete(props.id)} />   
                                       
            </Box>
        </Grommet>
    )
}
