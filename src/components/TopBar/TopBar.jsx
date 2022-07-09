import React, { useContext } from "react";
import PropTypes from "prop-types";

import { BoardContext } from "../../context/BoardContext";

import ButtonsBar from "./ButtonsBar/ButtonsBar";

import { Wrapper, Text } from "./TopBar.styles";

const TopBar = (props) => {
	const { count } = useContext(BoardContext);
  
	return (
		<Wrapper>
			<ButtonsBar settingsClick={props.settingsClick} />

			<Text>Generación # {count}</Text>
		</Wrapper>
	);
};

TopBar.propTypes = {
	settingsClick: PropTypes.func,
};

TopBar.defaultProps = {
	settingsClick: null,
};

export default TopBar;