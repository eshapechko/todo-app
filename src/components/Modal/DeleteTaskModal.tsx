import {Dispatch, SetStateAction} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/tasks/tasksSlice';

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  id: string;
};

export const DeleteTaskModal = ({setOpenModal, id}: Props) => {
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div className='modal mt-4' style={{display: 'block', position: 'fixed'}}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Вы уверенны что хотите удалить задачу?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant='secondary' onClick={() => setOpenModal(false)}>
            Закрыть
          </Button>
          <Button
            variant='danger'
            onClick={() => {
              setOpenModal(false);
              dispatch(deleteTask(id));
            }}
          >
            Удалить
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>,
    document.getElementById('deleteTaskModal')!,
  );
};
