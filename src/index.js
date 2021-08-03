import React from 'react';
import ReactDOM from 'react-dom';

import { BoardProvider } from './context/BoardContext';
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BoardProvider>
      <App />
    </BoardProvider>
  </React.StrictMode>,
  document.getElementById('root')
);