import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTasks, removeTask } from '../rtk/reducers';
import EditTaskModal from './editTask'; // Or your inline edit form logic

const TaskList = () => {
  const tasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null); // For modal editing

  const handleRemove = (id) => {
    if (window.confirm('Are you sure you want to remove this task?')) {
      dispatch(removeTask(id));
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleCloseModal = () => {
    setEditingTask(null);
  };

  const taskItemStyle = {
    border: '1px solid #eee',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column'
  };

  const taskHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const taskNameStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold'
  };

  const buttonStyle = {
    padding: '8px 12px',
    marginLeft: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ffc107',
    color: 'black'
  };

  const removeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    color: 'white'
  };

  if (!tasks || tasks.length === 0) {
    return <p>No tasks yet. Add some!</p>;
  }

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map(task => (
        <div key={task.id} style={taskItemStyle}>
          <div style={taskHeaderStyle}>
            <span style={taskNameStyle}>{task.name}</span>
            <div>
              <button onClick={() => handleEdit(task)} style={editButtonStyle}>
                Edit
              </button>
              <button onClick={() => handleRemove(task.id)} style={removeButtonStyle}>
                Remove
              </button>
            </div>
          </div>
          <p>{task.description}</p>
        </div>
      ))}
      {editingTask && <EditTaskModal task={editingTask} onClose={handleCloseModal} />}
    </div>
  );
};

export default TaskList;