import React from 'react';
import {TaskCounter} from '../tasks/TaskCounter';
import {TaskSearch} from '../tasks/TaskSearch';
import {TaskContainer} from '../tasks/TaskContainer';
import {TaskItem} from '../tasks/TaskItem';
import {TaskCreate} from '../tasks/TaskCreate';
import {TaskContext} from '../../contexts/AppProvider';

function App() {

  const {taskSearchList, onChangeCompleted, onClickDelete, onClickEdit } = React.useContext(TaskContext);
  
  return (
   
    <>
      <TaskCounter />
      
      <TaskSearch />
      
      <TaskContainer />   

      <TaskCreate/>
    </>    
  );
}

export default App;
