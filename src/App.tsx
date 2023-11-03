import {Container} from 'react-bootstrap';
import {AddTask} from './components/AddTask/AddTask';
import {TaskList} from './components/TaskList/TaskList';
import {useAppSelector} from './hooks';
import {useDispatch} from 'react-redux';
import {AuthTodo} from './components/AuthTodo/AuthTodo';
import {useEffect} from 'react';
import {getTask} from './store/tasks/tasksSlice';
import {getLocalStorage} from './UTILS/getLocalStorage';

function App() {
  const dispatch = useDispatch();
  const {isLS, tasks} = useAppSelector((state) => state.tasks);
  const {name} = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (name) {
      if (isLS) {
        return localStorage.setItem(name, JSON.stringify(tasks));
      }

      const tasksIsLS = getLocalStorage(name);
      dispatch(getTask(tasksIsLS));
    }
  }, [tasks, name, dispatch, isLS]);

  return (
    <Container className='app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column'>
      {name && (
        <>
          <h3 className='mt-3 mb-3'>Todo App</h3>
          <AddTask />
          <TaskList />
        </>
      )}
      {!name && <AuthTodo />}
    </Container>
  );
}

export default App;
