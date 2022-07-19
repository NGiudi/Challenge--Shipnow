import * as yup from "yup";

import { MIN_TIME, MAX_ROWS, MAX_COLUMNS } from "../../constants/settings";

const settingsValidationSchema = yup.object({
	theme: yup
		.string()
		.required("Tema requerido"),
	time: yup
		.number()
		.positive("El número debe ser positivo")
		.moreThan(MIN_TIME, `El intervalo mínimo es de ${MIN_TIME+1}ms`)
		.required("Intervalo de tiempo requerido"),
	rows: yup
		.number()
		.positive("El número debe ser positivo")
		.max(MAX_ROWS, `No se puede superar las ${MAX_ROWS} filas`)
		.required("Cantidad de filas requerido"),
	columns: yup
		.number()
		.positive("El número debe ser positivo")
		.max(MAX_COLUMNS, `No se puede superar las ${MAX_COLUMNS} columnas`)
		.required("Cantidad de columnas requerido"),
});

export default settingsValidationSchema;