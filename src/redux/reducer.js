import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actionTypes";

const init = {
    tasks: [
        {id:Math.random(), action: 'Make your first line with Redux', isDone:true},
        {id:Math.random(), action: 'How about a second line', isDone:false},
        {id:Math.random(), action: 'Make a To Do App again', isDone:true},
    ]
}

const reducer = (state=init, {type, payload}) => {
switch (type) {
    case DELETE_TASK:
        return {
            ...state,tasks: state.tasks.filter(el=>el.id!==payload)
        }
        
    case ADD_TASK:
        return {
            ...state,tasks: [...state.tasks, payload]
        }

    case COMPLETE_TASK:
        return{
            ...state, tasks: state.tasks.map((el) => el.id === payload ? { ...el, isDone: !el.isDone} : el)
        }

    case FILTER_TASK: 
        return {
            ...state, filter: !state. filter
        }    
    
    case EDIT_TASK:
        return {
            ...state, tasks: state.tasks.map(el=>el.id===payload.id?payload:el)
        }

    default:
        return state
}
}

export default reducer