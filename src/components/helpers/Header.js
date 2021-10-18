import React from 'react';

import { Anchor, Nav, Grommet, Header, Heading } from 'grommet'; 

export const HeaderBar = () => (
    <Grommet>
        <Header background="brand" pad="medium">
            <Heading margin="none">Mis Tareas</Heading>
            <Nav direction="row">
                <Anchor label="Agregar" />               
            </Nav>
        </Header>
    </Grommet>
);
