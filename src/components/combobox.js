/* eslint-disable no-use-before-define */
import React, {useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {firestore} from '../firebase';
//import Button from '@material-ui/core/Button';
//import ButtonGroup from '@material-ui/core/ButtonGroup';



export default function ComboBox() {
    const [tasks,setTasks] = useState([])

    const fetchTasks = async()=>{
        console.log(tasks)
        const response= firestore.collection("test");
        const data= await response.get();
        data.docs.forEach(item=>{
            setTasks(tasks => [...tasks,item.data()])
            console.log(item.data())
        })
        console.log(tasks)
    }
    useEffect(() => {
        fetchTasks();

        // eslint-disable-next-line
    }, [])


  return (
    <div>
        <Autocomplete
      id="combo-box-demo"
      options={tasks}
      getOptionLabel={(option) => option.task}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Task" variant="outlined" />}
    />

    </div>
  );
}

//<ButtonGroup variant="contained" aria-label="outlined primary button group">
//{tasks.map(tache => 
//    <Button>{tache.task}</Button>
//)}
//</ButtonGroup>