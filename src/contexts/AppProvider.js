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
    const [taskValue, setTaskValue] = React.useState('');
    const [taskEdit, setTaskEdit] = React.useState({id: -1, name: '', completed: false});
    const [modal, setModal] = React.useState({isOpen: false, edit: false, add: false});
   

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

    const onChangeTaskValue = ({target}) => {
        setTaskValue(target.value);
    }
    
    const onClickTaskAdd = () => {
        if(taskValue){
            setTaskList([...taskList, { 
                id: taskList.length,    
                name: taskValue,
                completed: false,
            }])
            setTaskValue('');            
        }
        setModal({isOpen: false});
    }   



    const onClickTaskCancel = () => {          
        setModal({isOpen:false});
    }
    
    // Task CRUD

    // Create
    const onClickTaskCreate = () => {
        setTaskValue('');
        setModal({isOpen: true, add: true});        
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

    // Edit
    const onClickEdit = (id) => {
        // Get task
        const taskToEdit = taskList.filter(task => (
            Number(task.id) === Number(id)
        ));  
        
        setTaskEdit(taskToEdit[0]);
        setTaskValue(taskToEdit[0].name);
        setModal({isOpen:true, edit: true});        
        
    }
    // Update
    const onClickTaskUpdate = () => {    
        // New Task
        setTaskEdit(prev => prev.name = taskValue);
        // Copy
        const _taskList = [...taskList];       
        // Get index
        const _index = _taskList.indexOf(taskEdit); 
        // Remplace
        _taskList.splice(_index,1,taskEdit);
        // Set            
        setTaskList(_taskList);
        // Hide Modal
        setModal({isOpen: false});
    }

    // Delete
    const onClickDelete = (id) => { 
        // Filter
        setTaskList(prev=>(
            prev.filter((item,index)=>(item.id !== id))
        ));
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
                // States
                taskList,
                searchValue,
                taskSearchList,
                taskTotal,
                taskCompleted,
                modal,
                taskValue,
                // Events           
                onChangeSearchValue,
                onChangeCompleted,
                onClickDelete,
                onClickEdit,
                onClickTaskCreate,
                onClickTaskCancel,
                onClickTaskAdd,
                onClickTaskUpdate,
                onChangeTaskValue,
                
            }
        }>
            {props.children}
        </TaskContext.Provider>
    )
}
