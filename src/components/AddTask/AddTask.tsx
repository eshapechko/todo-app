import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {addTask} from '../../store/tasks/tasksSlice';
import {useDispatch} from 'react-redux';

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [valueSelect, setValueSelect] = useState('ordinary');

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(
      addTask({
        task,
        id: Math.random().toString(16).substring(2, 10),
        complete: false,
        importance: valueSelect,
      }),
    );
    setTask('');
  };

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setTask(e.target.value);
    }

    if (e.target instanceof HTMLSelectElement) {
      setValueSelect(e.target.value);
    }
  };

  return (
    <Form className='d-flex align-items-center mb-3' onSubmit={handleSubmit}>
      <Form.Label className='form-group me-3 mb-0'>
        <Form.Control
          type='text'
          className='form-control'
          placeholder='Ввести задачу'
          onChange={handleChange}
          value={task}
        />
      </Form.Label>

      <Form.Select
        className='me-3 w-50'
        value={valueSelect}
        onChange={handleChange}
      >
        <option value='ordinary'>Обычная</option>
        <option value='important'>Важная</option>
        <option value='emergency'>Срочная</option>
      </Form.Select>

      <Button
        type='submit'
        className='btn btn-primary me-3'
        onSubmit={handleSubmit}
        disabled={task === '' ? true : false}
      >
        Сохранить
      </Button>

      <Button
        type='reset'
        className='btn btn-warning'
        onClick={() => setTask('')}
      >
        Очистить
      </Button>
    </Form>
  );
};
