import React from 'react';
import {TaskCounter} from '../tasks/TaskCounter';
import {TaskSearch} from '../tasks/TaskSearch';
import {TaskContainer} from '../tasks/TaskContainer';
import {TaskItem} from '../tasks/TaskItem';
import {TaskCreate} from '../tasks/TaskCreate';

const taskListExample = [
  {name: 'task0', completed: false},
  {name: 'task1', completed: true},
  {name: 'task2', completed: true},
];

function App() {

  // States
  const [taskList, setTaskList] = React.useState(taskListExample);
  const [searchValue, setSearchValue] = React.useState('');
  const [taskSearchList, setTaskSearchList] = React.useState(taskList);


  // Events
  const onChangeSearchValue = ({target}) => {    
    // Set Value
    const {value} = target;   
    setSearchValue(value);

    // Set & Filter
    setTaskSearchList(taskList.filter(task => (
      task.name.toLocaleLowerCase().includes(value)
    )));
  }
  
  
  // Hooks CRUD

  // Create
  const onClickTaskCreate = () => {
    setTaskList([...taskList, {     
      name: 'prueba',
      completed: false,
    }]) 
  }
  // Toogle Completed
  const onChangeCompleted = ({target}) => {
    // To Update
    const {id, checked} = target;   
    // Copy
    const _taskList = [...taskList];
    // Update
    _taskList[id].completed = checked;
    // Set  
    setTaskList(_taskList);    
  }

  // Delete
  const onClickDelete = ({target}) => {
    // To Delete
    const {id} = target; 
    // Copy
    const _taskList = [...taskList];
    // Delete
    _taskList.splice(id, 1);
    // Set
    setTaskList(_taskList);

    /* Alternative
    setTaskList(prev=>(
      prev.filter((item,index)=>(index !== Number(target.id)))
    ));*/
  }

  // Edit
  const onClickEdit = (params) => {
    alert("onClickEdit");
  }

  // Counter
  const taskCompleted = taskList.filter(taskItem => taskItem.completed).length;
  const taskTotal = taskList.length; 
      
  
  return (
    <>

      <TaskCounter total={taskTotal} completed={taskCompleted} />

      <TaskSearch searchValue={searchValue} onChange={onChangeSearchValue} />

      <TaskContainer >
        {
          taskSearchList.map((taskItem,index)=>(            
             <TaskItem 
                key={index} 
                id={index} 
                name={taskItem.name} 
                completed={taskItem.completed} 
                onChangeCompleted={onChangeCompleted}
                onClickDelete={onClickDelete}
                onClickEdit={onClickEdit}
              />
          ))
        }
      </TaskContainer>     

      <TaskCreate onClick={onClickTaskCreate} />
        
    </>
  );
}

export default App;
