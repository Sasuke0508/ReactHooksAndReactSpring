import { ADD_TASK, CHANGE_THEME, DELETE_TASK, DONE_TASK, EDIT_TASK, UPDATE_TASK } from "../type/ToDoList";

export const addTaskAction = (newTask) => ({
    type: ADD_TASK,
    newTask
})

export const doneTaskAction = (idTask) => ({
    type: DONE_TASK,
    idTask
})

export const deleteTaskAction = (idTask) => ({
    type: DELETE_TASK,
    idTask
})

export const changeThemeAction = (themeName) => ({
    type: CHANGE_THEME,
    themeName
})

export const editTaskAction = (idTask) => ({
    type: EDIT_TASK,
    idTask,
})

export const updateTaskAction = (taskName) => ({
    type: UPDATE_TASK,
    taskName
})


