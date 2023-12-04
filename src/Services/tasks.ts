import axios from 'axios';
import { ITask } from '../Models/Task.model';

export const getTasksList = () => {
  return axios.get('https://backend-nuawi-f58654165e2a.herokuapp.com/task');
};

export const createTasks = (data: ITask) => {
  data.id = Math.floor(Math.random() * 100);
  return axios.post(
    'https://backend-nuawi-f58654165e2a.herokuapp.com/task',
    data
  );
};
export const editTasks = (data: ITask | null) => {
  return axios.put(
    `https://backend-nuawi-f58654165e2a.herokuapp.com/task/${data?.id}`,
    data
  );
};

export const deleteTasks = (idTask: number) => {
  return axios.delete(
    `https://backend-nuawi-f58654165e2a.herokuapp.com/task/${idTask}`
  );
};
