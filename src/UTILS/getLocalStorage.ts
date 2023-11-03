import {MyTask} from '../store/tasks/tasksSlice';

export const getLocalStorage = (name: string): MyTask[] => {
  const tasks = localStorage.getItem(name);
  if (tasks) {
    const data = JSON.parse(tasks);
    return data;
  }

  return [];
};
