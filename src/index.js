import React from 'react';
import ReactDOM from 'react-dom';

import { SnackbarProvider } from 'notistack';

import { BoardProvider } from './context/BoardContext';
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>  
      <BoardProvider>
        <App />
      </BoardProvider>
    </SnackbarProvider>   
  </React.StrictMode>,
  document.getElementById('root')
);