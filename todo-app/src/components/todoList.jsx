import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TodoItem from './todoItem';
import { CircularProgress } from '@mui/material';

const TodoList = (props) => {
  const todos = props.todos;
  let loading = props.loading;
  return  <>
  {loading ? (
    <CircularProgress />
  ) : (
    <ul className="grid grid-cols-1 w-4/5 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )}
</>
};

export default TodoList;
