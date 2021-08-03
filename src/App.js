import { useContext } from 'react';

import { SnackbarProvider } from 'notistack';
import { AppBar } from '@material-ui/core';

import SettingsModal from './components/SettingsModal';
import { BoardContext } from './context/BoardContext';
import ButtonsGroup from './components/ButtonsGroup'; 
import Board from './components/Board';

function App() {
  const { count } = useContext(BoardContext);
  
  return (
    <SnackbarProvider maxSnack={3}>  
      <AppBar position="static">
        <SettingsModal/>
      </AppBar>

      <p className="text-generation">Generación # {count}</p>

      <div className="box-center">
        <Board/>
      </div>

      <div className="box-buttons-bar">
          <ButtonsGroup/>
      </div>
    </SnackbarProvider>   
  );
}

export default App;