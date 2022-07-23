import { LOCALSTORAGE_PREFIX } from "../constants/settings";

/**
 * @return {string} preference theme.
 */
export const getLocalStorage = (name) => {
	let storaged;

	try {
		storaged = window.localStorage.getItem(`${LOCALSTORAGE_PREFIX}-${name}`);
		//TODO: agregar mensaje de éxito.
	} catch {
		console.log("Habilita localstorage para una mejor experiencia."); // TODO: agregar mensajes en la app.
	}

	return storaged;
};

/**
 * @param {string} theme preference theme.
 */
export const setLocalStorage = (name, value) => {
	try {
		window.localStorage.setItem(`${LOCALSTORAGE_PREFIX}-${name}`, value);
	} catch {
		console.log("Habilita localstorage para una mejor experiencia."); // TODO: agregar mensajes en la app.
	}
};