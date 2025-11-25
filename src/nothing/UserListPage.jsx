import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserListPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  let myuser={
    user,
    id:3
  }
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com`,{params:{
          myuser,
        }});
        const userData = res.data;
        setUsers(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false); // Always set loading to false
      }
    };
    const postUser = async()=>{
      try {
        const updt = await axios.post(`https://jsonplaceholder.typicode.com`)
      } catch (error) {
        
      }
    }
    fetchUser();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Display a loading message
  if (isLoading) {
    return <div>Loading users... ⏳</div>;
  }

  // Display an error message if the API call fails
  if (error) {
    return <div>Error: {error} 😞</div>;
  }

  // Render the list of users
  return (
    <div>
      <h1>User List 👥</h1>
      <ul> {/* It's good practice to wrap list items in a <ul> or <ol> */}
        {users.map(user => (
          // FIX: Using parentheses for an implicit return
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserListPage;