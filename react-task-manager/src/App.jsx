import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import TasksPage from './pages/TasksPage';
import UsersPage from './pages/UsersPage';

function App() {
  const [currentPage, setCurrentPage] = useState('tasks');

  return (
    <ThemeProvider>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {currentPage === 'tasks' ? <TasksPage /> : <UsersPage />}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
