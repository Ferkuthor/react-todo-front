import React from 'react'
import {Modal} from '../helpers/Modal'
import {TaskContext} from '../../contexts/AppProvider'

export const TaskForm = (props) => {

    const {onClickTaskAdd, onClickTaskUpdate, onClickTaskCancel, taskValue, onChangeTaskValue, modal} = React.useContext(TaskContext);
    
    return (  
        <>        
        { modal.isOpen &&       
            <Modal> 
                { modal.add &&
                    <>
                        <h2> Agregar </h2>
                        <input type="text" placeholder="Insertar tarea" value={taskValue} onChange={onChangeTaskValue}  />
                        <div>
                            <button onClick={onClickTaskAdd} >Añadir</button>
                            <button onClick={onClickTaskCancel} >Cancelar</button>
                        </div> 
                    </>
                }   

                { modal.edit &&
                    <>
                        <h2> Editar </h2>
                        <input type="text" value={taskValue} onChange={onChangeTaskValue}  />
                        <div>
                            <button onClick={onClickTaskUpdate} >Actualizar</button>
                            <button onClick={onClickTaskCancel} >Cancelar</button>
                        </div> 
                    </>
                }
                    
            </Modal>
        }
        </>
       
    )
}
