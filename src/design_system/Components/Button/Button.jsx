import React from "react";
import PropTypes from "prop-types";

import { BtnStyles } from "./Button.styles";

const Button = (props) => {
	return (
		<BtnStyles {...props} />
	);
};

Button.propTypes = {
	fullWidth: PropTypes.bool,
	kind: PropTypes.oneOf(["ghost", "solid"]),
	margin: PropTypes.string,
	round: PropTypes.bool,
};

Button.defaultProps = {
	fullWidth: false,
	kind: "solid",
	margin: "0px",
	round: false,
};

export default Button;