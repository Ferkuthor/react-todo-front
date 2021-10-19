import React from 'react'
import { Modal } from '../helpers/Modal'
import { Box, Form, FormField, Grommet, TextInput, Button } from 'grommet';

import { TaskContext } from '../../contexts/AppProvider'

export const TaskForm = (props) => {

    const { onClickTaskAdd, onClickTaskUpdate, onClickTaskCancel, taskValue, onChangeTaskValue, modal } = React.useContext(TaskContext);

    return (
        <>
            {modal.isOpen &&
                <Modal>
                    {modal.add &&
                        <Grommet>
                            <Box align="center" pad="large">
                                <Form>
                                    <Box border gap="medium" pad="large" width="medium">
                                        <FormField htmlFor="enabled-id" name="enabled" label="Nueva Tarea">
                                            <TextInput
                                                placeholder="Insertar..."
                                                value={taskValue}
                                                onChange={onChangeTaskValue}
                                            />
                                        </FormField>
                                        <Box direction="row" justify="between">
                                            <Button
                                                primary
                                                label="Añadir"
                                                onClick={onClickTaskAdd}
                                            />
                                            <Button
                                                secondary
                                                label="Cancelar"
                                                onClick={onClickTaskCancel}
                                            />
                                        </Box>
                                    </Box>
                                </Form>
                            </Box>
                        </Grommet>
                    }

                    {modal.edit &&
                        <Grommet>
                            <Box align="center" pad="large">
                                <Form>
                                    <Box border gap="medium" pad="large" width="medium">
                                        <FormField htmlFor="enabled-id" name="enabled" label="Nueva Tarea">
                                            <TextInput                                               
                                                value={taskValue}
                                                onChange={onChangeTaskValue}
                                            />
                                        </FormField>
                                        <Box direction="row" justify="between">
                                            <Button
                                                primary
                                                label="Actualizar"
                                                onClick={onClickTaskUpdate}
                                            />
                                            <Button
                                                secondary
                                                label="Cancelar"
                                                onClick={onClickTaskCancel}
                                            />
                                        </Box>
                                    </Box>
                                </Form>
                            </Box>
                        </Grommet>
                    }

                </Modal>
            }
        </>

    )
}
