import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../rtk/reducers';

const EditTaskModal = ({ task, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (task) {
      setName(task.name);
      setDescription(task.description);
    }
  }, [task]);

  if (!task) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || description.trim() === '') {
      alert('Please enter both task name and description.');
      return;
    }
    dispatch(editTask({ id: task.id, name, description }));
    onClose();
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    zIndex: 1000,
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '400px'
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={modalStyle}>
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="editTaskName">Task Name:</label>
            <input
              type="text"
              id="editTaskName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label htmlFor="editTaskDescription">Description:</label>
            <textarea
              id="editTaskDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box', minHeight: '80px' }}
            />
          </div>
          <div style={{ marginTop: '15px', textAlign: 'right' }}>
            <button type="button" onClick={onClose} style={{ marginRight: '10px', padding: '10px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Cancel
            </button>
            <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditTaskModal;