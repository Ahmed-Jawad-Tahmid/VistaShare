
import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../shared/util/dataGetters';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userData = await getAllUsers();
        setUsers(userData);
      } catch (err) {
        setError('Failed to fetch users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className='group-header'>User List</div>
      <div className="user-list">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.MemberID} className="user-item">
              <h3>{user.Name}</h3>
              <p><strong>Interests:</strong> {user.Interests || 'N/A'}</p>
              <p><strong>Total KM Travelled:</strong> {user.TotalKMTravelled || 0}</p>
            </div>
          ))
        ) : (
          <p>No users available.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
