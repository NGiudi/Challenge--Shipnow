import React, { useContext } from "react";

/* context */
import { SettingsContext } from "../../../../context/SettingsContext";
import { BoardContext } from "../../../../context/BoardContext";

/* components */
import { ColumnsInput, RowsInput, TimeInput } from "../../../Common/Inputs";
import { ThemeSelect } from "../../../Common/Selects";

/* ds components */
import { Button } from "../../../../design_system";

/* form validation */
import settingsValidation from "./settingsValidationSchema";
import { Formik, Form } from "formik";

/* helpers */
import { setStoragedTheme } from "../../../../utils/storage";

const SettingsSidebarTab = () => {
	const { time, rows, columns, setColumns, setRows, setTime} = useContext(BoardContext);
	const { theme, setOpenSidebar, setTheme } = useContext(SettingsContext);
	
	const initialValues = { columns, time, rows };

	const handleThemeChange = (e) => {
		const { value } = e.target;
		setTheme(value);
	};

	const handleSumit = (values) => {
		setColumns(values.columns);
		setRows(values.rows);
		setTime(values.time);
		setStoragedTheme(values.theme);
						
		setOpenSidebar(null);
		//enqueueSnackbar("Configuraciones Modificadas con éxito.", { variant: "success" });
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSumit}
				validationSchema={settingsValidation}
			>
				{({ errors, touched }) => (
					<Form>
						{/* TODO: no pasar todos los errors o toucheds */}
						<TimeInput errors={errors} touched={touched}/>

						<RowsInput errors={errors} touched={touched}/>

						<ColumnsInput errors={errors} touched={touched}/>

						<Button type="submit">
						Guardar Cambios
						</Button>
					</Form>
				)}
			</Formik>

			{/* TODO: Agregar un divider */}

			<ThemeSelect 
				onChange={handleThemeChange}
				value={theme}
			/>
		</>
	);
};

export default SettingsSidebarTab;