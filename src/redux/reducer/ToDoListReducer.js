import { ToDoListDefaultTheme } from "../../JSS_StyledComponent/Themes/ToDoListDefaultTheme";
import {
  ADD_TASK,
  CHANGE_THEME,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from "../type/ToDoList";
import { arrayTheme } from "../../JSS_StyledComponent/Themes/ThemeManager";

const initialState = {
  themeToDoList: ToDoListDefaultTheme,
  listTask: [
    { id: 1, taskName: "Task 1", done: true },
    { id: 2, taskName: "Task 2", done: true },
    { id: 3, taskName: "Task 3", done: false },
    { id: 4, taskName: "Task 4", done: false },
  ],
  taskEdit: {
    id: 0,
    taskName: "",
    done: false,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      if (action.newTask.taskName.trim() === "") {
        alert("Task name is required!");
        return { ...state };
      }
      let index = state.listTask.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        alert("Task name already exits");
        return { ...state };
      }
      state.listTask = [...state.listTask, action.newTask];
      return { ...state };
    }
    case CHANGE_THEME: {
      let index = arrayTheme.findIndex(
        (theme) => theme.themeName === action.themeName
      );
      state.themeToDoList = arrayTheme[index].type;
      return { ...state };
    }

    case DONE_TASK: {
      let index = state.listTask.findIndex((task) => task.id === action.idTask);
      state.listTask[index].done = true;
      state.listTask = [...state.listTask];
      return { ...state };
    }

    case DELETE_TASK: {
      // let index = state.listTask.findIndex(task => task.id === action.idTask);
      // state.listTask.splice(index, 1)
      // state.listTask = [...state.listTask];
      state.listTask = state.listTask.filter(
        (task) => task.id !== action.idTask
      );
      return { ...state };
    }

    case EDIT_TASK: {
      return {
        ...state,
        taskEdit: state.listTask.find((task) => task.id === action.idTask),
      };
    }

    case UPDATE_TASK: {
      if (action.taskName.trim() === "") {
        alert("Task name is required!");
        return { ...state };
      }
      let index = state.listTask.findIndex(
        (task) => task.taskName === action.taskName
      );
      if (index !== -1) {
        alert("Task name already exits");
        return { ...state };
      }

      let index2 = state.listTask.findIndex(
        (task) => task.id === state.taskEdit.id
      );

      if (index2 === -1) {
        alert("Choose task need edit!");
        return { ...state };
      }
      state.listTask[index2].taskName = action.taskName;
      state.listTask = [...state.listTask];
      state.taskEdit = { id: 0, taskName: "", done: false };
      return { ...state };
    }

    default:
      return { ...state };
  }
};
