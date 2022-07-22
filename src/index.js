import React from "react";
import ReactDOM from "react-dom";

import { SnackbarProvider } from "notistack";

/* import context */
import { SettingsProvider } from "./context/SettingsContext";
import { BoardProvider } from "./context/BoardContext";

/* import icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

/* import componets */
import App from "./App";

/* import styles */
import GlobalCSS from "./global.css";

/* fontawensome icons */
library.add(fas, far);

ReactDOM.render(
	<React.StrictMode>
		<SnackbarProvider maxSnack={3}>  
			<BoardProvider>
				<SettingsProvider>
					<GlobalCSS />
					<App />
				</SettingsProvider>
			</BoardProvider>
		</SnackbarProvider>   
	</React.StrictMode>,
	document.getElementById("root")
);