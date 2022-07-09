import React from "react";

import TopBar from "./components/TopBar/TopBar";
import Board from "./components/Board/Board";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<>
			<TopBar />
			<Sidebar />
			<Board/>
		</>
	);
}

export default App;