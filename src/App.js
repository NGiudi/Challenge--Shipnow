import React, { useState } from "react";

import SettingsModal from "./components/SettingsModal/SettingsModal";

import TopBar from "./components/TopBar/TopBar";
import Board from "./components/Board/Board";

function App() {
	/*TODO: Agregar este valor dentro de un contexto junto a otros valores. */
	const [openSettingsModal, setOpenSettingsModal] = useState(false);
  
	return (
		<>
			<TopBar settingsClick={() => setOpenSettingsModal(true)} />
			
			<Board/>

			<SettingsModal 
				onClose={() => setOpenSettingsModal(false)}
				show={openSettingsModal}
			/>
		</>
	);
}

export default App;