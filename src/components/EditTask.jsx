import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { edit } from '../redux/action';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';

const customStyles = {
  overlay: {backgroundColor: 'rgba(0, 0, 0, 0.70'},
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const EditTask = ({task}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [text, setText] = useState(task.action)
    const dispatch = useDispatch()

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
        id: task.id,
        action: text,
        isDone: task.isDone
    }
    dispatch(edit(newTask))
    closeModal()
}

  return (
    <div>
        <Fab size="small" color="success" aria-label="edit" style={{marginLeft: "20px"}} onClick={openModal}><EditIcon /></Fab>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form action="" onSubmit={handleSubmit} className='modal'>
              <div><input type="text" value={text} onChange={(e)=>setText(e.target.value)} /></div>
              <div className='modalBtn'>
                <Button color='success' variant="contained" onClick={handleSubmit} >Confirm</Button>
                <Button color='error' variant="contained" onClick={closeModal} >Cancel</Button>
              </div>
          </form>
      </Modal>
    </div>
  )
}

export default EditTask