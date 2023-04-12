import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const AddTeamForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [accessLevel, setAccessLevel] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      username,
      mobileNumber,
      email,
      accessLevel
    }

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await axios.post('/api/users', data, config);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    setName('');
    setUsername('');
    setMobileNumber('');
    setEmail('');
    setAccessLevel('');
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      background: '#f5f5f5' 
    }}>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-4xl text-center mb-8 font-bold text-gray-800" style={{ width: '100%' }}>Add Team Form</h1>

        <div className="mb-4">
          <label className="block font-bold text-gray-700" htmlFor="name">Name:</label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold text-gray-700" htmlFor="username">Username:</label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold text-gray-700" htmlFor="mobileNumber">Mobile Number:</label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="mobileNumber"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold text-gray-700" htmlFor="email">Email:</label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
    </div>

<div className="mb-4">
  <label className="block font-bold text-gray-700" htmlFor="accessLevel">Access Level:</label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="accessLevel"
    value={accessLevel}
    onChange={(e) => setAccessLevel(e.target.value)}
    required
  >
    <option value="">-- Select Access Level --</option>
    <option value="admin">Admin</option>
    <option value="team">Team</option>

  </select>
</div>

<div className="flex items-center justify-between">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Submit
  </button>
  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => {
    setName('');
    setUsername('');
    setMobileNumber('');
    setEmail('');
    setAccessLevel('');
  }}>
    Clear
  </button>
</div>
</form>
</div>
  );
}
export default AddTeamForm
