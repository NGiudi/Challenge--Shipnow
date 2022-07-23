import { DEFAULT_THEME, LOCALSTORAGE_PREFIX } from "../constants/settings";

/**
 * @return {string} preference theme.
 */
export const getStoragedTheme = () => {
	let savedTheme;

	try {
		savedTheme = window.localStorage.getItem(`${LOCALSTORAGE_PREFIX}-theme`);
	} catch {
		console.log("Habilita localstorage para una mejor experiencia."); // TODO: agregar mensajes en la app.
	}

	return savedTheme || DEFAULT_THEME;
};

/**
 * @param {string} theme preference theme.
 */
export const setStoragedTheme = (theme) => {
	try {
		window.localStorage.setItem(`${LOCALSTORAGE_PREFIX}-theme`, theme );
	} catch {
		console.log("Habilita localstorage para una mejor experiencia."); // TODO: agregar mensajes en la app.
	}
};