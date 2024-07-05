import { createSlice } from '@reduxjs/toolkit';

// Function to load tasks from local storage
const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

// Function to save tasks to local storage
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: loadTasksFromLocalStorage(),
  reducers: {
    addTask: (state, action) => {
      const newTask = { id: Date.now(), text: action.payload, completed: false };
      state.push(newTask);
      saveTasksToLocalStorage(state);
    },
    deleteTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      saveTasksToLocalStorage(newState);
      return newState;
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
        saveTasksToLocalStorage(state);
      }
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage(state);
      }
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
