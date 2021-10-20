import React from 'react'
import { Search } from 'grommet-icons';
import { Box, Grommet, TextInput } from 'grommet';

import { TaskContext } from '../../contexts/AppProvider'

export const TaskSearch = (props) => {

    const { searchValue, onChangeSearchValue } = React.useContext(TaskContext);

    return (
        <Grommet>
            <Box fill align="center" justify="start" >
                <Box width="medium" gap="medium">
                    <TextInput
                        icon={<Search />}
                        placeholder="Buscar Tarea ..."
                        value={searchValue}
                        onChange={onChangeSearchValue} />
                </Box>
            </Box>
        </Grommet>
    )
}

