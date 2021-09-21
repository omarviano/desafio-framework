import React, { useEffect, useState } from 'react';

import { Todo } from './models/todo';
import { TodosServices } from './services';

const ToDos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    TodosServices.list().then(({ data }) => setTodos(data));
  }, []);

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li>
            {todo.title}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDos;
