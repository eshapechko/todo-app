import {Button, Form, InputGroup} from 'react-bootstrap';
import {MyTask, completeTask, editTask} from '../../../store/tasks/tasksSlice';
import {useState} from 'react';
import {DeleteTaskModal} from '../../Modal/DeleteTaskModal';
import {useDispatch} from 'react-redux';

type Props = MyTask & {index: number};

export const Task = ({complete, task, id, index, importance}: Props) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [taskValue, setTaskValue] = useState(task);
  const [edit, setEdit] = useState(false);

  console.log('TASSSSSKKKKK');

  const handleComplete = () => {
    dispatch(completeTask(id));
  };

  const handleEdit = () => {
    if (edit) {
      setEdit(false);
      dispatch(editTask({id, task: taskValue}));
      return;
    }

    setEdit(true);
  };

  const changeEditValue = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setTaskValue(e.target.value);
    }
  };

  return (
    <>
      <tr
        className={
          complete
            ? 'table-info'
            : importance === 'emergency'
            ? 'table-danger'
            : importance === 'important'
            ? 'table-warning'
            : importance === 'regular'
            ? 'table-success'
            : 'table-light'
        }
      >
        <td>{index}</td>
        {!edit ? (
          <td className={complete ? 'text-decoration-line-through' : 'task'}>
            {taskValue}
          </td>
        ) : (
          <td>
            <InputGroup>
              <Form.Control
                value={taskValue}
                required
                onChange={changeEditValue}
              />
            </InputGroup>
          </td>
        )}
        <td>{complete ? 'Выполнена' : 'В процессе'}</td>
        <td>
          <Button
            className='btn btn-danger me-3'
            onClick={() => setOpenModal(true)}
          >
            Удалить
          </Button>
          <Button className='btn btn-success me-3' onClick={handleComplete}>
            Завершить
          </Button>
          <Button
            // ref={editBtn}
            className='btn btn-secondary'
            data-id={id}
            onClick={handleEdit}
          >
            Редактировать
          </Button>
        </td>
      </tr>
      {openModal && <DeleteTaskModal setOpenModal={setOpenModal} id={id} />}
    </>
  );
};
