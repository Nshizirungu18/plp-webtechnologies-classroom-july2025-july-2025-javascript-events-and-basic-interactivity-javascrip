import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx'; // ✅ fixed path

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="text-center">
        <p className="text-red-500 mb-4">Error: {error}</p>
        <Button onClick={fetchUsers}>Retry</Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex items-center gap-2 mb-6">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search users by name or email..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {currentUsers.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {user.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {user.email}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    {user.company.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            <Button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              variant="secondary"
            >
              Previous
            </Button>
            <span className="px-4 py-2 text-gray-700 dark:text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              variant="secondary"
            >
              Next
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default UsersPage;
