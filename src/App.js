import React, { useState } from 'react';
import Icon from '@material-ui/icons/Info';

function TaskItem(props) {
  const [showInfo, setShowInfo] = useState(false);

  function handleIconClick() {
    setShowInfo(!showInfo);
  }

  return (
    <div>
      <Icon onClick={handleIconClick} />
      {showInfo && <div>Здесь будет отображаться информация о задаче</div>}
    </div>
  );
}


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  function handleDelete(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newTask} onChange={handleChange} />
        <button type="submit">Добавить задачу</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}