import React, { createRef, useContext } from "react";

/* import context */
import { BoardContext } from "../../context/BoardContext";

/* import components */
import BoardInterface from "../BoardInterface/BoardInterface";
import Cell from "../Cell/Cell";

/* import ds components */
import { Flex } from "../../design_system";

/* import styles */
import { BoardWrapper } from "./Board.styles";

const Board = () => {
	const { board } = useContext(BoardContext);

	const refBoard = createRef();
  
	return (
		<BoardInterface refBoard={refBoard}>
			<BoardWrapper ref={refBoard}>
				{
					board.map((row, y) => {
						return (
							<Flex key={y}>
								{
									row.map((life, x) => {
										return <Cell key={x} life={life} posY={y} posX={x} />;
									})
								}
							</Flex>
						);
					})
				}
			</BoardWrapper>
		</BoardInterface>
	);
};

export default Board;