import React from 'react';
import AddTaskForm from './components/addTask';
import TaskList from './components/taskList';
import './App.css'; // Optional: for global styles

function App() {
  return (
    <div className="App" style={{ maxWidth: '500px', margin: '5px auto', fontFamily: 'Arial, sans-serif', padding: '5px', height:'30px' }}>
      <header className="App-header">
        <h1>Task Manager</h1>
      </header>
      <main>
        <AddTaskForm />
        <TaskList />
      </main>
    </div>
  );
}

export default App;