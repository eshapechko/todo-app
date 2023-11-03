import {createSlice} from '@reduxjs/toolkit';

export interface MyTask {
  id: string;
  task: string;
  complete: boolean;
  importance: string;
}

const initialState: {
  isLS: boolean;
  tasks: MyTask[];
} = {
  isLS: false,
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTask(state, action) {
      state.isLS = true;
      state.tasks = action.payload;
    },
    addTask(state, action) {
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    completeTask(state, action) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.complete = true;
        }
        return task;
      });
    },
    editTask(state, action) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.task = action.payload.task;
        }
        return task;
      });
    },
  },
});

export const {getTask, addTask, deleteTask, completeTask, editTask} =
  tasksSlice.actions;

export default tasksSlice.reducer;
