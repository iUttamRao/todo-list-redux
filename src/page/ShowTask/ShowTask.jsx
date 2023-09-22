import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from '../../component';
import { removeTask, updateTask } from '../../redux/reducer/task-reducer';

const ShowTask = () => {
  const {tasks} = useSelector(state =>state.task);
  const [editList, setEditList] = useState([]);
  console.log("tasks",tasks)

  const dispatch = useDispatch();

  const handleDelete = (index) =>{
      dispatch(removeTask(index))
  }
  const handleUpdate = (index, save=false) =>{
    if(save) {
      const filteredIndex = editList.filter(val => val !== index);
      setEditList(filteredIndex);
    } else {
      setEditList([...editList, index]);
    }
  }

  const handleOnChange = (index, value) => {
    dispatch(updateTask({index, value}))
  }

  return (
    <Table
      list={tasks}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      editList={editList}
      onChange={handleOnChange}
    />
  )
}

export default ShowTask