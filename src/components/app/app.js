import React from 'react';
import {TaskCounter} from '../tasks/TaskCounter';
import {TaskSearch} from '../tasks/TaskSearch';
import {TaskContainer} from '../tasks/TaskContainer';
import {TaskForm} from '../tasks/TaskForm';
import {AppProvider} from '../../contexts/AppProvider'

function App() {
  
  return (
   
    <AppProvider>

      <TaskCounter />      
      <TaskSearch />      
      <TaskContainer />
      <TaskForm />  

    </AppProvider>   
  );
}

export default App;
