import React from 'react';
import {TaskCounter} from '../tasks/TaskCounter';
import {TaskSearch} from '../tasks/TaskSearch';
import {TaskContainer} from '../tasks/TaskContainer';
import {TaskItem} from '../tasks/TaskItem';
import {TaskCreate} from '../tasks/TaskCreate';

const taskListExample = [
  {id: 0, name: 'task1', completed: false},
  {id: 1, name: 'task2', completed: true},
  {id: 2, name: 'task3', completed: true},
];

function App() {

  // States
  const [taskList, setTaskList] = React.useState(taskListExample);
  const [searchValue, setSearchValue] = React.useState('');

  // Events
  const onChangeSearchValue = ({target}) => {
    setSearchValue(target.value);    
  }

  const onClickTaskCreate = () => {
    setTaskList([...taskList, {
      id: taskList.length,
      name: 'prueba',
      completed: false,
    }]) 
  }
  
  const onChangeTaskItem = ({target}) => {
    alert("onChangeTaskItem");
  }
  

  

  // Counter
  //const taskTotal = taskList.length;
  //const taskCompleted = taskList.filter(taskItem => taskItem.completed).length;
  const taskTotal = 0;
  const taskCompleted = 0;
  
  return (
    <>

      <TaskCounter total={taskTotal} completed={taskCompleted} />

      <TaskSearch searchValue={searchValue} onChange={onChangeSearchValue} />

      <TaskContainer >
        {
          taskList.map((taskItem)=>(            
             <TaskItem 
                key={taskItem.id} 
                id={taskItem.id} 
                name={taskItem.name} 
                completed={taskItem.completed} 
                onChange={onChangeTaskItem}
              />
          ))
        }
      </TaskContainer>     

      <TaskCreate onClick={onClickTaskCreate} />
        
    </>
  );
}

export default App;
