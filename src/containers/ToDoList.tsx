import { useEffect, useState } from 'react';
import {
  createTasks,
  deleteTasks,
  editTasks,
  getTasksList,
} from '../Services/tasks';
import { ITask } from '../Models/Task.model';
import CreateModal from '../components/CreateModal';

const ToDoList = () => {
  const [taskList, setTaskList] = useState<Array<ITask>>([]);
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [task, setTask] = useState<ITask | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const getTasks = async () => {
    try {
      const { data } = await getTasksList();
      setTaskList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewTask = async () => {
    try {
      const response = await createTasks(task);
    } catch (error) {
      console.log(error);
    }
  };

  const editSomeTask = async () => {
    try {
      const response = await editTasks(task);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSomeTask = async (idTask: number) => {
    try {
      const { data } = await deleteTasks(idTask);
      setTaskList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="todo-list">
        <div className="todo-list__title">
          <button
            className="button--primary"
            onClick={() => {
              setOpenCreate(true);
            }}
          >
            Create
          </button>
          <h1>To Do List</h1>
        </div>
        <ul>
          {taskList.map((task: ITask) => (
            <li key={`${task.title}-${task.state}`}>
              <p>{task.title}</p>
              <div>
                <button
                  className="button--primary"
                  onClick={() => {
                    setIsEditing(true);
                    setTask(task);
                    setOpenCreate(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="button--secondary"
                  onClick={() => {
                    deleteSomeTask(task.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {openCreate ? (
        <CreateModal
          setOpenCreate={setOpenCreate}
          createNewTask={createNewTask}
          editSomeTask={editSomeTask}
          setTask={setTask}
          task={task}
          isEditing={isEditing}
        />
      ) : null}
    </>
  );
};

export default ToDoList;
