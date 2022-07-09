import React from "react";
import PropTypes from "prop-types";

import { ErrorMessage } from "formik";

/* import styles */
import { ErrorWrapper, Input, Label } from "./InputField.styles";

const InputField = (props) => {
	const { iserror, label, name, ...others } = props;
  
	return (
		<>
			<Label>{label}</Label>
			<Input autoComplete="off" name={name} iserror={iserror.toString()} {...others} />

			<ErrorWrapper>
				<ErrorMessage name={name} />
			</ErrorWrapper>
		</>
	);
};

InputField.propTypes = {
	iserror: PropTypes.bool,
	label: PropTypes.string,
	name: PropTypes.string,
};

InputField.defaultProps = {
	iserror: false,
	name: "",
	label: "",
};

export default InputField;
