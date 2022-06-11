import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, filter, filterTask } from '../redux/action'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';

const AddTask = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: Math.random(),
            action: text,
            isDone: false
        }
        dispatch(addTask(newTask))
        setText('')
    }
    
  return (
    <div className='header'>
        <h1>To Do App <span> again!</span></h1>

        <form onSubmit={handleSubmit}>
            <TextField 
            id="outlined-basic" 
            label="Add a new Task" 
            variant="outlined" 
            color='success' 
            focused  
            style={{width: "400px"}}
            type="text" 
            value={text} 
            onChange={(e)=> setText(e.target.value)} />
            <Fab 
            color="success" 
            aria-label="add" 
            style={{marginLeft: "20px"}}
            onClick={handleSubmit}>
                <AddIcon />
            </Fab>
        </form>
        <br />
        <Button variant="contained" color='success' onClick={() => dispatch(filterTask())}> <FilterAltIcon  />Filter</Button>
    </div>
  )
}

export default AddTask