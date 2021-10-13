import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Main from './main';

export default function App() {
  return (
    <main>
      <Provider store={store}>
        <Main />
      </Provider>
    </main>
  );
}
