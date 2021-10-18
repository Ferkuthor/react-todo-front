import React from 'react';
import {HeaderBar} from '../helpers/Header'
import {TaskCounter} from '../tasks/TaskCounter';
import {TaskSearch} from '../tasks/TaskSearch';
import {TaskContainer} from '../tasks/TaskContainer';
import {TaskForm} from '../tasks/TaskForm';
import {AppProvider} from '../../contexts/AppProvider'

function App() {
  
  return (
   
    <AppProvider>

      <HeaderBar/>

      <TaskCounter />      
      <TaskSearch />      
      <TaskContainer />
      <TaskForm />  

    </AppProvider>   
  );
}

export default App;
