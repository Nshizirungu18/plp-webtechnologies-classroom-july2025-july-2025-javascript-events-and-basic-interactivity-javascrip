import React from 'react';
import Card from '../ui/Card.jsx';

const TaskStats = ({ tasks }) => {
  const stats = {
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-blue-100 text-sm font-medium">Total Tasks</p>
            <p className="text-3xl font-bold mt-2">{stats.total}</p>
          </div>
        </div>
      </Card>
      <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-green-100 text-sm font-medium">Active</p>
            <p className="text-3xl font-bold mt-2">{stats.active}</p>
          </div>
        </div>
      </Card>
      <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-purple-100 text-sm font-medium">Completed</p>
            <p className="text-3xl font-bold mt-2">{stats.completed}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TaskStats;
