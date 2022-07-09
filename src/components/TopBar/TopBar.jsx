import React, { useContext } from "react";

import { BoardContext } from "../../context/BoardContext";

import ButtonsBar from "./ButtonsBar/ButtonsBar";

import { Wrapper, Text } from "./TopBar.styles";

const TopBar = () => {
	const { count } = useContext(BoardContext);
  
	return (
		<Wrapper>
			<ButtonsBar />

			<Text>Generación # {count}</Text>
		</Wrapper>
	);
};

export default TopBar;