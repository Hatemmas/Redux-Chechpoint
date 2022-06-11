import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actionTypes"

export const deleteTask = (id) => {
    return {
    type: DELETE_TASK,
    payload: id
    }
}

export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export const completeTask = (id) => {
    return {
        type: COMPLETE_TASK,
        payload: id
    }
}
export const filterTask = () => {
    return {
        type: FILTER_TASK
    }
}

export const edit = (editedTask) => {
    return {
        type: EDIT_TASK,
        payload: editedTask
    }
}