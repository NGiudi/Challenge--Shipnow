import { useContext } from 'react';

import { AppBar } from '@material-ui/core';

import { BoardContext } from './context/BoardContext';

import SettingsModal from './components/SettingsModal/SettingsModal';
import ButtonsGroup from './components/ButtonsGroup/ButtonsGroup'; 
import Board from './components/Board/Board';

function App() {
  const { count } = useContext(BoardContext);
  
  return (
    <>
      <AppBar position="static">
        <SettingsModal/>
      </AppBar>

      <p className="text-generation">Generación # {count}</p>

      <Board/>

      <ButtonsGroup/>
    </>
  );
}

export default App;