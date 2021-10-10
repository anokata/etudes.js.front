import React from 'react';
import TodoList from './todolist';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App(props) {
  return (
    <main>
      <h1>Todo List App</h1>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </main>
  );
}

