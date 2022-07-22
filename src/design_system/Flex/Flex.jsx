import React from "react";
import PropTypes from "prop-types";

import { FlexWrapper } from "./Flex.styles";

const Flex = (props) => {
	return (
		<FlexWrapper {...props} />
	);
};

Flex.propTypes = {
	alignItems: PropTypes.string,
	children: PropTypes.node,
};

Flex.defaultProps = {
	alignItems: "start",
	children: null,
};

export default Flex;