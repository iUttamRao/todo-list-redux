import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TASKLIST } from '../../router/keys';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/reducer/task-reducer';

const AddTask = () => {
    const dispatch = useDispatch();
    const [taskName,setTaskName] = useState('');
    const navigate=useNavigate();
    const addTaskToList =() =>{
      dispatch(addTask(taskName))
      setTaskName('')
      navigate(TASKLIST);
    }
  return (
    <center>
      <h1>Add Task</h1>
      <input 
      type="text" 
      placeholder='Enter Task Value' 
      value={taskName}
      onChange={(e) => setTaskName(e.target.value)}
       />
       <button onClick ={addTaskToList}>Add</button>
    </center>
    
  )
}

export default AddTask