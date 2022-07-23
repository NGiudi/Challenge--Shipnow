import React from "react";
import ReactDOM from "react-dom";

/* import context */
import { SettingsProvider } from "./context/SettingsContext";
import { BoardProvider } from "./context/BoardContext";
import { SnackbarProvider } from "notistack";

/* import icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

/* import componets */
import App from "./App";

/* fontawensome icons */
library.add(fas, far);

ReactDOM.render(
	<React.StrictMode>
		<SettingsProvider>
			<SnackbarProvider maxSnack={3}>  
				<BoardProvider>
					<App />
				</BoardProvider>
			</SnackbarProvider>   
		</SettingsProvider>
	</React.StrictMode>,
	document.getElementById("root")
);