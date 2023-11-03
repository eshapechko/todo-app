import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {authIn} from '../../store/auth/authSlice';

export const AuthTodo = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.ChangeEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(authIn(name));
    setName('');
  };

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    e.preventDefault();
    if (e.target instanceof HTMLInputElement) {
      setName(e.target.value);
    }
  };

  return (
    <Form
      className='vh-100 w-100 d-flex flex-column align-items-center justify-content-center'
      onSubmit={handleSubmit}
    >
      <Form.Label className='fs-4 mb-4' htmlFor='password'>
        Авторизация
      </Form.Label>
      <Form.Control
        className='mb-4 '
        style={{width: '35%'}}
        type='text'
        id='password'
        required
        value={name}
        onChange={handleChange}
      />

      <Button variant='primary' type='submit' style={{padding: '8px 56px'}}>
        Войти
      </Button>
    </Form>
  );
};
