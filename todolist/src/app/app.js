import React from 'react';
import Button from '@mui/material/Button';
import TodoList from './todolist';
//state
//todolist

export default function App(props) {
  return (
    <main>
      <h1>Todo List App</h1>
      <Button variant="contained">add</Button>
      <TodoList />
    </main>
  );
}

