import React from 'react';
import {HeaderBar} from '../helpers/Header'
import {TaskCounter} from '../tasks/TaskCounter';
import {TaskSearch} from '../tasks/TaskSearch';
import {TaskContainer} from '../tasks/TaskContainer';
import {TaskForm} from '../tasks/TaskForm';
import { Box } from 'grommet';

import {AppProvider} from '../../contexts/AppProvider'

function App() {

  return (
   
    <AppProvider>

      <HeaderBar/>

      <Box border={{ color: 'brand', size: 'large' }} pad="xlarge">  
     
        <TaskSearch /> 
        <TaskCounter />      

        <TaskContainer />
        <TaskForm /> 
      </Box> 

    </AppProvider>   
  );
}

export default App;
