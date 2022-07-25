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
		
		setOpenSidebar(null);
		//TODO: Agregar mensaje de error.
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

						<Button fullWidth type="submit">
							Guardar cambios
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