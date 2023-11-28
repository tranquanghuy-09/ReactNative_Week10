// todoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://6549dc73e182221f8d520173.mockapi.io/api/v1/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (newTodo) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  });
  const data = await response.json();
  return data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return id;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, updatedTodo }) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTodo),
  });
  const data = await response.json();
  return data;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      });
  },
});

export default todoSlice.reducer;
