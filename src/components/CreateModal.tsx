import { ITask } from '../Models/Task.model';

const CreateModal = ({
  setOpenCreate,
  createNewTask,
  editSomeTask,
  setTask,
  task,
  isEditing,
}: {
  setOpenCreate: (openCreate: boolean) => void;
  createNewTask: () => void;
  editSomeTask: () => void;
  setTask: (task: ITask) => void;
  task: ITask | null;
  isEditing: boolean;
}) => {
  return (
    <div className="create-modal">
      <div className="create-modal__container">
        <input
          type="text"
          placeholder="Title"
          value={task?.title}
          onChange={(event) => {
            setTask((prev: ITask) => ({ ...prev, title: event.target.value }));
          }}
        />
        <select
          name="status"
          value={task?.state}
          onChange={(event) => {
            setTask((prev: ITask) => ({ ...prev, state: event.target.value }));
          }}
        >
          <option value=""></option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="NO COMPLETED">NO COMPLETED</option>
        </select>
        <div>
          <button
            className="button--primary"
            type="button"
            onClick={() => {
              if (isEditing) {
                editSomeTask();
              } else {
                createNewTask();
              }
            }}
          >
            Create
          </button>
          <button
            className="button--secondary"
            onClick={() => {
              setOpenCreate(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
