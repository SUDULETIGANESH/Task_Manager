import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: '1', name: 'Sample Task 1', description: 'Do something interesting' },
    { id: '2', name: 'Sample Task 2', description: 'Another thing to do' },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      prepare(name, description) {
        return {
          payload: {
            id: nanoid(),
            name,
            description,
          },
        };
      },
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask(state, action) {
      const { id, name, description } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id);
      if (existingTask) {
        existingTask.name = name;
        existingTask.description = description;
      }
    },
  },
});

export const { addTask, removeTask, editTask } = tasksSlice.actions;

export const selectAllTasks = state => state.tasks.tasks;

export default tasksSlice.reducer;