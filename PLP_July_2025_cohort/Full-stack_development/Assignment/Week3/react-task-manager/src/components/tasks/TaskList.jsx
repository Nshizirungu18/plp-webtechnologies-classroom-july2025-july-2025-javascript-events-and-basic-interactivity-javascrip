import React from 'react';
import { Check, Trash2 } from 'lucide-react';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 py-8">
        No tasks found
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
        >
          <button
            onClick={() => onToggleTask(task.id)}
            className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
              task.completed
                ? 'bg-green-500 border-green-500'
                : 'border-gray-300 dark:border-gray-500 hover:border-green-500'
            }`}
          >
            {task.completed && <Check className="w-4 h-4 text-white" />}
          </button>
          <span
            className={`flex-1 ${
              task.completed
                ? 'line-through text-gray-400 dark:text-gray-500'
                : 'text-gray-900 dark:text-white'
            }`}
          >
            {task.text}
          </span>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
