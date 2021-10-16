import React from 'react'


export const TaskContext = React.createContext();

export const AppProvider = (props) => {

    // Example Data
    const taskListExample = [
        {id: 0, name: 'task0', completed: false},
        {id: 1, name: 'task1', completed: true},
        {id: 2, name: 'task2', completed: true},
      ];

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
    
    // Task CRUD

    // Create
    const onClickTaskCreate = () => {
        setTaskList([...taskList, { 
        id: taskList.length,    
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

    React.useEffect(() => {
        setSearchValue('');
        setTaskSearchList(taskList);       
    },[taskList]);
    

    // TaskCounter
    const taskCompleted = taskList.filter(taskItem => taskItem.completed).length;
    const taskTotal = taskList.length;
 

    return (
        <TaskContext.Provider value={
            {
                taskList,
                searchValue,
                taskSearchList,
                taskTotal,
                taskCompleted,               
                onChangeSearchValue,
                onChangeCompleted,
                onClickDelete,
                onClickEdit,
                onClickTaskCreate
            }
        }>
            {props.children}
        </TaskContext.Provider>
    )
}
