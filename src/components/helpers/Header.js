import React from 'react';

import { Nav, Grommet, Header, Heading, Button } from 'grommet';

import { TaskContext } from '../../contexts/AppProvider'



export const HeaderBar = () => {
    const { onClickTaskCreate } = React.useContext(TaskContext);
    return (
        <Grommet>
            <Header background="brand" pad="medium">
                <Heading margin="none">Mis Tareas</Heading>
                <Nav direction="row">                   
                    <Button primary label="Nueva" onClick={onClickTaskCreate}/>
                </Nav>
            </Header>
        </Grommet>
    )
}
