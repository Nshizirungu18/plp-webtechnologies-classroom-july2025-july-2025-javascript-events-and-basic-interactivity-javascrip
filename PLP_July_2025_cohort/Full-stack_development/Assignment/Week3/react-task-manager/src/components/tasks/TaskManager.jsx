import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Card from '../ui/Card.jsx';
import TaskStats from './TaskStats';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="space-y-6">
      <TaskStats tasks={tasks} />

      <Card title="Task Manager">
        <TaskForm onAddTask={addTask} />

        <div className="flex gap-2 mb-4">
          {['all', 'active', 'completed'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </Card>
    </div>
  );
};

export default TaskManager;
