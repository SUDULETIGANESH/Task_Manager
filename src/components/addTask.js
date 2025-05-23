import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../rtk/reducers';

const AddTaskForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || description.trim() === '') {
      alert('Please enter both task name and description.');
      return;
    }
    dispatch(addTask(name, description));
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Add New Task</h2>
      <div>
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
        />
      </div>
      <div>
        <label htmlFor="taskDescription">Description:</label>
        <textarea
          id="taskDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box', minHeight: '80px' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;