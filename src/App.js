import React, { useState } from 'react';
import './App.css';
import Tasks from './Tasks';

function App() {
  const [taskName, setTaskName] = useState(null);
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (!taskName || !taskName.length) {
      alert('Enter task name.');
      return;
    }

    let newTasks = tasks;
    newTasks.push({
      id: (tasks.length ? tasks.length : 0) + 1,
      name: taskName,
      hasCompleted: false
    });
    setTaskName('');
    setTasks(newTasks);
  }

  return (
    <div className="todo-container">
      <div className="todo-header">
        <div>
          <div className="header-title">
            <div className="right"><h1>To-Do App!</h1></div>
            <div className="right add-new">Add New To-Do</div>
            <div className="add-container">
              <input placeholder="Enter new task" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
              <div className="right">
                <button onClick={() => addTask()}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="todo-content">
        <div className="content-title">Let's get some work done</div>

        <Tasks items={tasks} />
      </div>
    </div>
  );
}

export default App;
