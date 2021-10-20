import React from 'react'

export const useLocalStorage = (dataName, initial) => {

    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    // On Start
    React.useEffect(() => {        
        dataLoad();     
    },[]);

    React.useEffect(() => {
        if(data.length>0 ){            
            dataSave();   
        }  
    },[data]);

    // LOAD
    const dataLoad = () => {        
        setLoading(true);
         // Load Data        
         let _getItem = localStorage.getItem(dataName);         
         if (_getItem) {
            // Set                       
            setData(JSON.parse( _getItem));
            console.log('Load Data');            
         }else {
             // First Time
            localStorage.setItem(dataName, JSON.stringify( initial ));  
            setData(initial);         
            console.log('First Time');           
         }  
         setLoading(false);   
    }

    // SAVE
    const dataSave = () => {
        console.log('Data Save')
        localStorage.setItem(dataName, JSON.stringify( data ));
    } 

    return {
        data,
        setData,
        dataLoad,
        dataSave,
    };
}
