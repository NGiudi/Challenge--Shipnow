import React, { useContext } from "react";

/* import context */
import { SettingsContext } from "./context/SettingsContext";

/* import components */
import TopBar from "./components/TopBar/TopBar";
import Board from "./components/Board/Board";
import Sidebar from "./components/Sidebar/Sidebar";

/* import styles */
import { ThemeProvider } from "styled-components";
import { themes } from "./design_system";
import GlobalCSS from "./global.css";

const App = () => {
	const { theme } = useContext(SettingsContext);

	return (
		<ThemeProvider theme={themes[theme]}>
			<GlobalCSS />

			<TopBar />
			<Sidebar />
			<Board/>
		</ThemeProvider>
	);
};

export default App;