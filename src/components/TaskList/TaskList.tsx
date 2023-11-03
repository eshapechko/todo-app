import {Table} from 'react-bootstrap';
import {useAppSelector} from '../../hooks';
import {Task} from '../AddTask/Task/Task';

type Props = {};

export const TaskList = (props: Props) => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  return (
    <div className='table-wrapper'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Задача</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>
          {!!tasks.length &&
            tasks.map((task, index) => (
              <Task key={task.id} {...task} index={index + 1} />
            ))}
        </tbody>
      </Table>
      {!tasks.length && <p className='fs-4'>Задач нет</p>}
    </div>
  );
};
