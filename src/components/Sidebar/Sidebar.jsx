import React, { useContext } from "react";

/* context */
import { SettingsContext } from "../../context/SettingsContext";
import { BoardContext } from "../../context/BoardContext";

/* libraries */
import { Formik, Form } from "formik";

/* components */
import CloseButton from "./CloseButton/CloseButton";

/* ds components */
import InputField from "../../design_system/InputField/InputField";
import Button from "../../design_system/Button/Button";

/* styles */
import { SidebarWrapper } from "./Sidebar.styles";

/* helpers */
import settingsValidation from "./settingsValidationSchema";

const Sidebar = () => {
	const { time, rows, columns, setColumns, setRows, setTime} = useContext(BoardContext);
	const { openSidebar, setOpenSidebar } = useContext(SettingsContext);
  
	return (
		<SidebarWrapper open={openSidebar}>
			<CloseButton />

			<Formik
				initialValues={{
					time: time,
					rows: rows,
					columns: columns
				}}
				validationSchema={settingsValidation}
				onSubmit={(values) => {
					console.log(values);
					setColumns(values.columns);
					setRows(values.rows);
					setTime(values.time);
					
					setOpenSidebar(false);
					//enqueueSnackbar("Configuraciones Modificadas con éxito.", { variant: "success" });
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<InputField
							iserror={!!(errors.time && touched.time)}
							label="Intervalo de tiempo"
							name="time"
							type="number"
						/>
							
						<InputField
							iserror={!!(errors.rows && touched.rows)}
							label="Filas"
							name="rows"
							type="number"
						/>

						<InputField
							iserror={!!(errors.columns && touched.columns)}
							label="Columnas"
							name="columns"
							type="number"
						/>

						<Button type="submit">
							Guardar Cambios
						</Button>
					</Form>
				)}
			</Formik>
		</SidebarWrapper>
	);
};

export default  Sidebar;