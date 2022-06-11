import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../redux/action'
import EditTask from './EditTask'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

const Task = ({task}) => {
    // const [change, setChange] = useState(false)
    const dispatch = useDispatch()

  return (
    <div className='taskList'>

        <h2 id={task.isDone?"done": ""}> {task.action} <EditTask task={task} /> </h2>
        <br />
        <Button variant="contained" color='success' onClick={()=>dispatch(completeTask(task.id))}>{task.isDone?"Undo":<DoneIcon/>}</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={()=>dispatch(deleteTask(task.id))}>Delete</Button>
    </div>
  )
}

export default Task